<?php

namespace App\Listeners;

use Illuminate\Auth\Events\Login;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Log;

class LogSuccessfulLogin
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  Login  $event
     * @return void
     */
    public function handle(Login $user)
    {
        if(isset($user->user))
        {
            //detect which type of user [admin/user] logged in
            switch (get_class($user->user)) 
            {
                case "App\Admin":
                    Log::info('Admin loggedin Email: ->'. $user->user->email .', ID -> '. $user->user->id);
                    break;
                case "App\User":
                    Log::info('User loggedin Email: ->'. $user->user->email .', ID -> '. $user->user->id);
                    break;
                default:
                    Log::info('New login with undetected user type- Email: ->'. $user->user->email .', ID -> '. $user->user->id);
            }

            return true;
        }

        return false;
    }
}
