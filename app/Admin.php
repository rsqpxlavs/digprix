<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use App\Notifications\AdminResetPasswordNotification;

class Admin extends Authenticatable
{
    use Notifiable;

    protected $guard = 'admin';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $guarded = [
        'password', 'remember_token', 'super_admin',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function sendPasswordResetNotification($token)
    {
        $this->notify(new AdminResetPasswordNotification($token));
    }

    public function scopeisActive($query)
    {
        return $query->where('active', 1);
    }

    protected $casts = [
        'super_admin' => 'boolean',
    ];

    public function getCreatedAtAttribute($value)
    {
        return \Carbon\Carbon::parse($value);
    }

    /**
     * admin has many login history records
     */
    public function loginhistory()
    {
        return $this->hasMany('App\EloquentModels\Backend\AdminLoginHistory', 'admin_id');
    }

    /**
     * has one role
     */
    public function accesslevel()
    {
        return $this->belongsToMany('App\EloquentModels\Backend\AdminRoles', 'map_admin_roles', 'admin_id', 'role_id');
    }
}
