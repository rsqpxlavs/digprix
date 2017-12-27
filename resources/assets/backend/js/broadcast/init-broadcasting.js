import Echo from "laravel-echo";

window.Pusher = require('pusher-js');

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: 'c3189996e679f97c2505',
    cluster: 'ap2',
    encrypted: true
});
