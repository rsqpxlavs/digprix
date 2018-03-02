<?php

namespace App\Listeners;

use Illuminate\Auth\Events\Lockout;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Log;

class LogLockout
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
     * @param  Lockout  $event
     * @return void
     */
    public function handle(Lockout $event)
    {
        Log::info('Lockout detected: URL-> '. $event->request->fullUrl() .' IP-> '. $event->request->ip() .' username->'. $event->request->username .', email-> '. $event->request->email .' password-> '. $event->request->password);
        Log::emergency('Lockout detected: URL-> '. $event->request->fullUrl() .' IP-> '. $event->request->ip() .' username->'. $event->request->username .', email-> '. $event->request->email .' password-> '. $event->request->password);
    }
}
