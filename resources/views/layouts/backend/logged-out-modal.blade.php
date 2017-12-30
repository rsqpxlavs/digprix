{{-- device session flushed modal --}}
<div id="session-not-available-modal" tabindex="-1" role="dialog" class="modal modal-dark fade">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <button type="button" data-dismiss="modal" aria-hidden="true" class="close"><span class="s7-close"></span></button>
        </div>
        <div class="modal-body">
            <div class="text-center">
            <div class="text-danger"><span class="modal-main-icon s7-close-circle"></span></div>
            <h3 class="mb-4">Access Restricted!</h3>
            <p>You are no longer logged-in into the current device<br>Please login again to continue.</p>
            </div>
        </div>
        <div class="modal-footer">
            <button type="button" data-dismiss="modal" class="btn btn-link btn-link-secondary">Cancel</button>
            <a href="{{ route('admin.dashboard') }}" class="btn btn-link btn-link-danger">Proceed</a>
        </div>
        </div>
    </div>
</div>
