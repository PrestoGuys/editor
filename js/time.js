(function () {
    function checkTime(i) {
        return (i < 10) ? "0" + i : i;
    }

    function startTime() {
        var today = new Date(),
            h = checkTime(today.getHours()),
            m = checkTime(today.getMinutes()),
            s = checkTime(today.getSeconds());
            const d = new Date();
        document.getElementById('time').innerHTML = 'The current date and time is: ' + ((d.getFullYear()) + '.' + (d.getMonth() + 1) + '.' + (d.getDate())) + ' | ' + (h + ":" + m + ":" + s);
        t = setTimeout(function () {
            startTime()
        }, 500);
    }
    startTime();
})();
