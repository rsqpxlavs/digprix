<?php

namespace App\Http\Middleware\Backend;

use Closure;
use Auth;
use Carbon\Carbon;
use Illuminate\Support\Facades\Session;

class ForceLogoutAllDevices
{
    /**
     * if the purge_sessions column timestamp is greater than the logged_in time stored in session
     * then log the user out
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $purged_at = Auth::user()->purge_sessions;

        if($purged_at)
        {
            $device_logged_in_at = Carbon::parse(Session::get('logged_in_at'));
            $purged_sessions_at = Carbon::parse($purged_at);

            if ($device_logged_in_at->lt($purged_sessions_at)) 
            {
                Auth::guard('admin')->logout();
                Session::flush();
                Session::regenerate();

                return redirect()->route('admin.login');
            }
        }

        return $next($request);
    }
}
