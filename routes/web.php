<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::view('/', 'frontend.welcome');
Route::get('/home', 'HomeController@index');

/*
|--------------------------------------------------------------------------
| User auth routes
|--------------------------------------------------------------------------
*/
Route::group(['namespace' => 'Auth'], function () {

    Route::get('/login', 'LoginController@showLoginForm')->name('login');
    Route::post('/login', 'LoginController@login');
    Route::post('/users/logout', 'LoginController@userLogout')->name('user.logout');
    Route::post('password/email', 'ForgotPasswordController@sendResetLinkEmail')->name('password.email');
    Route::get('password/reset', 'ForgotPasswordController@showLinkRequestForm')->name('password.request');
    Route::post('password/reset', 'ResetPasswordController@reset');
    Route::get('password/reset/{token}', 'ResetPasswordController@showResetForm')->name('password.reset');

});

/*
|--------------------------------------------------------------------------
| Admin routes
|--------------------------------------------------------------------------
*/

Route::prefix('admin')->group(function() {

    /*-----------------------------------------------------------------------------------------------------------------------------
    | Admin auth routes
    |------------------------------------------------------------------------------------------------------------------------------
    */

    Route::group(['namespace' => 'Auth'], function () {
        
        Route::get('/login', 'AdminLoginController@showLoginForm')->name('admin.login');
        Route::post('/login', 'AdminLoginController@login')->name('admin.login.submit');
        Route::post('/logout', 'AdminLoginController@logout')->name('admin.logout');

        // admin Password reset routes
        Route::post('/password/email', 'AdminForgotPasswordController@sendResetLinkEmail')->name('admin.password.email');
        Route::get('/password/reset', 'AdminForgotPasswordController@showLinkRequestForm')->name('admin.password.request');
        Route::post('/password/reset', 'AdminResetPasswordController@reset');
        Route::get('/password/reset/{token}', 'AdminResetPasswordController@showResetForm')->name('admin.password.reset');

    });

    /*-----------------------------------------------------------------------------------------------------------------------------
    | Admin has to be logged in
    |------------------------------------------------------------------------------------------------------------------------------
    */

    // Controllers Within The "App\Http\Controllers\Backend" Namespace
    Route::group(['namespace' => 'Backend', 'middleware' => ['auth:admin', 'is.session.active']], function () {
        
        Route::get('/', 'AdminController@index')->name('admin.dashboard');

        Route::get('/profile', 'ProfileCtrl@Visit')->name('admin.profile');
        Route::post('/profile/upload/tmp-profile', 'ProfileCtrl@UploadInitialAjaxTmpPicture')->name('admin.upload.tmp-profile-pic');
        Route::post('/profile/remove/tmp-profile', 'ProfileCtrl@RemoveInitialAjaxTmpPicture')->name('admin.remove.tmp-profile-pic');
        Route::post('/profile/upload/cropped', 'ProfileCtrl@UploadAfterCropping')->name('admin.upload.cropped-profile-pic');
        Route::post('/profile/update/password', 'ProfileCtrl@UpdatePassword')->name('admin.update.password'); //logout the user from all active devices & sessions
        Route::post('/profile/update/personal-details', 'ProfileCtrl@UpdateProfile')->name('admin.update.profile');

        Route::get('/account', 'AccountPage@Visit')->name('admin.account');
        Route::post('/account/secure', 'AccountPage@SecureAccount')->name('admin.secure.account');

        Route::post('/presence/track-the-tag', 'misc\TrackPushNotificationTag')->name('admin.track.presence.tag');

        //manage admin accouts
        Route::group(['middleware' => ['can:manage_admin_accounts']], function () {

            Route::get('/create-account', 'ManageAccounts@CreateForm')->name('admin.create-account-form');
            Route::post('/create-account/new', 'ManageAccounts@CreateNew')->name('admin.create-new-account');
            Route::get('/manage-admin-accounts', 'ManageAccounts@ManageAccounts')->name('admin.manage-accounts');
            Route::post('/manage-admin-accounts/toggle-active', 'ManageAccounts@ToggleActive')->name('admin.account.toggle');
            
        });

    });

    //admin fallback route [404]
    Route::fallback('Backend\AdminController@NotFound');
    
});
