(function () {

    document.onreadystatechange = () => {
        if (document.readyState === 'complete') {
            Echo.join('all-admins')
                .here((users) => {
                    //
                })
                .joining((user) => {
                    // console.log(`${user.name} joined`);
                    let canNotify = atmptNotification();

                    if (canNotify){
                        let username = (user.username) ? `(@ ${user.username})` : '';
                        showNotification(`${user.fullname} logged in`, `${user.fname} ${username} is now online`, `${user.photo}`);
                    }
                })
                .leaving((user) => {
                    console.log(`${user.name} left`);
                });
        }
    };

    /**
     * attempt to show notification
     * return boolean
     */
    function atmptNotification(){
        //if browser supports notification
        if (window.Notification) {

            //notification permission status default i.e. we never been asked for permission
            if (Notification.permission === 'default') {

                //ask permission now
                Notification.requestPermission(function (p) {
                    //user just decided not to allow browser notifications
                    if (p === 'denied') {
                        let message = `You are missing some cool features, please allow the notification 
                                        <a href="#" class="badge badge-info">know how to enable</a>`;
                        footerStick(message);

                        return false;
                    }
                    //user allowed permission, show some notification now
                    else if (p === 'granted') {
                        return true;
                    }
                });

            }
            //sometimes previously we've asked for permission & user blocked it then
            else if (Notification.permission === 'denied') {
                let message = `There are few notifications available for you right now! please allow the browser notification 
                                <a href="#" class="badge badge-info">know how to enable</a>`;
                footerStick(message);

                return false;
            }
            //user already whitelisted us to show notification, show some
            else {
                return true;
            }
        }
        else{
            //browser doesn't support notification try something else
            return false;
        }
    }

    /**
     * this function creates the footer sticky info bar
     */
    function footerStick(textInfo='some info here . . .'){
        if (document.getElementById('sticky-footer-info')){
            let elem = document.getElementById('sticky-footer-info');
            elem.innerHTML = `<p>${textInfo} <a id="close-msg" href="#" class="badge badge-light">close</a></p>`;
        }
        else{
            let elem = document.createElement('div');
            elem.setAttribute('id', 'sticky-footer-info');
            elem.innerHTML = `<p>${textInfo} <a id="close-msg" href="#" class="badge badge-light">close</a></p>`;
            document.body.appendChild(elem);
        }

        //to close the footer stick msg bar
        document.getElementById('close-msg').addEventListener('click', function (e) {
            e.preventDefault();
            
            let elem = document.getElementById('sticky-footer-info');
            elem.remove();
        });
    }

    /**
     * shows browser notification
     */
    function showNotification(title, body, icon=''){
        let notify = new Notification(title, {
            body: body,
            icon: icon
        });

        notify.onclick = function () {
            //user just clicked on the notification
        }
    }

})();
