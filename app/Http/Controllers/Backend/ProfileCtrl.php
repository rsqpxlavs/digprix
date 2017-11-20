<?php
namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;

class ProfileCtrl extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {

    }

    /**
     * Show the profile page
     *
     * @return \Illuminate\Http\Response
     */
    public function Visit()
    {
        // admin_notify('gritter-color info', 'Welcome', 'Hi, welcome back to digprix admin');
        return view('backend.profile');
    }

}
