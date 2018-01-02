@extends( 'layouts.backend.main' )

@section( 'seo' )

	@component('components.backend.seo')
			Manage Account | {{ config('app.name') }} - Admin
	@endcomponent

@stop

@push('styles') 

@endpush

@section( 'contents' )



@stop

@push('scripts')

    @include('layouts.backend.transformer')

@endpush
