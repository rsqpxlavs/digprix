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
 * prevent duplicate push notification
 */
function checkDuplicate(tag){
    if (typeof (Storage) !== "undefined") {
        
        if (sessionStorage.getItem("push-tags")) {
            let currTags = JSON.parse(sessionStorage.getItem("push-tags"));
            
            if(currTags.includes(parseInt(tag))){
                return false;
            }
            else{
                currTags.push(tag);
                sessionStorage.setItem("push-tags", JSON.stringify(currTags));
                return true;
            }
        }

        currTag = [tag];
        sessionStorage.setItem("push-tags", JSON.stringify(currTag));
        return true;
    }
    else{
        //doesn't support session storage use ajax

        //make an ajax call to check whether this notification was already displayed
        const URL = document.head.querySelector('meta[name="track-tags"]').content;

        let xhttp = new XMLHttpRequest();
        xhttp.open("POST", `${URL}`, true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.setRequestHeader("X-CSRF-TOKEN", document.head.querySelector('meta[name="csrf-token"]').content);

        data = 'tag=' + tag;

        xhttp.send(data);

        xhttp.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    let resp = JSON.parse(this.response);

                    if (parseInt(resp.confirm) === 1) {
                        return true;
                    }
                }
            }
        };

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
 * ajax hit / js sessionStorage the notification tag to check if this notification previously was displayed
 */
function showNotification(title, body, icon='', tag){
    
    let inFreshMsg = checkDuplicate(tag);

    if (inFreshMsg == true){
        let notify = new Notification(title, {
            body: body,
            icon: icon,
            tag: tag
        });

        notify.onclick = function () {
            //user just clicked on the notification
            // console.log(this.tag);
        }
    }
}
