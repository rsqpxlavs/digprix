@extends( 'layouts.backend.auth-reset-password' )

@section( 'seo' )

@component('components.backend.seo')
    {{ config('app.name') }} - Admin Login
@endcomponent

@stop


@section( 'contents' )

    <div class="col-sm-6 user-message">
        @if(request('password-channged') == 1)
            <span class="splash-message text-right">Password Changed Successfully!<br> Login again to continue</span>
        @else
            <span class="splash-message text-right">Hello!<br> is good to<br> see you again</span>
        @endif
        <span class="alternative-message text-right"><< take me back to {{ config('app.name') }} - <a href="{{ url('/') }}">click here</a></span>
    </div>

    <div class="col-sm-6 form-message">
        <img src="{{ asset( 'assets/backend/img/logo-2x.png' )}}" alt="logo" width="169" height="28" class="logo-img mb-4">

        <div id="Login-module"></div>

        <div class="out-links"><a href="{{ url('/') }}" target="_blank">© {{ date('Y') }} {{ config('app.name') }}</a></div>
    </div>

@stop

@push('scripts')

    @include('layouts.backend.transformer')
    <script type="text/javascript" src="{{ asset('assets/backend/js/custom/LoginMain.js') }}"></script>

@endpush
