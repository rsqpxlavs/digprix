<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="robots" content="noindex, nofollow">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link rel="shortcut icon" href="{{ asset( 'assets/favicon.png' )}}">
        <title>@yield('page_title')</title>
        <link rel="stylesheet" type="text/css" href="{{ asset( 'assets/backend/lib/stroke-7/style.css' )}}"/>
        <link rel="stylesheet" type="text/css" href="{{ asset( 'assets/backend/lib/perfect-scrollbar/css/perfect-scrollbar.min.css' )}}"/>
        <link href="{{ asset( 'assets/backend/lib/font-awesome/css/font-awesome.min.css' )}}" rel="stylesheet" />
        <link href="{{ asset( 'assets/backend/lib/font-awesome/animation/font-awesome-animation.min.css' )}}" rel="stylesheet" />
        <link rel="stylesheet" href="{{ asset( 'assets/backend/css/app.css' )}}" type="text/css"/>
        <link rel="stylesheet" type="text/css" href="{{ asset( 'assets/backend/css/error-tooltip.css' ) }}">
    </head>
    <body class="mai-splash-screen">
        <div class="mai-wrapper mai-login">
            <div class="main-content container">
                <div class="splash-container row">

                    @yield( 'contents' )
                    
                </div>
            </div>
        </div>

        @stack( 'scripts' )
        
    </body>
</html>
