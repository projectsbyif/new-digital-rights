$(function() {
  let timerIncrementTime;
  let now = moment().hour(0).minute(0).second(0);

  timerIncrementTime = setInterval(function() {
    now.add(1, 'h');

    $('#present_date').text(now.format("dddd, D MMMM YYYY"));
    $('#present_time').text(now.format("HH:mm"));
  }, 25);
});
