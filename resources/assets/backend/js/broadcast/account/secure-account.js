import axios from 'axios';

document.getElementById('secure-acc').addEventListener('click', function(){
    axios.post(`${window.trans._hitSecureMyAcc}`, {
        secure: 1
    }).then((response) => {
        console.log('server hit successful');
        //redirect the user to the admin login page

        //leave the broadcast channel
        //Echo.leave('orders');
    });
});

