<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\ThrottlesLogins;
use Auth;
use App\Admin;
use JavaScript;
use Illuminate\Support\Facades\Session;
use Carbon\Carbon;

class AdminLoginController extends Controller
{
    use ThrottlesLogins;

    public function __construct()
    {
        $this->middleware('guest:admin', ['except' => ['logout']]);
    }

    public function showLoginForm()
    {
        JavaScript::put([
            '_resetURI' => route('admin.password.request'),
            '_loginHIT' => route('admin.login.submit'),
        ]);
        
        return view('auth.admin-login');
    }

    /**
     * Get the login username to be used by the controller.
     *
     * @return string
     */
    public function username()
    {
        return 'email';
    }

    public function login(Request $request)
    {
        // Validate the form data
        $request->validate([
            'username'   => 'required|min:5',
            'password' => 'required|min:6'
        ]);

        // If the class is using the ThrottlesLogins trait, we can automatically throttle
        // the login attempts for this application. We'll key this by the username and
        // the IP address of the client making these requests into this application.
        if ($this->hasTooManyLoginAttempts($request)) {
            $this->fireLockoutEvent($request);

            return $this->sendLockoutResponse($request);
        }

        // Attempt to log the user in

        //check the username field input type [username or email or mobile]
        if(Admin::where('email', $request->username)->exists())
        {
            $field_type = 'email';
        }
        else if(Admin::where('username', $request->username)->exists())
        {
            $field_type = 'username';
        }
        else
        {
            $field_type = 'mobile';
        }

        if (Auth::guard('admin')->attempt([$field_type => $request->username, 'password' => $request->password, 'active' => 1], $request->remember)) {
            // if successful, then redirect to their intended location

            //store the login time in session
            Session::put('logged_in_at', Carbon::now());

            //here returning the uri to redirect as it is being processed by ajax
            return response()->json([
                'authenticated' => true, 
                'intended' => route('admin.dashboard'), 
                'firstname' => Admin::where($field_type, $request->username)->first()->fname
            ]);
        }

        // If the login attempt was unsuccessful we will increment the number of attempts
        // to login and redirect the user back to the login form. Of course, when this
        // user surpasses their maximum number of attempts they will get locked out.
        $this->incrementLoginAttempts($request);

        // if unsuccessful, then redirect back to the login with the form data
        //return redirect()->back()->withInput($request->only('email', 'remember'))->with('authenticationError', 'Incorrect Credentials');
        return response()->json(['authenticated' => false]);
    }

    public function logout()
    {
        Auth::guard('admin')->logout();
        return redirect()->route('admin.login');
    }
}
