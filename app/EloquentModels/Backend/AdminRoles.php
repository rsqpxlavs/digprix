<?php

namespace App\EloquentModels\Backend;

use Illuminate\Database\Eloquent\Model;

class AdminRoles extends Model
{
    protected $table = 'admin_roles';

    public $timestamps = false;

    protected $guarded = ['role'];
}
