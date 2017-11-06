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
            //User type user logged in
            Log::info('User logged in ->'. $user->user->email);
        }
        else if(isset($user->admin))
        {
            //Admin type user logged in
            Log::info('Admin logged in ->'. $user->admin->email);
        }

        return false;
    }
}
