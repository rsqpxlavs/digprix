<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="noindex, nofollow">
    <link rel="shortcut icon" href="{{ asset( 'assets/favicon.png' )}}">
    <title>404 Page Not Found - {{ env('APP_NAME') }} | Admin</title>
    <link rel="stylesheet" type="text/css" href="{{ asset( 'assets/backend/lib/stroke-7/style.css' )}}"/>
    <link rel="stylesheet" type="text/css" href="{{ asset( 'assets/backend/lib/perfect-scrollbar/css/perfect-scrollbar.min.css' )}}"/>
    <link rel="stylesheet" href="{{ asset( 'assets/backend/css/app.css' )}}" type="text/css"/>
  </head>
  <body class="mai-splash-screen">
    <div class="mai-wrapper mai-error mai-error-404">
      <div class="main-content container">
        <div class="error-container">
          <div class="error-image">
            <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 1018 810">
              <polygon points="38 810 146 410 532 242 492 478 392 564 426 760 342 810 38 810" class="cls-1"></polygon>
              <polygon points="532 810 732 810 796 576 532 242 492 478 577 389 491 589 589 767 532 810" class="cls-2"></polygon>
              <polygon points="0 262 38 364 578 130 596 0 0 262" class="cls-1"></polygon>
              <polygon points="936 568 1018 502 596 0 578 130 936 568" class="cls-2"></polygon>
              <path d="M303.5,73.5" transform="translate(-41.5 -69.5)" class="cls-2"></path>
              <polyline points="348 16 331.95 116.08 237.7 157.7 262 4" class="cls-1"></polyline>
              <polygon points="426 26 422 78 332 116 348 16 426 26" class="cls-2"></polygon>
            </svg>
          </div>
          <div class="error-number"> <span>404</span></div>
          <div class="error-description">The page you are looking for might have been removed.</div>
          <div class="error-goback-text">Would you like to go back-end dashboard?</div>
          <div class="error-goback-button"><a href="{{ route('admin.dashboard') }}" class="btn btn-lg btn-primary">Let's go dashboard</a></div>
          <div class="footer"> <span class="copy">&copy; {{ date('Y') }} </span><span>{{ env('APP_NAME') }}</span></div>
        </div>
      </div>
    </div>
  </body>
</html>
