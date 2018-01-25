<div role="alert" class="alert alert-{{$alert_look}} alert-warning alert-dismissible">
    <button type="button" data-dismiss="alert" aria-label="Close" class="close"><span aria-hidden="true" class="s7-close"></span></button><span class="icon s7-attention"></span><strong>Validation Error!</strong> check your input and try again
    {{ $slot }}
</div>
