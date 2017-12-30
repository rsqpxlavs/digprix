import axios from 'axios';

document.getElementById('secure-acc').addEventListener('click', function(){
    axios.post(`${window.trans._hitSecureMyAcc}`, {
        secure: 1
    }).then((response) => {
        if (response.data.secure == 1){
            console.log('all set now redirect to admin login');
        }
        else{
            $.gritter.add({
                title: "Error Occurred!",
                text: "something went wrog please retry",
                class_name: "gritter-color danger"
            });
        }
        //redirect the user to the admin login page

        //leave the broadcast channel
        //Echo.leave('orders');
    });
});

