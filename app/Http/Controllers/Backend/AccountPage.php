<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Events\backend\account\LogoutFromAllDevices;
use Auth;
use JavaScript;
use Illuminate\Support\Facades\Session;
use App\Admin;
use Carbon\Carbon;

class AccountPage extends Controller
{
    public function Visit()
    {
        JavaScript::put([
            '_hitSecureMyAcc' => route('admin.secure.account')
        ]);

        return view('backend.account');
    }
    
    /**
     * logout from all devices
     */
    public function SecureAccount(Request $request)
    {
        $request->validate([
            'secure' => 'required|boolean'
        ]);

        if($request->input('secure'))
        {
            broadcast(new LogoutFromAllDevices(Auth::user()->id));

            //set purge all sessions timestamp
            $admin = Auth::user();
            $admin->purge_sessions = Carbon::now();
            $admin->remember_token = null;
            $admin->save();

            //logout from current device
            Auth::guard('admin')->logout();
            Session::flush();
            Session::regenerate();

            return response()->json(['secure' => 1]);
        }

        return response()->json(['secure' => 0]);
    }
}
