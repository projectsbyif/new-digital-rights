$(function() {
  $('#show_receipt').click(function(e) {
    e.preventDefault();

    $('.activity_log_timeline').fadeOut(250, function() {
      $('.activity_log_receipt').fadeIn(250);
    });
  });

  $('#show_activity_log').click(function(e) {
    e.preventDefault();

    $('.activity_log_receipt').fadeOut(250, function() {
      $('.activity_log_timeline').fadeIn(250);
    });
  });
});
