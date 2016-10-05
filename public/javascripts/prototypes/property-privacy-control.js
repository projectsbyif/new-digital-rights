$(function() {
  $('.next_button').click(function(e) {
    e.preventDefault();

    $('#blinds_one').fadeOut(250, function() {
      $('#blinds_two').fadeIn(250);
    });
  });
});
