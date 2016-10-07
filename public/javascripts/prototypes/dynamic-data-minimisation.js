$(function() {
  $('#list_click_yes').click(function(e) {
    e.preventDefault();

    $('.location').fadeOut(250);

    $('#map').css({
      'background-image': "url('/public/images/brighton-filtered.png')"
    });

    $('#list_click_yes, #list_click_no').fadeOut(250);

    $('.decision_text').replaceWith("<p>The detailed location data from your trip has been removed. This data has been deleted and is no longer accessible.")
  });

  $('#list_click_no').click(function(e) {
    e.preventDefault();

    $('.decision_text').replaceWith("<p>The detailed location data from your recent trip will be kept and can be viewed at a future date.</p>");

    $('#list_click_yes, #list_click_no').fadeOut(250);
  });
});
