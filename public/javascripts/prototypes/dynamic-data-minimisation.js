$(function() {
  $('#list_click_yes').click(function(e) {
    e.preventDefault();

    $('.location').fadeOut(250);

    $('#map').css({
      'background-image': "url('/public/images/brighton-filtered.png')"
    });

    $('#list_click_yes, #list_click_no').fadeOut(250);

    $('.decision_text').replaceWith("<p>Detailed location data from your trip has been deleted.")

    $('.preference_text').replaceWith("<p>Save this preference for future trips?")

    $('#list_click_save').fadeIn(1200);
  });

  $('#list_click_no').click(function(e) {
    e.preventDefault();

    $('.decision_text').replaceWith("<p>The detailed location data from your recent trip will be kept and can be viewed at a future date.</p>");

    $('#list_click_yes, #list_click_no').fadeOut(250);
  });

  $('#list_click_save').click(function(e) {
    e.preventDefault();

    $('#list_click_save').fadeOut(250);
    $('#list_click_saved').fadeIn(1200);
  });
});
