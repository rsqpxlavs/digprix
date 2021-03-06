<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="robots" content="noindex, nofollow">
        <link rel="shortcut icon" href="{{ asset( 'assets/favicon.png' )}}">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="track-tags" content="{{ route('admin.track.presence.tag') }}">
        @yield('seo')
        <link rel="stylesheet" type="text/css" href="{{ asset( 'assets/backend/lib/stroke-7/style.css' )}}"/>
        <link rel="stylesheet" type="text/css" href="{{ asset( 'assets/backend/lib/perfect-scrollbar/css/perfect-scrollbar.min.css' )}}"/>
        <link href="{{ asset( 'assets/backend/lib/font-awesome/css/font-awesome.min.css' )}}" rel="stylesheet" />
        
        {{-- gritter notifications --}}
        <link rel="stylesheet" type="text/css" href="{{ asset( 'assets/backend/lib/jquery.gritter/css/jquery.gritter.css' )}}"/>

        <link rel="stylesheet" href="{{ asset( 'assets/backend/css/custom.css' )}}" type="text/css"/>

        @stack('styles')
        
        <link rel="stylesheet" href="{{ asset( 'assets/backend/css/app.css' )}}" type="text/css"/>

        {{-- Laravel Echo init --}}
        <script type="text/javascript" src="{{ asset('assets/backend/js/custom/init-broadcasting.js') }}"></script>
        

        {{-- Echo event listen --}}
        <script type="text/javascript" src="{{ asset('assets/backend/js/custom/notify-loggedin.js') }}"></script>
        <script type="text/javascript">
            (function () {
                document.onreadystatechange = () => {
                    if (document.readyState === 'complete') {

                        {{-- backend user presence --}}
                        Echo.join('all-admins')
                            .here((users) => {
                                // console.log(users);
                            })
                            .joining((user) => {
                                @if(Auth::guard('admin')->user()->super_admin)
                                    let canNotify = atmptNotification();
                                    if (canNotify){
                                        let username = (user.username) ? `(@ ${user.username})` : '';
                                        showNotification(`${user.fullname} logged in`, `${user.fname} ${username} is now online`, `${user.photo}`, user.tag);
                                    }
                                @elseif(Auth::guard('admin')->user()->accesslevel->contains('role', 'admin'))
                                    let canNotify = atmptNotification();
                                    if (canNotify && user.is_super_admin == 0){
                                        let username = (user.username) ? `(@ ${user.username})` : '';
                                        showNotification(`${user.fullname} logged in`, `${user.fname} ${username} is now online`, `${user.photo}`, user.tag);
                                    }
                                @else
                                    let canNotify = atmptNotification();
                                    if (canNotify && user.is_super_admin == 0 && user.is_admin == 0){
                                        let username = (user.username) ? `(@ ${user.username})` : '';
                                        showNotification(`${user.fullname} logged in`, `${user.fname} ${username} is now online`, `${user.photo}`, user.tag);
                                    }
                                @endif
                            })
                            .leaving((user) => {
                                // console.log(`${user.name} left`);
                            });

                        {{-- check for user logout from all device broadcast --}}
                        Echo.private('logout-from-all.{{Auth::guard('admin')->user()->id}}').listen('.secure.account', function (e) {
                            // console.log(e);
                            $("#session-not-available-modal").modal('show');
                        });
                    }
                };
            })();
        </script>

    </head>

    <body>
        @include('layouts.backend.top-nav')

        <div class="mai-wrapper">
          
            @include('layouts.backend.secondary-nav')

            @yield('contents')

        </div>

        {{-- session out modal --}}
        @include('layouts.backend.logged-out-modal')

        <script src="{{ asset( 'assets/backend/lib/jquery/jquery.min.js' )}}" type="text/javascript"></script>
        <script src="{{ asset( 'assets/backend/lib/tether/js/tether.min.js' )}}" type="text/javascript"></script>
        <script src="{{ asset( 'assets/backend/lib/perfect-scrollbar/js/perfect-scrollbar.jquery.min.js' )}}" type="text/javascript"></script>
        <script src="{{ asset( 'assets/backend/lib/bootstrap/dist/js/bootstrap.min.js' )}}" type="text/javascript"></script>
        <script src="{{ asset( 'assets/backend/js/app.js' )}}" type="text/javascript"></script>
        {{-- gritter notifications --}}
        <script src="{{ asset( 'assets/backend/lib/jquery.gritter/js/jquery.gritter.js' )}}" type="text/javascript"></script>

        @stack('scripts')

        <script type="text/javascript">
          $(document).ready(function(){

            App.init();

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
