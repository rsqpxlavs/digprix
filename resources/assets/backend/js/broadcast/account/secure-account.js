import axios from 'axios';

import NProgress from 'nprogress';
import '../../../../../../public/assets/backend/lib/nprogress/nprogress.css';

document.getElementById('secure-acc').addEventListener('click', function(e){
    e.target.setAttribute('disabled', 'disabled');
    NProgress.set(0.4);
    NProgress.inc();

    axios.post(`${window.trans._hitSecureMyAcc}`, {
        secure: 1
    }).then((response) => {
        if (response.data.secure == 1){
            window.location.reload();
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

