@extends( 'layouts.backend.auth-reset-password' )

@component('components.backend.seo')
    {{ env('APP_NAME') }} - Admin Reset Password
@endcomponent


@section( 'contents' )

    <div class="col-sm-6 form-message">
        <img src="{{ asset( 'assets/backend/img/logo-2x.png' )}}" alt="logo" width="169" height="28" class="logo-img mb-4">
        <span class="splash-description text-center mt-4 mb-4">Reset Password</span>

        @if (session('status'))
            <div class="alert alert-success">
                {{ session('status') }}
            </div>
        @elseif($errors->has('email'))
            <div class="alert alert-danger">
                {{ $errors->first('email') }}
            </div>
        @endif

        <form class="sign-up-form" method="POST" action="{{ route('admin.password.request') }}">
            {{ csrf_field() }}

            <input type="hidden" name="token" value="{{ $token }}">

            <div class="form-group">
                <div class="input-group"><span class="input-group-addon"><i class="icon s7-mail"></i></span>
                    <input type="email" name="email" value="{{ $email or old('email') }}" placeholder="E-Mail Address" class="form-control">
                </div>
            </div>

            <div class="form-group inline row">
                <div class="col-6">
                    <div class="input-group"><span class="input-group-addon"><i class="icon s7-lock"></i></span>
                        <input id="pass1" type="password" name="password" placeholder="Password" class="form-control">

                        @if ($errors->has('password'))
                            <div class="errtip right"><span class="arrow"></span><span class="text">{{ $errors->first('password') }}</span></div>
                        @endif
                    </div>
                </div>
                <div class="col-6">
                    <div class="input-group"><span class="input-group-addon"><i class="icon s7-lock"></i></span>
                        <input type="password" placeholder="Confirm" name="password_confirmation" class="form-control">

                        @if ($errors->has('password_confirmation'))
                            <div class="errtip right"><span class="arrow"></span><span class="text">{{ $errors->first('password_confirmation') }}</span></div>
                        @endif
                    </div>
                </div>
            </div>
            <div class="form-group sign-up-submit">
                <button data-dismiss="modal" type="submit" class="btn btn-lg btn-primary btn-block">Reset Password</button>
            </div>
        </form>

        <div class="out-links"><a href="{{ url('/') }}" target="_blank">© {{ date('Y') }} {{ env('APP_NAME') }}</a></div>
    </div>

    <div class="col-sm-6 user-message"><span class="splash-message text-left">Choose a Strong Password<br> Regatds {{ env('APP_NAME') }}</span>
        <span class="alternative-message text-right">Login to your account <a href="{{ route('admin.login') }}">click here</a></span>
    </div>

@stop
