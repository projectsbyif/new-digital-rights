$(function() {
  // Contents
  $('#contents').hide().addClass('hideable');
  $('#close_contents').show();

  $('#link_contents').click(function(e) {
    e.preventDefault();

    $('#contents').css({
      'right': -$('#contents').outerWidth()
    }).show().animate({
      'right': 0
    }, 250, function() {
      if ($(window).width() < 800) {
        $('body').children().not('#contents').hide();
      }
    });
  });

  $('#close_contents').click(function(e) {
    e.preventDefault();

    $('body').children().not('#contents').show();

    $('#contents').animate({
      'right': -$('#contents').outerWidth()
    }, 250, function() {
      $('#contents').hide();
    });
  });

  $(window).on('resize', function() {
    if ($(window).width() < 800 && $('#contents').is(":visible")) {
      $('body').children().not('#contents').hide();
    } else if ($(window).width() > 800 && $('#contents').is(":visible")) {
      $('body').children().not('#contents').show();
    }
  });
});
