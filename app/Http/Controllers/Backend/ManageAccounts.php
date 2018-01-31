<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\EloquentModels\Backend\AdminRoles;
use App\Admin;
use App\Http\CustomClasses\FlushAllSessions\FlushSessions;
use Illuminate\Support\Facades\Hash;
use Auth;

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
                $admins = Admin::with(['accesslevel', 'loginhistory:id,admin_id,created_at'])->where([['super_admin', '!=', '1'], ['id', '!=', Auth::guard('admin')->user()->id]])->latest()->get();
            }
            else
            {
                $admins = Admin::with(['accesslevel', 'loginhistory:id,admin_id,created_at'])->where([['super_admin', '!=', '1'], ['id', '!=', Auth::guard('admin')->user()->id]])->whereHas('accesslevel', function ($query) use ($role) {
                    $query->where('role', $role);
                })->latest()->get();
            }
        }
        else
        {
            $admins = Admin::with(['accesslevel', 'loginhistory:id,admin_id,created_at'])->where([['super_admin', '!=', '1'], ['id', '!=', Auth::guard('admin')->user()->id]])->latest()->get();
        }

        //total no. of admins [except current user & except super admin]
        if(Auth::guard('admin')->user()->super_admin)
            //the current user is superadmin himself so just substract 1 from all
            $total_acc_no = Admin::count() - 1;
        else
            //curr user is admin so we need to substract 2 (1 for super admin acc + 1 for the current user's acc)
            $total_acc_no = Admin::count() - 2;
        

        $data = [
            'admins' => $admins,
            'total_admins' => $total_acc_no,
            'roles' => AdminRoles::withCount('account')->get()
        ];

        return view('backend.admin-account-manage', $data);
    }

    /**
     * create new admin account
     */
    public function CreateNew(Request $request)
    {
        $request->validate([
            'role.*' => 'required|integer|exists:admin_roles,id',
            'first_name' => 'required|alpha_num|min:3|max:255',
            'last_name' => 'nullable|alpha_num|max:255',
            'email' => 'required|email|unique:admins,email|max:255',
            'username' => 'nullable|alpha_num|min:6|max:10|unique:admins,username',
            'mobile' => ['nullable', 'regex:/^[^0-6][0-9]{9}$/', 'unique:admins,mobile'],
            'password' => 'required|min:8|max:30',
        ]);

        $admin = new Admin;
        $admin->fname = $request->input('first_name');
        $admin->lname = $request->input('last_name');
        $admin->email = $request->input('email');
        $admin->username = $request->input('username');
        $admin->mobile = $request->input('mobile');
        $admin->password = Hash::make($request->input('password'));
        $admin->save();

        $admin->accesslevel()->attach($request->input('role'));

        admin_notify('gritter-color primary', 'Action Confirm !', 'a new account created');
        return redirect()->back()->with('account-added', true);
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
