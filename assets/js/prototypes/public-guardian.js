$(function() {
  $('#button_save').click(function(e) {
    e.preventDefault();

    $('#digital_will').fadeOut(250, function() {
      $('#digital_will_confirmation').fadeIn(250);
    });
  });
});
