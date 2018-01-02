@extends( 'layouts.backend.auth-reset-password' )

@section( 'seo' )

@component('components.backend.seo')
    {{ config('app.name') }} - Admin Forgot Password
@endcomponent

@stop


@section( 'contents' )

    <div class="col-sm-6 user-message">
        <span class="splash-message text-right">Oops!<br> this will take<br> just a moment.</span>
        <span class="alternative-message text-right">
            Remember login credentials? <a href="{{ route('admin.login') }}">Login</a>
        </span>
    </div>

    <div class="col-sm-6 form-message">
        <img src="{{ asset( 'assets/backend/img/logo-2x.png' )}}" alt="logo" width="169" height="28" class="logo-img mb-4">
     
        <span class="splash-description text-center mt-5 mb-5">Don't worry, we'll send you an email to reset your password.</span>

        @if (session('status'))
            <div class="alert alert-success">
                {{ session('status') }}
            </div>
        @elseif($errors->has('email'))
            <div class="alert alert-danger">
                {{ $errors->first('email') }}
            </div>
        @endif

        <form class="form-forgot-password" method="POST" action="{{ route('admin.password.email') }}">
            {{ csrf_field() }}

            <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                <div class="input-group">
                    <span class="input-group-addon"><i class="icon s7-mail"></i></span>
                    <input type="email" name="email" value="{{ old('email') }}" placeholder="Your Email" autoComplete="off" autoFocus class="form-control" />
                </div>
            </div>
            
            <p class="contact mt-4">Don't remember your email? <a href="#">Contact support</a>.</p>

            <div class="form-group login-submit">
                <button data-dismiss="modal" type="submit" class="btn btn-lg btn-primary btn-block">Reset Password</button>
            </div>
        </form>

        <div class="out-links"><a href="{{ url('/') }}" target="_blank">© {{ date('Y') }} {{ config('app.name') }}</a></div>
    </div>

@stop
