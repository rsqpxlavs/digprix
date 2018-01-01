<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserLoginHistory extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_login_history', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id');
            $table->ipAddress('ip');
            $table->boolean('isMobile');
            $table->boolean('isTablet');
            $table->boolean('isDesktop');
            $table->boolean('isBot');
            $table->boolean('isChrome');
            $table->boolean('isFirefox');
            $table->boolean('isOpera');
            $table->boolean('isSafari');
            $table->boolean('isIE');
            $table->text('user_agent')->nullable();
            $table->string('browser')->nullable();
            $table->string('platform')->nullable();
            $table->string('device_model')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_login_history');
    }
}
