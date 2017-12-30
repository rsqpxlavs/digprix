# AUTH #

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

**jcrop** implemented for profile pic upload & crop <br>

ReactJS for password update section random password generate & clipboard events

## Custom .babelrc: ##

using custom babel config, can be found on the root dir

## Use queue CMD: ##

    php artisan queue:work --queue=high,backend-high

## Broadcasting: ##

using *Laravel Echo* with *pusher* <br>

1. log me out of all devices for admins [ My Account page ]
2. admin main layout is initializing the broadcasting with pusher
3. all the admin pages will look for logout from all sessions via echo
[check **main.blade.php**]