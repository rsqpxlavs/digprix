<?php

namespace App\EloquentModels\Frontend;

use Illuminate\Database\Eloquent\Model;

class UserLoginHistory extends Model
{
    protected $table = 'user_login_history';

    protected $guarded = [];

    public function getCreatedAtAttribute($value)
    {
        return \Carbon\Carbon::parse($value)->toDayDateTimeString();
    }
}
