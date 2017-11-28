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
								<div class="user-display-name">{{ Auth()->user()->fname }}</div>
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
							<form>
								
								<div class="form-group mt-1">
									<label>First Name *</label>
									<input type="text" placeholder="Enter first name" class="form-control">
								</div>

								<div class="form-group mt-1">
									<label>Last Name</label>
									<input type="text" placeholder="Enter last name" class="form-control">
								</div>

								<div class="form-group mt-1">
									<label>Email ID *</label>
									<input type="email" placeholder="Enter email" class="form-control">
								</div>

								<div class="input-group mb-2">
									<span class="input-group-addon">@</span>
									<input type="text" placeholder="Username" class="form-control">
								</div>

								<div class="form-group mt-1">
									<label>Mobile</label>
									<input type="text" placeholder="Enter mobile no." class="form-control">
								</div>

								<div class="row pt-5">
									<div class="col-6">
										<p class="text-left">
											<button type="submit" class="btn btn-space btn-primary">Update Profile</button>
											<button class="btn btn-space btn-secondary" type="button">Cancel</button>
										</p>
									</div>
									<div class="clearfix"></div>
								</div>
							</form>
						</div>
					</div>

				</div>

				<div class="col-md-5">
					<div class="user-info-list panel panel-default">
						<div class="panel-heading panel-heading-divider">Change Password
							<span class="panel-subtitle">This is the horizontal bootstrap layout</span>
						</div>
						<div class="panel-body">
							<form>
								<div class="form-group row mt-4">
									<label class="col-2 col-form-label">Current Password</label>
									<div class="col-10">
										<input type="password" placeholder="Your Current Password" class="form-control">
									</div>
								</div>
								<div class="form-group row">
									<label class="col-2 col-form-label">New Password</label>
									<div class="col-10">
										<input type="password" placeholder="Enter New password" class="form-control">
									</div>
								</div>
								<div class="form-group row">
									<label class="col-2 col-form-label">Confirm New Password</label>
									<div class="col-10">
										<input type="password" placeholder="Re-Enter New password" class="form-control">
									</div>
								</div>
								<div class="row pt-5">
									<div class="col-6">
										
									</div>
									<div class="col-6">
										<p class="text-right">
											<button type="submit" class="btn btn-space btn-primary">Save Changes</button>
											<button type="button" class="btn btn-space btn-secondary">Cancel</button>
										</p>
									</div>
								</div>
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

@endpush
