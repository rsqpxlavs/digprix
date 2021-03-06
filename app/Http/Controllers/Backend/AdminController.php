<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;

class AdminController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //$this->middleware('auth:admin');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // admin_notify('gritter-color info', 'Welcome '. Auth::guard('admin')->user()->fname, 'Hi, welcome back to digprix admin');
        return view('backend.dashboard');
    }

    /**
     * the fallback route for not found 404 page
     */
    public function NotFound()
    {
        return view('errors.admin-404');
    }
}
