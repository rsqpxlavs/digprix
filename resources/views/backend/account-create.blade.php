@extends( 'layouts.backend.main' )

@section( 'seo' )

	@component('components.backend.seo')
			Create New Account | {{ config('app.name') }} - Admin
	@endcomponent

@stop

@push('styles') 
<link rel="stylesheet" type="text/css" href="{{ asset('assets/backend//lib/select2/css/select2.min.css') }}"/>
@endpush

@section( 'contents' )

<div class="main-content container">
    <div class="row">
          <div class="col-md-12">
            <div class="panel panel-default">
              <div class="panel-heading panel-heading-divider">New Account<span class="panel-subtitle">Create new account for back-end user</span></div>
              <div class="panel-body">

                {{-- validation errors/ success alert box --}}
                @if($errors->any())
                    <div class="row">
                        <div class="col-md-8 offset-md-2 text-center">
                            @component('components.backend.validation-err')
                                @slot('alert_look')
                                    dark
                                @endslot

                            @endcomponent
                        </div>
                    </div>
                @elseif(session('account-added'))
                    <div class="row">
                        <div class="col-md-8 offset-md-2 text-center">
                            @component('components.backend.alert-success')
                                @slot('alert_look')
                                    cream
                                @endslot

                                <strong>Successfully done !</strong> new account created, <a href="{{ route('admin.manage-accounts') }}">click to check</a> list of accounts!
                            @endcomponent
                        </div>
                    </div>
                @endif

                <form action="{{ route('admin.create-new-account') }}" method="post">
                    {{ csrf_field() }}

                    <div class="form-group row {{ $errors->has('role')? 'has-danger' : '' }}">
                        <label class="col-3 col-form-label text-right">Choose Role(s) <span class="text-danger">*</span></label>
                        <div class="col-6">
                            <select multiple="" class="select2" name="role[]">
                                @foreach($roles as $role)
                                    <option value="{{ $role->id }}">{{ $role->display_name }}</option>
                                @endforeach
                            </select>

                            @if($errors->has('role'))
                            <small class="form-control-feedback text-danger">
                                {{ $errors->first('role') }}
                            </small>
                            @endif
                        </div>
                    </div>

                    <div class="form-group row {{ $errors->has('first_name')? 'has-danger' : '' }}">
                        <label class="col-3 col-form-label text-right">First Name <span class="text-danger">*</span></label>
                        <div class="col-6">
                            <input type="text" name="first_name" value="{{ (session('account-added'))? '' : old('first_name') }}" class="form-control" />

                            @if($errors->has('first_name'))
                            <small class="form-control-feedback text-danger">
                                {{ $errors->first('first_name') }}
                            </small>
                            @endif
                        </div>
                    </div>

                    <div class="form-group row {{ $errors->has('last_name')? 'has-danger' : '' }}">
                        <label class="col-3 col-form-label text-right">Last Name</label>
                        <div class="col-6">
                            <input type="text" name="last_name" value="{{ (session('account-added'))? '' : old('last_name') }}" class="form-control">
                        
                            @if($errors->has('last_name'))
                            <small class="form-control-feedback text-danger">
                                {{ $errors->first('last_name') }}
                            </small>
                            @endif
                        </div>
                    </div>

                    <div class="form-group row {{ $errors->has('email')? 'has-danger' : '' }}">
                        <label class="col-3 col-form-label text-right">Email ID <span class="text-danger">*</span></label>
                        <div class="col-6">
                            <input type="text" name="email" value="{{ (session('account-added'))? '' : old('email') }}" class="form-control">
                        
                            @if($errors->has('email'))
                            <small class="form-control-feedback text-danger">
                                {{ $errors->first('email') }}
                            </small>
                            @endif
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-3 col-form-label text-right">Username</label>
                        <div class="input-group mb-2 col-6 {{ $errors->has('username')? 'has-danger has-feedback' : '' }}">
                            <span class="input-group-addon">@</span>
                            <input type="text" placeholder="Username" name="username" value="{{ (session('account-added'))? '' : old('username') }}" class="form-control {{ $errors->has('username')? 'form-control-danger' : '' }}">
                        </div>

                        @if($errors->has('username'))
                        <small class="form-control-feedback text-danger">
                            {{ $errors->first('username') }}
                        </small>
                        @endif
                    </div>
                    

                    <div class="form-group row {{ $errors->has('mobile')? 'has-danger' : '' }}">
                        <label class="col-3 col-form-label text-right">Mobile No.</label>
                        <div class="col-6">
                            <input type="text" name="mobile" value="{{ (session('account-added'))? '' : old('mobile') }}" class="form-control">
                        
                             @if($errors->has('mobile'))
                            <small class="form-control-feedback text-danger">
                                {{ $errors->first('mobile') }}
                            </small>
                            @endif
                        </div>
                    </div>

                    <div class="form-group row {{ $errors->has('password')? 'has-danger' : '' }}">
                        <label class="col-3 col-form-label text-right">Password <span class="text-danger">*</span></label>
                        <div class="col-6" style="display:flex;">
                            <input type="text" id="password" name="password" placeholder="min. 8 character" class="form-control">
                            <button type="button" onclick="randomPassword(10);" class="btn btn-dark">
                                <span class="s7-lock"></span> Generate
                            </button>
                        </div>
                        @if($errors->has('password'))
                        <small class="form-control-feedback text-danger">
                            {{ $errors->first('password') }}
                        </small>
                        @endif
                    </div>

                    <div class="form-group row">
                        <div class="col-6 offset-md-3">
                            <button type="submit" class="btn btn-space btn-primary">Create Account</button>
                            <a href="{{ route('admin.manage-accounts') }}" class="btn btn-space btn-secondary">Cancel</a>
                        </div>
                    </div>

                </form>
              </div>
            </div>
          </div>
        </div>
</div>

@stop

@push('scripts')

    @include('layouts.backend.transformer')

    <script src="{{ asset('assets/backend/lib/select2/js/select2.min.js') }}" type="text/javascript"></script>
    <script src="{{ asset('assets/backend/lib/select2/js/select2.full.min.js') }}" type="text/javascript"></script>

    <script type="text/javascript">
        function randomPassword(length=10) {
            var chars = "abcdefghijklmnopqrstuvwxyz~.`!@#$%^&*()-+<>|\/\\=?;:'\"ABCDEFGHIJKLMNOP1234567890";
            var passwd = "";
            for (var x = 0; x < length; x++) {
                var i = Math.floor(Math.random() * chars.length);
                passwd += chars.charAt(i);
            }

            document.getElementById('password').value = passwd;
        }

        (function() {
            $(".select2").select2({
                width: '100%',
            });
        })();
    </script>

@endpush
