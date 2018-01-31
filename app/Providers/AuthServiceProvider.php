<?php

namespace App\Providers;

use Illuminate\Support\Facades\Gate;
use Auth;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        'App\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        //resolving the currently logged in user's instance for pusher authentication
        Auth::resolveUsersUsing(function ($guard = null) {
            if( is_null($guard) ){
                if( Auth::guard('admin')->check()) return Auth::guard('admin')->user();
                else if( Auth::guard('web')->check()) return Auth::guard('web')->user();
            }
            return Auth::guard($guard)->user();
        });

        //authorizations
        Gate::define('manage_admin_accounts', function ($user) {
            return $user->super_admin || $user->accesslevel->contains('role', 'admin');
        });
    }
}
