@extends( 'layouts.backend.main' )

@section( 'seo' )

	@component('components.backend.seo')
			Create New Account | {{ config('app.name') }} - Admin
	@endcomponent

@stop

@push('styles') 

@endpush

@section( 'contents' )

<div class="main-content container">
    <div class="row">
          <div class="col-md-12">
            <div class="panel panel-default">
              <div class="panel-heading panel-heading-divider">New Account<span class="panel-subtitle">Create new account for back-end user</span></div>
              <div class="panel-body">

                <form>

                    <div class="form-group row">
                        <label class="col-3 col-form-label text-right">Choose a Role <span class="text-danger">*</span></label>
                        <div class="col-6">
                            <select class="form-control custom-select">
                                @foreach($roles as $role)
                                    <option value="{{ $role->id }}">{{ $role->display_name }}</option>
                                @endforeach
                            </select>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-3 col-form-label text-right">First Name <span class="text-danger">*</span></label>
                        <div class="col-6">
                            <input type="text" class="form-control">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-3 col-form-label text-right">Last Name</label>
                        <div class="col-6">
                            <input type="text" class="form-control">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-3 col-form-label text-right">Email ID <span class="text-danger">*</span></label>
                        <div class="col-6">
                            <input type="text" class="form-control">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-3 col-form-label text-right">Username</label>
                        <div class="input-group mb-2 col-6">
                            <span class="input-group-addon">@</span>
                            <input type="text" placeholder="Username" name="username" value="" class="form-control">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-3 col-form-label text-right">Mobile No.</label>
                        <div class="col-6">
                            <input type="text" class="form-control">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-3 col-form-label text-right">Password <span class="text-danger">*</span></label>
                        <div class="col-6" style="display:flex;">
                            <input type="text" id="password" placeholder="min. 8 character" class="form-control">
                            <button type="button" onclick="randomPassword(10);" class="btn btn-dark">
                                <span class="s7-lock"></span> Generate
                            </button>
                        </div>
                    </div>

                    <div class="form-group row">
                        <div class="col-6 offset-md-3">
                            <button type="submit" class="btn btn-space btn-primary">Create Account</button>
                            <a href="#" class="btn btn-space btn-secondary">Cancel</a>
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
    </script>

@endpush
