$(function() {
  $('#show_permissions_dialog').click(function(e) {
    e.preventDefault();

    $('.sample_container').fadeOut(250, function() {
      $('.permissions_container').fadeIn(250);
    });
  });

  $('#allow_ad').click(function(e) {
    e.preventDefault();

    $('.permissions_container').fadeOut(250, function(e) {
      $('#show_permissions_dialog').text("Thank you.");
      $('.sample_container').fadeIn(250);
    });
  });

  $('#deny_ad').click(function(e) {
    e.preventDefault();

    $('.permissions_container').fadeOut(250, function(e) {
      $('.deny_ad_container').fadeIn(250);
    });
  });
});
