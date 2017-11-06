<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="robots" content="noindex, nofollow">
        <link rel="shortcut icon" href="{{ asset( 'assets/backend/img/favicon.png' )}}">
        <title>{{ env('APP_NAME') }} - Admin Login</title>
        <link rel="stylesheet" type="text/css" href="{{ asset( 'assets/backend/lib/stroke-7/style.css' )}}"/>
        <link rel="stylesheet" type="text/css" href="{{ asset( 'assets/backend/lib/perfect-scrollbar/css/perfect-scrollbar.min.css' )}}"/>
        <link rel="stylesheet" href="{{ asset( 'assets/backend/css/app.css' )}}" type="text/css"/>
    </head>
    <body class="mai-splash-screen">
        <div class="mai-wrapper mai-login">
          <div class="main-content container">
            <div class="splash-container row">
              <div class="col-sm-6 user-message"><span class="splash-message text-right">Hello!<br> is good to<br> see you again</span><span class="alternative-message text-right"><< take me back to {{ env('APP_NAME') }} - <a href="{{ url('/') }}">click here</a></span></div>
              <div class="col-sm-6 form-message"><img src="{{ asset( 'assets/backend/img/logo-2x.png' )}}" alt="logo" width="169" height="28" class="logo-img mb-4"><span class="splash-description text-center mt-5 mb-5">Login to your account</span>
                
                <div id="Login-module"></div>

                <div class="out-links"><a href="{{ url('/') }}" target="_blank">© {{ date('Y') }} {{ env('APP_NAME') }}</a></div>
              </div>
            </div>
          </div>
        </div>

        @include('layouts.backend.transformer')
        <script type="text/javascript" src="{{ asset('assets/backend/js/custom/LoginMain.js') }}"></script>

        <script src="{{ asset( 'assets/backend/lib/jquery/jquery.min.js' )}}" type="text/javascript"></script>
        <script src="{{ asset( 'assets/backend/lib/tether/js/tether.min.js' )}}" type="text/javascript"></script>
        <script src="{{ asset( 'assets/backend/lib/perfect-scrollbar/js/perfect-scrollbar.jquery.min.js' )}}" type="text/javascript"></script>
        <script src="{{ asset( 'assets/backend/lib/bootstrap/dist/js/bootstrap.min.js' )}}" type="text/javascript"></script>
        <script src="{{ asset( 'assets/backend/js/app.js' )}}" type="text/javascript"></script>
        <script type="text/javascript">
          $(document).ready(function(){
            //initialize the javascript
            App.init();
          });
          
        </script>
    </body>
</html>
