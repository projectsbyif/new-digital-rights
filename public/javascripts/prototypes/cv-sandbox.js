$(function() {
  $('.cv_thumbnail a').click(function(e) {
    e.preventDefault();

    $('.cv_modal').fadeIn(250).css({
      'display': 'flex'
    });
  });

  $('#close_cv').click(function(e) {
    e.preventDefault();

    $('.cv_modal').fadeOut(250);
  });
});
