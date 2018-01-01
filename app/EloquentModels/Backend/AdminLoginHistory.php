<?php

namespace App\EloquentModels\Backend;

use Illuminate\Database\Eloquent\Model;

class AdminLoginHistory extends Model
{
    protected $table = 'admin_login_history';

    protected $guarded = [];

    public function getCreatedAtAttribute($value)
    {
        return \Carbon\Carbon::parse($value)->toDayDateTimeString();
    }
}
