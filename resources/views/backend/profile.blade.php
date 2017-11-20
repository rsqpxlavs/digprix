@extends( 'layouts.backend.main' )

@section( 'seo' )

	@component('components.backend.seo')
	    Manage Profile | {{ env('APP_NAME') }} - Admin
	@endcomponent

@stop

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
            <div class="col-md-4">
              <div class="user-info-list panel panel-default">
                <div class="panel-heading panel-heading-divider">About Me</div>
                <div class="panel-body">
                  
                </div>
                <div class="panel-heading panel-heading-divider">Elsewhere</div>
                <div class="panel-body">
                  
                </div>
              </div>
            </div>
            <div class="col-md-8">
              <div class="widget widget-fullwidth user-develop-chart">
                <div class="widget-head">
                  <div class="tools"><span class="icon s7-cloud-download"></span><span class="icon s7-refresh-2"></span></div><span class="title">Development Activity</span>
                </div>
                
              </div>
              <div class="widget widget-tile widget-tile-wide">
                <div class="tile-info">
                  <div class="icon"><span class="s7-graph1"></span></div>
                  <div class="data-info">
                    <div class="title">Support Tickets</div>
                  </div>
                </div>
                <div class="tile-value"><span data-toggle="counter" data-end="157">0</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>

@stop

@push('scripts')

@endpush
