@extends( 'layouts.backend.main' )

@section( 'seo' )

	@component('components.backend.seo')
			Manage Admin Accounts | {{ config('app.name') }} - Admin
	@endcomponent

@stop

@push('styles') 

@endpush

@section( 'contents' )

<div class="main-content container">
    <div class="row">
          <!--Responsive table-->
          <div class="col-sm-12">
            <div class="panel panel-default panel-table">
              <div class="panel-heading">Available Accounts - 
                  <a href="?role=all">All ({{ $admins->count() - 1 }})</a> |
                  @foreach($roles as $role)
                    <a href="?role={{$role->role}}">{{ $role->display_name }} ({{ $role->account_count }})</a>

                    @if(!$loop->last)
                        |
                    @endif
                  @endforeach 
              </div>
              <div class="panel-body">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3">
                            <select class="bulk-action-fld">
                                <option value="">Bulk Actions</option>
                                <option value="">Deactivate</option>
                                <option value="">Delete</option>
                            </select>
                            <button class="btn btn-sm btn-default">Apply</button>
                        </div>

                        <div class="col-md-5">
                            <label for="search">Search:</label>
                            <input id="search" class="bulk-action-fld" type="text" />
                            <button class="btn btn-sm btn-default"><span class="s7-search"></span> Filter</button>
                        </div>

                        <div class="col-md-4">
                            <label for="per-page">Show Per pge:</label>
                            <input style="width:80px;" id="per-page" class="bulk-action-fld" type="number" value="10" min="1" />
                            <button class="btn btn-sm btn-default">Paginate</button>
                        </div>
                    </div>
                
              </div>
                
                <div class="table-responsive noSwipe">
                  <table class="table table-striped table-hover">
                    <thead>
                      <tr>
                        <th style="width:5%;">
                          <label class="custom-control custom-control-sm custom-checkbox">
                            <input type="checkbox" class="custom-control-input"><span class="custom-control-indicator"></span>
                          </label>
                        </th>
                        <th style="width:25%;">User</th>
                        <th style="width:20%;">Contact Info</th>
                        <th style="width:10%;">Status</th>
                        <th style="width:15%;">Last Login</th>
                        <th style="width:10%;">Created On</th>
                        <th style="width:20%;"></th>
                      </tr>
                    </thead>
                    <tbody>
                        @foreach($admins as $admin)
                            @php
                                if($admin->super_admin || $admin->id === Auth::user()->id) continue;
                            @endphp
                            <tr>
                                <td>
                                    <label class="custom-control custom-control-sm custom-checkbox">
                                        <input type="checkbox" class="custom-control-input"><span class="custom-control-indicator"></span>
                                    </label>
                                </td>
                                <td class="user-avatar cell-detail user-info">
                                    <img style="width:50px;height:50px;" src="{{ asset('assets/backend/img/profile') }} {{ ($admin->photo)? '/'. $admin->photo : '/blank.png' }}" alt="Avatar">
                                    <span>{{ $admin->fname . ' ' .  $admin->lname}} @if($admin->username) ( <small class="text-info">{{ '@'. $admin->username }}</small> ) @endif</span>
                                    <span class="cell-detail-description">
                                        @if($admin->accesslevel)
                                            @foreach($admin->accesslevel as $role)
                                                {{ $role->display_name }}

                                                @if(! $loop->last)
                                                    ,
                                                @endif
                                            @endforeach
                                        @endif
                                    </span>
                                </td>
                                <td class="cell-detail"> 
                                    <span>{{ $admin->email }}</span>
                                    @if($admin->mobile)
                                        <span class="s7-phone">{{ $admin->mobile }}</span>
                                    @endif
                                </td>
                                <td class="cell-detail">
                                    <div class="switch-button switch-button-success">
                                        <input type="checkbox" onchange="ToggleAccount({{ $admin->id }}, this)" {{ $admin->active? 'checked="checked"' : '' }} id="swt{{$loop->iteration}}"><span>
                                        <label for="swt{{$loop->iteration}}"></label></span>
                                    </div>
                                </td>
                                <td class="cell-detail">
                                    <span>{{ $admin->loginhistory->last()->created_at->toFormattedDateString() }}</span>
                                    <span class="cell-detail-description">{{ $admin->loginhistory->last()->created_at->format('h:i:s A') }}</span>
                                </td>
                                <td class="cell-detail">
                                    <span>{{ $admin->created_at->toFormattedDateString() }}</span>
                                    <span class="cell-detail-description">{{ $admin->created_at->format('h:i:s A') }}</span>
                                </td>
                                <td class="text-right">
                                <div class="btn-group btn-hspace">
                                    <button type="button" data-toggle="dropdown" class="btn btn-secondary btn-xs dropdown-toggle">Open <span class="icon-dropdown s7-angle-down"></span></button>
                                    <div role="menu" class="dropdown-menu dropdown-menu-right"><a href="#" class="dropdown-item">Action</a><a href="#" class="dropdown-item">Another action</a><a href="#" class="dropdown-item">Something else here</a>
                                    <div class="dropdown-divider"></div><a href="#" class="dropdown-item">Separated link</a>
                                    </div>
                                </div>
                                </td>
                            </tr>
                        @endforeach
                      <!-- <tr class="online">
                        <td>
                          <label class="custom-control custom-control-sm custom-checkbox">
                            <input type="checkbox" class="custom-control-input"><span class="custom-control-indicator"></span>
                          </label>
                        </td>
                        <td class="user-avatar cell-detail user-info"><img src="assets/img/avatars/img1.jpg" alt="Avatar"><span>Ryan Lawrence</span><span class="cell-detail-description">Designer</span></td>
                        <td class="cell-detail"> <span>Main structure</span><span class="cell-detail-description">CLI Connector</span></td>
                        <td class="milestone"><span class="completed">22 / 30</span><span class="version">v1.1.5</span>
                          <div class="progress">
                            <div style="width: 75%" class="progress-bar progress-bar-primary"></div>
                          </div>
                        </td>
                        <td class="cell-detail"><span>develop</span><span class="cell-detail-description">4cc1bc2</span></td>
                        <td class="cell-detail"><span>April 22, 2016</span><span class="cell-detail-description">14:45</span></td>
                        <td class="text-right">
                          <div class="btn-group btn-hspace">
                            <button type="button" data-toggle="dropdown" class="btn btn-secondary btn-xs dropdown-toggle">Open <span class="icon-dropdown s7-angle-down"></span></button>
                            <div role="menu" class="dropdown-menu dropdown-menu-right"><a href="#" class="dropdown-item">Action</a><a href="#" class="dropdown-item">Another action</a><a href="#" class="dropdown-item">Something else here</a>
                              <div class="dropdown-divider"></div><a href="#" class="dropdown-item">Separated link</a>
                            </div>
                          </div>
                        </td>
                      </tr> -->
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
</div>

@stop

@push('scripts')

    @include('layouts.backend.transformer')

    <script type="text/javascript">
        function ToggleAccount(id, elem)
        {
            elem.setAttribute('disabled', 'disabled');

            $.ajaxSetup({
                headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
                url: "{{ route('admin.account.toggle') }}",
                type: "POST",
                data: {id: id},
                success: function(result){
                    elem.removeAttribute('disabled');
                    $.gritter.add({
                        title: "Successfully Done. .",
                        text: "Action Performed Successfully",
                        class_name: "gritter-color info"
                    });
                },
                error: function(xhr,status,error){
                    $.gritter.add({
                        title: "Error Occurred!",
                        text: "something went wrog please retry",
                        class_name: "gritter-color danger"
                    });
                    elem.removeAttribute('disabled');
                }
            });
            $.ajax();

        }
    </script>

@endpush
