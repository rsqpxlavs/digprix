<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="robots" content="noindex, nofollow">
        <link rel="shortcut icon" href="{{ asset( 'assets/favicon.png' )}}">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        @yield('seo')
        <link rel="stylesheet" type="text/css" href="{{ asset( 'assets/backend/lib/stroke-7/style.css' )}}"/>
        <link rel="stylesheet" type="text/css" href="{{ asset( 'assets/backend/lib/perfect-scrollbar/css/perfect-scrollbar.min.css' )}}"/>
        <link href="{{ asset( 'assets/backend/lib/font-awesome/css/font-awesome.min.css' )}}" rel="stylesheet" />
        
        {{-- gritter notifications --}}
        <link rel="stylesheet" type="text/css" href="{{ asset( 'assets/backend/lib/jquery.gritter/css/jquery.gritter.css' )}}"/>

        <link rel="stylesheet" href="{{ asset( 'assets/backend/css/app.css' )}}" type="text/css"/>

        @stack('styles')
    </head>

    <body>
        @include('layouts.backend.top-nav')

        <div class="mai-wrapper">
          
            @include('layouts.backend.secondary-nav')

            @yield('contents')

        </div>

        <script src="{{ asset( 'assets/backend/lib/jquery/jquery.min.js' )}}" type="text/javascript"></script>
        <script src="{{ asset( 'assets/backend/lib/tether/js/tether.min.js' )}}" type="text/javascript"></script>
        <script src="{{ asset( 'assets/backend/lib/perfect-scrollbar/js/perfect-scrollbar.jquery.min.js' )}}" type="text/javascript"></script>
        <script src="{{ asset( 'assets/backend/lib/bootstrap/dist/js/bootstrap.min.js' )}}" type="text/javascript"></script>
        <script src="{{ asset( 'assets/backend/js/app.js' )}}" type="text/javascript"></script>
        {{-- gritter notifications --}}
        <script src="{{ asset( 'assets/backend/lib/jquery.gritter/js/jquery.gritter.js' )}}" type="text/javascript"></script>

        <script src="{{ asset( 'assets/backend/lib/jquery-flot/jquery.flot.js' )}}" type="text/javascript"></script>
        <script src="{{ asset( 'assets/backend/lib/jquery-flot/jquery.flot.pie.js' )}}" type="text/javascript"></script>
        <script src="{{ asset( 'assets/backend/lib/jquery-flot/jquery.flot.time.js' )}}" type="text/javascript"></script>
        <script src="{{ asset( 'assets/backend/lib/jquery-flot/jquery.flot.resize.js' )}}" type="text/javascript"></script>
        <script src="{{ asset( 'assets/backend/lib/jquery-flot/plugins/jquery.flot.orderBars.js' )}}" type="text/javascript"></script>
        <script src="{{ asset( 'assets/backend/lib/jquery-flot/plugins/curvedLines.js' )}}" type="text/javascript"></script>
        <script src="{{ asset( 'assets/backend/lib/countup/countUp.min.js' )}}" type="text/javascript"></script>
        <script src="{{ asset( 'assets/backend/js/app-dashboard.js' )}}" type="text/javascript"></script>

        @stack('scripts')

        <script type="text/javascript">
          $(document).ready(function(){
            //initialize the javascript
            App.init();
            App.dashboard();

            {{-- gritter notifications --}}
            @if(session()->has('flash_msg'))
            $.gritter.add({
                title: "{{ session('flash_title') }}",
                text: "{{ session('flash_msg') }}",
                class_name: "{{ session('flas_class') }}"
            });
            @endif

          });
        </script>
    </body>
</html>
