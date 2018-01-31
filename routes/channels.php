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
    if(get_class($user) === 'App\Admin' && ((int) $user->id === (int) $id)) {
        return true;
    }
    return false;
});

Broadcast::channel('all-admins', function ($user) {
    if (get_class($user) === 'App\Admin') {
        //get the user's photo
        $file = $user->photo ?? 'blank.png';
        $photo = asset('assets/backend/img/profile/' . $file);

        return [
            'id'    => $user->id,
            'tag'   => $user->loginhistory()->latest()->first()->id,
            'username' => $user->username, 
            'fname' => $user->fname, 
            'fullname' => $user->fname . ' ' . $user->lname,
            'photo' => $photo,
            'is_super_admin' => ($user->super_admin)? 1 : 0,
            'is_admin' => ($user->accesslevel->contains('role', 'admin'))? 1 : 0
        ];
    }

    return false;
});

/*Broadcast::channel('order.{orderId}', function ($user, $orderId) {
    return $user->id === Order::findOrNew($orderId)->user_id;
});*/
