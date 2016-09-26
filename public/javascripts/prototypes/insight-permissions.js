$(function() {
  $('#show_permissions_dialog').click(function(e) {
    e.preventDefault();

    $('.permissions_dialog').fadeIn(250);
  });

  $('.permissions_dialog .hide').click(function(e) {
    e.preventDefault();

    $('.permissions_dialog').fadeOut(250);
  });

  $('#allow_ad').click(function(e) {
    e.preventDefault();

    $('.permissions_dialog').fadeOut(250)

    $('#allow_ad_confirmation').css({
      'opacity': 1
    }).delay(2000).animate({
      'opacity': 0
    }, 250);
  });

  $('#deny_ad').click(function(e) {
    e.preventDefault();

    $('.permissions_dialog').fadeOut(250);
    $('#show_permissions_dialog').fadeOut(250);

    $('#deny_ad_confirmation').css({
      'opacity': 1
    });
  });
});
