<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Http\CustomClasses\FlushAllSessions\FlushSessions;
use Auth;
use JavaScript;
use App\Admin;

class AccountPage extends Controller
{
    public function Visit()
    {
        JavaScript::put([
            '_hitSecureMyAcc' => route('admin.secure.account')
        ]);

        $admin = Admin::findOrFail(Auth::user()->id);    

        return view('backend.account', ['history' => $admin->loginhistory()->latest()->paginate(5)]);
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
            $flush = new FlushSessions(Auth::user()->id, Auth::user(), 'admin');
            $flush->secureAccount();
            $flush->logoutTheUser();

            return response()->json(['secure' => 1]);
        }

        return response()->json(['secure' => 0]);
    }
}
