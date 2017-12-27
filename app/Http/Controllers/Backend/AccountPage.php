<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Events\backend\account\LogoutFromAllDevices;
use Auth;
use JavaScript;

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
        broadcast(new LogoutFromAllDevices(Auth::user()->id));
    }
}
