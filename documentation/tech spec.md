# TECH SPECIFICATIONS #

Using **Multi-authentication** [ customer/user & admin ]

----------
- for  customers using `users` table
- for admin using `admins` table
- login via *username* / *email* / *mobile* for admins

## Auth Guards: ##
for anyone other than **Admin** using default ***web*** guard.
check auth status & auth instance with-



- `Auth::guard('admin')->check()` 
- `Auth::guard('web')->check()`
- `Auth::user()->column`
- `auth:admin` **middleware** to restrict admins for login
- `guest:admin` **middleware** to let access to non logged in admin
- `auth` **middleware** to restrict non logged in customers
- `guest` **middleware** to allow http requests only for non logged in customers



----------



## Custom Helpers: ##

file path: \app\Myhelper\\**CustomHelpers.php**

> use `curr_admin_photo()` to get the full image url of the currently logged in **Admin**


> use `on_route()` & `return_if()` helpers in combination to make menu active toggle



## Admin Profile Page: ##

**Jcrop** implemented for profile pic upload & crop <br>

the `assets\backend\img\profile\tmp` dir. is used to store the initial profile picture then with the help of **Jcrop** & **Intervention** the picture is cropped & stored in `assets\backend\img\profile` and removed from the `tmp` dir.

ReactJS for password update section random password generate & clipboard events

## Custom .babelrc: ##

using custom babel config, can be found on the root dir

## Use queue CMD: ##

    php artisan queue:work --queue=high,backend-high

## Broadcasting: ##

using *Laravel Echo* with *pusher* <br>

1. log me out of all devices for admins [ My Account page + password change auto trigger flush sessions ]
2. admin main layout is initializing the broadcasting with pusher
3. all the admin pages will look for logout from all sessions via echo [check **main.blade.php**]
4. `App\Http\CustomClasses\FlushAllSessions\SecureAccount` **interface** & `App\Http\CustomClasses\FlushAllSessions\FlushSessions` **class** created to execute logout from all devices/sessions
5. `Events\backend\account\LogoutFromAllDevices` event is used for broadcasting the logout from all sessions
6. on `FlushSessions` class instance use `secureAccount()` [*pusher broadcast, purge_session timestamp*] to flush all the sessions & use `logoutTheUser()` to logout the user as well [***triggers logout the currently logged in admin so use with caution*]
7. new middleware written **is.session.active** => `Backend\ForceLogoutAllDevices` which compares the current device login time with the timestamp ( managed by the `remember_token` field of *admins* table ) when logout from all sessions requested

## Device Login History Tracking: ##
`hisorange/browser-detect` is used to detect device data, ip etc.


## Blank Admin Page Template: ##
    blank.blade.php

## Folder & Files Structure ##

- All Eloquent Models are located inside `App\EloquentModels`
- Custom class & interfaces located in `App\Http\CustomClasses`
- Custom helper located in `App\MyHelper\CustomHelpers.php`

## Authorizations ##

1. `manage_admin_accounts` gate only allows admin & super admin to manage admin accounts
2. **do not change the role column data of `admin_roles` as the gate(s) were being authorized by checking the string name as - `if('admin')` etc.
3. `can:manage_admin_accounts` middleware is used to restrict access of manage & add new admin account 