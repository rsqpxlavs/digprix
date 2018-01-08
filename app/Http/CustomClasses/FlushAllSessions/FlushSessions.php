<?php

namespace App\Http\CustomClasses\FlushAllSessions;

use App\Http\CustomClasses\FlushAllSessions\SecureAccount;
use App\Events\backend\account\LogoutFromAllDevices;
use Carbon\Carbon;
use Auth;
use Illuminate\Support\Facades\Session;

/**
 * log user out from all devices
 * broadcast event
 * put purge_sessions column timestamp
 */
class FlushSessions implements SecureAccount {

    public $user_id;
    public $user;
    public $guard;

    /**
     * instantiate the class
     * 
     * @param int user_id
     * @param mixed user object [User / Admin]
     * @param string auth guard [web / admin]
     */
    public function __construct($user_id, $user, $guard)
    {
        $this->user_id = $user_id;
        $this->user = $user;
        $this->guard = $guard;
    }

    public function broadcastUser()
    {
        broadcast(new LogoutFromAllDevices($this->user_id));
    }

    public function purgeSessions()
    {
        $this->user->purge_sessions = Carbon::now();
        $this->user->remember_token = null;
        $this->user->save();
    }

    public function logoutTheUser()
    {
        Auth::guard($this->guard)->logout();
        Session::flush();
        Session::regenerate();
    }

    public function secureAccount()
    {
        $this->broadcastUser();
        $this->purgeSessions();
    }
}
