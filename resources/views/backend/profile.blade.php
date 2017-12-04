@extends( 'layouts.backend.main' )

@section( 'seo' )

	@component('components.backend.seo')
			Manage Profile | {{ env('APP_NAME') }} - Admin
	@endcomponent

@stop

@push('styles') 

	{{-- jcrop --}}
	<link rel="stylesheet" href="{{ asset( 'assets/backend/plugins/jcrop-2.0.4/Jcrop.css' ) }}">

@endpush

@section( 'contents' )

	<div class="main-content container">
		<div class="user-profile">
			<div class="row">
				<div class="col-md-12">
					<div class="user-display">
						<div class="user-display-cover"><img src="{{ asset('assets/backend/img/profile-cover/cover.jpg') }}" alt="cover"></div>
						<div class="user-display-bottom">
							<div class="user-display-id"><img src="{{ curr_admin_photo() }}" alt="avatar" class="user-display-avatar">
								<div class="user-display-name">{{ Auth()->user()->fname .' '. Auth()->user()->lname }}</div>
							</div>
							<div class="user-display-stats">
								<div class="user-display-stat">
									<span class="user-display-stat-counter">26</span>
									<span class="user-display-stat-title">Products</span>
								</div>
								<div class="user-display-stat">
									<span class="user-display-stat-counter">165</span>
									<span class="user-display-stat-title">Review Checked</span>
								</div>
								<div class="user-display-stat">
									<span class="user-display-stat-counter">43</span>
									<span class="user-display-stat-title">Followers</span>
								</div>
								<div class="user-display-stat">
									<span class="user-display-stat-counter">157</span>
									<span class="user-display-stat-title">Following</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-7">
					<div class="widget widget-fullwidth user-develop-chart">
						<div class="widget-head">
							<span class="title">Change Profile Picture</span>
						</div>

						<div class="panel panel-default">

							<div id="interface" style="margin-left:20%;">
								
							</div>

							<div class="panel-body">

								<form action="{{ route('admin.upload.cropped-profile-pic') }}" method="POST">

									{{ csrf_field() }}

									<button id="tmp-upload-success" style="display:none;" type="button">crop pohto</button>
									<div class="form-group row">
										<label class="col-3 col-form-label text-right">Select your profile pic.</label>
										<div class="col-6">
											<input type="file" id="upload-field" class="inputfile">
											<label for="upload-field" class="btn btn-secondary">
												<i class="icon s7-upload"></i>
												<span>Browse files...</span>
											</label>

											<small class="text-info"> min 200 x 200 px & size < 3 MB</small>
										</div>
									</div>

									<input type="hidden" id="crop-x" name="crop-x" value="" />
									<input type="hidden" id="crop-y" name="crop-y" value="" />
									<input type="hidden" id="crop-w" name="width" value="" />
									<input type="hidden" id="crop-h" name="height" value="" />

									<div class="row pt-5" id="pic-save-section" style="display:none;">
										<div class="col-6">
											<p class="text-right">
												<button type="submit" class="btn btn-space btn-primary">Update Photo</button>
												<button onclick="remImage();" class="btn btn-space btn-secondary" type="button">clear</button>
											</p>
										</div>
										<div class="clearfix"></div>
									</div>

								</form>


								<div id="op-progress" class="progress mb-4" style="display:none;">
									<div id="progress-output" role="progressbar" style="width: 0%" aria-valuenow="00" aria-valuemin="0" aria-valuemax="100" class="progress-bar bg-success progress-bar-striped progress-bar-animated">00%</div>
								</div>

							</div>
						</div>
					</div>
					
					<div class="panel panel-default">
						<div class="panel-heading panel-heading-divider">Personal Details<span class="panel-subtitle">set username & mobile no., you may login via them too</span></div>
						<div class="panel-body">
							@if(session('profile-updated'))
								<div role="alert" class="alert alert-cream alert-success alert-dismissible">
									<button type="button" data-dismiss="alert" aria-label="Close" class="close"><span aria-hidden="true" class="s7-close"></span></button><span class="icon s7-check"></span><strong>Updated !</strong> profile data updated successfully, looks all good
								</div>
							@elseif($errors->profile->any())
								<div role="alert" class="alert alert-cream alert-warning alert-dismissible">
									<button type="button" data-dismiss="alert" aria-label="Close" class="close"><span aria-hidden="true" class="s7-close"></span></button><span class="icon s7-attention"></span><strong>Validation Error!</strong> check your input and try again
								</div>
							@endif

							<form action="{{ route('admin.update.profile') }}" method="post">
								{{ csrf_field() }}
								
								<div class="form-group mt-1 {{ $errors->profile->has('first_name')? 'has-danger' : '' }}">
									<label>First Name *</label>
									<input type="text" placeholder="Enter first name" name="first_name" value="{{ Auth()->user()->fname }}" class="form-control">
									
									@if($errors->profile->has('first_name'))
									<small class="form-control-feedback text-danger">
										{{ $errors->profile->first('first_name') }}
									</small>
									@endif
								</div>

								<div class="form-group mt-1 {{ $errors->profile->has('last_name')? 'has-danger' : '' }}">
									<label>Last Name</label>
									<input type="text" placeholder="Enter last name" name="last_name" value="{{ Auth()->user()->lname }}" class="form-control">

									@if($errors->profile->has('last_name'))
									<small class="form-control-feedback text-danger">
										{{ $errors->profile->first('last_name') }}
									</small>
									@endif
								</div>

								<div class="form-group mt-1 {{ $errors->profile->has('email')? 'has-danger' : '' }}">
									<label>Email ID *</label>
									<input type="email" placeholder="Enter email" name="email" value="{{ Auth()->user()->email }}" class="form-control">

									@if($errors->profile->has('email'))
									<small class="form-control-feedback text-danger">
										{{ $errors->profile->first('email') }}
									</small>
									@endif
								</div>

								<div class="input-group mb-2 {{ $errors->profile->has('username')? 'has-danger has-feedback' : '' }}">
									<span class="input-group-addon">@</span>
									<input type="text" placeholder="Username" name="username" value="{{ Auth()->user()->username }}" class="form-control {{ $errors->profile->has('username')? 'form-control-danger' : '' }}">
								</div>
								@if($errors->profile->has('username'))
								<small class="form-control-feedback text-danger">
									{{ $errors->profile->first('username') }}
								</small>
								@endif

								<div class="form-group mt-1 {{ $errors->profile->has('mobile')? 'has-danger' : '' }}">
									<label>Mobile</label>
									<input type="text" placeholder="Enter mobile no." name="mobile" value="{{ Auth()->user()->mobile }}" class="form-control">
								
									@if($errors->profile->has('mobile'))
									<small class="form-control-feedback text-danger">
										{{ $errors->profile->first('mobile') }}
									</small>
									@endif
								</div>

								<div class="row pt-5">
									<div class="col-6">
										<p class="text-left">
											<button type="submit" class="btn btn-space btn-primary">Update Profile</button>
											<a href="{{ route('admin.dashboard') }}" class="btn btn-space btn-secondary">Cancel</a>
										</p>
									</div>
									<div class="clearfix"></div>
								</div>
							</form>
						</div>
					</div>

				</div>

				<div class="col-md-5">
					<div class="panel panel-default">
						<div class="panel-heading panel-heading-divider">Change Password
							<span class="panel-subtitle text-info">*make sure to enter at least 8 character</span>
						</div>
						<div class="panel-body">

							{{-- password update/incorrect alert --}}
							@if(session('password-updated'))
								<div role="alert" class="alert alert-dark alert-success alert-dismissible">
									<button type="button" data-dismiss="alert" aria-label="Close" class="close"><span aria-hidden="true" class="s7-close"></span></button><span class="icon s7-check"></span><strong>Great Job!</strong> account password updated successfully
								</div>
							@elseif(session('incorrect-currpasswd'))
								<div role="alert" class="alert alert-contrast alert-danger alert-dismissible">
									<div class="icon"><span class="s7-close"></span></div>
									<div class="message">
										<button type="button" data-dismiss="alert" aria-label="Close" class="close"><span aria-hidden="true" class="s7-close"></span></button><strong>Error!</strong> incorrect current password entered
									</div>
								</div>
							@endif

							{{-- validation errors --}}
							@if ($errors->password->any())
								<div role="alert" class="alert alert-cream alert-warning alert-dismissible">
									<button type="button" data-dismiss="alert" aria-label="Close" class="close"><span aria-hidden="true" class="s7-close"></span></button><span class="icon s7-attention"></span>
									<strong>Validation Error!</strong> check your input properly
									<ul>
										@foreach ($errors->password->all() as $error)
											<li>{{ $error }}</li>
										@endforeach
									</ul>
								</div>
							@endif


							<form action="{{ route('admin.update.password') }}" method="post">
								{{ csrf_field() }}

								{{-- here comes react --}}
								<div id="passwd"></div>
								
							</form>

						</div>
					</div>
				</div>
				
			</div>
		</div>
	</div>

@stop

@push('scripts')

@include('layouts.backend.transformer')
<script src="{{ asset( 'assets/backend/js/custom/upload-pic.js' ) }}"></script>

<script>
	/**
	* remove the temporary profile image
	*/
	function remImage()
	{
		const url = trans._removeTMPimg_;
		
		$.ajaxSetup({
			headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
			url: `${url}`,
			type: "POST",
			data: { remove:1 },
			success: function (result) {
				$("#pic-save-section").hide();
				$("#interface").html('');
				$("input#upload-field").val('');
			},
			error: function (xhr, status, error) {
				$.gritter.add({
					title: "Error occurred . .",
					text: error,
					class_name: "gritter-color danger"
				});
			}
		});
		$.ajax();

	}
</script>

{{-- jcrop --}}
<script src="{{ asset( 'assets/backend/plugins/jcrop-2.0.4/Jcrop.js' ) }}" />

<script type="text/javascript">
	function jCInit()
	{
		//
	}
</script>

<script type="text/javascript">
	$(document).ready(function(){
		$("button#tmp-upload-success").on('click', function(){
			$('#interface').on('cropmove cropend', function (e, s, c) {
				$("input#crop-x").val(parseInt(c.x));
				// $("input#crop-x2").val(c.x2);
				$("input#crop-y").val(parseInt(c.y));
				// $("input#crop-y2").val(c.y2);
				$("input#crop-w").val(parseInt(c.w));
				$("input#crop-h").val(parseInt(c.h));
			});
			
			$('#target').Jcrop({
				boxWidth: 400,
				setSelect: [160, 100, 140, 140],
				maxSize: [200, 200],
				minSize: [100, 100],
				aspectRatio: 1,
				canResize: true,
				allowSelect: false
			});
		});
	});
</script>

<script src="{{ asset( 'assets/backend/js/custom/password-main.js' ) }}"></script>

@endpush
