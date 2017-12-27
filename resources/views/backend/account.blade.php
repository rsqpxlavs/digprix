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
                    <div class="tools">
                        <span class="icon s7-cloud-download"></span><span class="icon s7-edit"></span>
                    </div>
                </div>
                <div class="panel-body">
                    <table class="table table-striped table-borderless">
                    <thead>
                        <tr>
                        <th style="width:50%;">Name</th>
                        <th style="width:10%;">Date</th>
                        <th class="number">Rate</th>
                        <th class="number">Sales</th>
                        <th class="actions"></th>
                        </tr>
                    </thead>
                    <tbody class="no-border-x">
                        <tr>
                        <td>Ryan Lawrence</td>
                        <td>23/06/2016</td>
                        <td class="number">60%</td>
                        <td class="number">639</td>
                        <td class="actions"><a href="#" class="icon"><i class="s7-trash"></i></a></td>
                        </tr>
                        <tr>
                        <td>Benji Miller</td>
                        <td>15/05/2016</td>
                        <td class="number">23%</td>
                        <td class="number">235</td>
                        <td class="actions"><a href="#" class="icon"><i class="s7-trash"></i></a></td>
                        </tr>
                        <tr>
                        <td>Justin Adams</td>
                        <td>10/03/2016</td>
                        <td class="number">79%</td>
                        <td class="number">728</td>
                        <td class="actions"><a href="#" class="icon"><i class="s7-trash"></i></a></td>
                        </tr>
                        <tr>
                        <td>Brett Harris</td>
                        <td>18/01/2016</td>
                        <td class="number">18%</td>
                        <td class="number">135</td>
                        <td class="actions"><a href="#" class="icon"><i class="s7-trash"></i></a></td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>

        <div class="row">
          <div class="col-md-6 offset-md-3">
            <div class="panel">
              <div class="panel-heading panel-heading-color panel-heading-color-dark"><span class="title">Secure your account</span><span class="panel-subtitle">anything suspicious!</span></div>
              <div class="panel-body">
                <p> Quisque gravida aliquam diam at cursus, quisque laoreet ac lectus a rhoncusac tempus odio. </p>
                <p>Aliquam posuere volutpat turpis, ut euimod diam pellentesque at. Sed sit amet nulla a dui dignisim euismod. Morbi luctus elementum dictum. Donec convallis mattis elit id varius. Quisque facilisis sapien quis mauris,, erat condimentum.</p>
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
