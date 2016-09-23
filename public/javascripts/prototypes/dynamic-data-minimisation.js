$(function() {
    var d = new Date();
    var n = d.getHours();
    var day = d.getDay();

    function randomIntInc(low, high) {
        return Math.floor(Math.random() * (high - low + 1) + low);
    }

    function create(min, max, period, time) {
        let kwh = new Array(period);
        for (var i = 0; i < kwh.length; i++) {
            kwh[i] = generateTime(min, max);
        }
        console.log(kwh);
    }

    function generateTime(hour) {
        if (hour <= 10 && hour >= 6) {
            return Math.floor((Math.random() * 50) + 80);
        } else {
            return randomIntInc(hour, day);
        }
    }

    generateTime(n);
    create(40, 100, 24, "day");
    create(400, 600, 7, "week");
    create(4500, 5000, 4, "month");
    create(20000, 24000, 12, "year");
    create(20000, 24000, 5, "5 years");

  let timerIncrementTime;
  let now = moment().hour(0).minute(0).second(0);

  timerIncrementTime = setInterval(function() {
    now.add(1, 'h');

    $('#present_date').text(now.format("dddd, D MMMM YYYY"));
    $('#present_time').text(now.format("HH:mm"));
  }, 25);
});
