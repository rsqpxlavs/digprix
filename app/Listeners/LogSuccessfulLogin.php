<?php

namespace App\Listeners;

use Illuminate\Auth\Events\Login;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Log;

use Illuminate\Support\Facades\Request;
use App\EloquentModels\Backend\AdminLoginHistory;
use App\{Admin, User};
use hisorange\BrowserDetect\Facade as Browser;

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
            //get the user device data object
            $device = Browser::detect();

            //detect which type of user [admin/user] logged in
            switch (get_class($user->user)) 
            {
                case "App\Admin":
                    //Log::info('Admin loggedin Email: ->'. $user->user->email .', ID -> '. $user->user->id);

                    //store the login data
                    $admin = Admin::find($user->user->id);

                    $admin->loginhistory()->create([
                        'ip' => Request::ip(),
                        'isMobile' => $device->isMobile(),
                        'isTablet' => $device->isTablet(),
                        'isDesktop' => $device->isDesktop(),
                        'isBot' => $device->isBot(),
                        'isChrome' => $device->isChrome(),
                        'isFirefox' => $device->isFirefox(),
                        'isOpera' => $device->isOpera(),
                        'isSafari' => $device->isSafari(),
                        'isIE' => $device->isIE(),
                        'user_agent' => $device->userAgent(),
                        'browser' => $device->browserName(),
                        'platform' => $device->platformName(),
                        'device_model' => $device->deviceModel(),
                    ]);

                    break;
                case "App\User":
                    //Log::info('User loggedin Email: ->'. $user->user->email .', ID -> '. $user->user->id);

                    //store the login data
                    $user = User::find($user->user->id);

                    $user->loginhistory()->create([
                        'ip' => Request::ip(),
                        'isMobile' => $device->isMobile(),
                        'isTablet' => $device->isTablet(),
                        'isDesktop' => $device->isDesktop(),
                        'isBot' => $device->isBot(),
                        'isChrome' => $device->isChrome(),
                        'isFirefox' => $device->isFirefox(),
                        'isOpera' => $device->isOpera(),
                        'isSafari' => $device->isSafari(),
                        'isIE' => $device->isIE(),
                        'user_agent' => $device->userAgent(),
                        'browser' => $device->browserName(),
                        'platform' => $device->platformName(),
                        'device_model' => $device->deviceModel(),
                    ]);

                    break;
                default:
                    Log::info('New login with undetected user type- Email: ->'. $user->user->email .', ID -> '. $user->user->id);
            }

            return true;
        }

        return false;
    }
}
