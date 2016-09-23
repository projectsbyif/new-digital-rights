$(function() {

    function randomIntInc(low, high) {
        return Math.floor(Math.random() * (high - low + 1) + low);
    }

    function randomNumber(min, max, time, name) {
        var name = new Array(time);
        for (var i = 0; i < name.length; i++) {
            name[i] = randomIntInc(min, max)
            console.log(name)(time)
        }
    }
    randomNumber(0.1, 1.0, 24, "day");
    randomNumber(3, 7, 7, "week");
    //needs to factor in 29/30/31 day months
    randomNumber(100, 200, 12, "month");
    randomNumber(1800, 2500, 1, "year");
});
