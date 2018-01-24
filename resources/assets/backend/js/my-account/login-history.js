import moment from 'moment';

(function () {

    //the function that determines the diff every 1sec & write the o/p to the innerhtml
    const caclDiff = (pastTime = "2018-01-24 14:44:15", elem) => {
        setInterval(() => {
            let now = moment(new Date());
            let end = moment(pastTime, "YYYY-MM-DD HH:mm:ss");
            elem.innerHTML = end.from(now);
        }, 1000);
    };

    //loop through all the elements & call the difference calculate func.
    let diffelements = document.getElementsByClassName('time-diff');
    let i = 0;
    for (i = 0; i < diffelements.length; i++) {
        let loggedInTime = diffelements[i].getAttribute('data-at');

        caclDiff(loggedInTime, diffelements[i]);
    }
})();
