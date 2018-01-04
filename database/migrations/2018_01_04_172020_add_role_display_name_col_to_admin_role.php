<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddRoleDisplayNameColToAdminRole extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('admin_roles', function (Blueprint $table) {
            $table->string('display_name')->after('role')->default('NA');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('admin_roles', function (Blueprint $table) {
            $table->dropColumn('display_name');
        });
    }
}
