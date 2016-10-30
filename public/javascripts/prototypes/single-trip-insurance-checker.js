$(function() {

  function countdown( elementName, minutes, seconds )
  {
      var element, endTime, hours, mins, msLeft, time;

      function twoDigits( n )
      {
          return (n <= 9 ? "0" + n : n);
      }

      function updateTimer()
      {
          msLeft = endTime - (+new Date);
          if ( msLeft < 1000 ) {
              element.innerHTML = "countdown's over!";
          } else {
              time = new Date( msLeft );
              hours = time.getUTCHours();
              mins = time.getUTCMinutes();
              element.innerHTML = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );
              setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
          }
      }

      element = document.getElementById( elementName );
      endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
      updateTimer();
  }

    $('#get_route').click(function(e) {
      e.preventDefault();

      $('.hide_journey').fadeOut(250, function() {
        $('.hide_route').fadeIn(500);
      });

      countdown( "countdown", 30, 0 );

    });

    $('#quote_yes').click(function(e) {
      e.preventDefault();

      $('.hide_route').fadeOut(250, function() {
        $('.hide_options').fadeIn(500);
      });

      recalculate();
    });

    $('#quote_accept').click(function(e) {
      e.preventDefault();

      $('.hide_options').fadeOut(250, function() {
        $('.hide_quote').fadeIn(500);
      });

      recalculate();
    });

    $('#concern_button').click(function(e) {
      e.preventDefault();

      $('#concern_button').fadeOut(250,  function() {
        $('#reported_button').fadeIn(500);
      });
    });
});
