import Echo from "laravel-echo"

window.Echo = new Echo({
    broadcaster: 'socket.io',
    host: window.location.hostname + ':6001'
});

window.Echo.private('mychannel.1')
    .listen('MsgSentEvent', (e) => {
        console.log(e);
    });
