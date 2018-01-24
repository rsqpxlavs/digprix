<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\EloquentModels\Backend\AdminRoles;
use App\Admin;
use App\Http\CustomClasses\FlushAllSessions\FlushSessions;

class ManageAccounts extends Controller
{
    /**
     * view the create admin account page
     */
    public function CreateForm()
    {
        $data = [
            'roles' => AdminRoles::all()
        ];

        return view('backend.account-create', $data);
    }

    /**
     * manage added accounts
     */
    public function ManageAccounts(Request $request)
    {
        //if filter by admin role
        if($request->has('role'))
        {
            $role = $request->query('role');
            if($role === 'all')
            {
                $admins = Admin::with(['accesslevel', 'loginhistory:id,admin_id,created_at'])->latest()->get();
            }
            else
            {
                $admins = Admin::with(['accesslevel', 'loginhistory:id,admin_id,created_at'])->whereHas('accesslevel', function ($query) use ($role) {
                    $query->where('role', $role);
                })->latest()->get();
            }
        }
        else
        {
            $admins = Admin::with(['accesslevel', 'loginhistory:id,admin_id,created_at'])->latest()->get();
        }

        $data = [
            'admins' => $admins,
            'total_admins' => Admin::count() - 1,
            'roles' => AdminRoles::withCount('account')->get()
        ];

        return view('backend.admin-account-manage', $data);
    }

    /**
     * toggle account active / inactive
     */
    public function ToggleActive(Request $request)
    {
        $request->validate([
            'id' => 'required|integer|exists:admins,id'
        ]);

        $admin = Admin::find($request->id);
        if($admin->active)
        {
            $admin->active = 0;
        }
        else
        {
            $admin->active = 1;
        }

        $admin->save();

        //clear all active sessions
        $flush = new FlushSessions($request->id, $admin, 'admin');
        $flush->secureAccount();

        return response(200);
    }
}
