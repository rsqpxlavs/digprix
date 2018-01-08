<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\EloquentModels\Backend\AdminRoles;
use App\Admin;

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
    public function ManageAccounts()
    {
        $data = [
            'admins' => Admin::with(['accesslevel', 'loginhistory:id,admin_id,created_at'])->latest()->get(),
            'roles' => AdminRoles::withCount('account')->get()
        ];

        return view('backend.admin-account-manage', $data);
    }
}
