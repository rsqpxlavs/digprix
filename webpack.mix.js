let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/assets/backend/js/react/login/LoginMain.js', 'public/assets/backend/js/custom')
    .js('resources/assets/backend/js/react/profile/upload-pic.js', 'public/assets/backend/js/custom')
    .js('resources/assets/backend/js/broadcast/init-broadcasting.js', 'public/assets/backend/js/custom')
    .react('resources/assets/backend/js/react/profile/password-main.js', 'public/assets/backend/js/custom').sourceMaps()
    .js('resources/assets/backend/js/broadcast/account/secure-account.js', 'public/assets/backend/js/custom');
