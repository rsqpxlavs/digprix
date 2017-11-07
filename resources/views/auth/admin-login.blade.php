@extends( 'layouts.backend.auth-reset-password' )

@component('components.backend.seo')
    {{ env('APP_NAME') }} - Admin Login
@endcomponent


@section( 'contents' )

    <div class="col-sm-6 user-message">
        <span class="splash-message text-right">Hello!<br> is good to<br> see you again</span>
        <span class="alternative-message text-right"><< take me back to {{ env('APP_NAME') }} - <a href="{{ url('/') }}">click here</a></span>
    </div>

    <div class="col-sm-6 form-message">
        <img src="{{ asset( 'assets/backend/img/logo-2x.png' )}}" alt="logo" width="169" height="28" class="logo-img mb-4">

        <div id="Login-module"></div>

        <div class="out-links"><a href="{{ url('/') }}" target="_blank">© {{ date('Y') }} {{ env('APP_NAME') }}</a></div>
    </div>

@stop

@push('scripts')

    @include('layouts.backend.transformer')
    <script type="text/javascript" src="{{ asset('assets/backend/js/custom/LoginMain.js') }}"></script>

@endpush
