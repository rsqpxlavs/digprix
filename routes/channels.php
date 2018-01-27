<?php

/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/

Broadcast::channel('logout-from-all.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});

Broadcast::channel('all-admins', function ($user) {

    //get the user's photo
    $file = $user->photo ?? 'blank.png';
    $photo = asset('assets/backend/img/profile/' . $file);

    return [
        'id'    => $user->id,
        'username' => $user->username, 
        'fname' => $user->fname, 
        'fullname' => $user->fname . ' ' . $user->lname,
        'photo' => $photo,
        'is_super_admin' => ($user->super_admin)? 1 : 0,
        'is_admin' => ($user->accesslevel->contains('role', 'admin'))? 1 : 0
    ];
});

/*Broadcast::channel('order.{orderId}', function ($user, $orderId) {
    return $user->id === Order::findOrNew($orderId)->user_id;
});*/
