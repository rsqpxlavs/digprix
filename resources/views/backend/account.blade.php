@extends( 'layouts.backend.main' )

@section( 'seo' )

	@component('components.backend.seo')
			Manage Account | {{ env('APP_NAME') }} - Admin
	@endcomponent

@stop

@push('styles') 

@endpush

@section( 'contents' )

    <div class="main-content container">

        <div class="row">
            <div class="col-sm-12">
                <div class="panel panel-default panel-table">
                <div class="panel-heading">
                    Review recent device and security-related activities on your account
                    <p>Recently used devices</p>
                </div>
                <div class="panel-body">
                    <table class="table table-striped table-borderless">
                    <thead>
                        <tr>
                            <th style="width:37%;">User Agent</th>
                            <th>Platform</th>
                            <th>Ip Address</th>
                            <th>Browser</th>
                            <th>Device Model</th>
                            <th style="width:17%;">Login Time</th>
                        </tr>
                    </thead>
                    <tbody class="no-border-x">
                        @foreach($history as $record)
                        <tr>
                            <td>{{ $record->user_agent }}</td>
                            <td>
                                @if($record->isMobile)
                                    <i class="fa fa-mobile" aria-hidden="true"></i> Mobile
                                @elseif($record->isTablet)
                                    <i class="fa fa-tablet" aria-hidden="true"></i> Tablet
                                @elseif($record->isDesktop)
                                    <i class="fa fa-desktop" aria-hidden="true"></i> PC
                                @else
                                    <i class="fa fa-user-secret" aria-hidden="true"></i> Bot
                                @endif

                                - {{ $record->platform }}
                            </td>
                            <td>{{ $record->ip }}</td>
                            <td>
                                @if($record->isChrome)
                                    <i class="fa fa-chrome" aria-hidden="true"></i>
                                @elseif($record->isFirefox)
                                    <i class="fa fa-firefox" aria-hidden="true"></i>
                                @elseif($record->isOpera)
                                    <i class="fa fa-opera" aria-hidden="true"></i>
                                @elseif($record->isSafari)
                                    <i class="fa fa-safari" aria-hidden="true"></i>
                                @elseif($record->isIE)
                                    <i class="fa fa-internet-explorer" aria-hidden="true"></i>
                                @endif

                                {{ $record->browser }}
                            </td>
                            <td>{{ empty($record->device_model)? 'NA' : $record->device_model }}</td>
                            <td>{{ $record->created_at }}</td>
                        </tr>
                        @endforeach
                    </tbody>
                    </table>
                </div>
                </div>

                {{$history->links('vendor.pagination.bootstrap-4')}}
            </div>
        </div>

        <div class="row">
          <div class="col-md-6 offset-md-3">
            <div class="panel">
              <div class="panel-heading panel-heading-color panel-heading-color-dark"><span class="title">Secure your account</span><span class="panel-subtitle">anything suspicious!</span></div>
              <div class="panel-body">
                <p> If aytime you feel your account is not secure </p>
                <p>Change your account password immediately which will automatically remove all the active sessions of your account too.</p>
                <p>Otherwise you may manually flush all your devices' sessions by clicking the below button.</p>
                <p><button class="btn btn-primary" id="secure-acc"><i class="icon icon-left s7-lock"></i> Log me out of all devices</button></p>
              </div>
            </div>
          </div>
        </div>

    </div>

@stop

@push('scripts')

    @include('layouts.backend.transformer')
    <script type="text/javascript" src="{{ asset( 'assets/backend/js/custom/secure-account.js' ) }}"></script>


@endpush
