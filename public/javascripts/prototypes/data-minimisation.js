$(function() {
  $('#list_click_yes').click(function(e) {
    e.preventDefault();

    $('#map').css({
      'background-image': "url('/public/images/brighton-filtered.jpg')"
    });

    $('.decision_text').replaceWith("<p>Detailed location data from your trip has been deleted.");

    $('#list_click_yes, #list_click_no').fadeOut(250);

  });

  $('#list_click_no').click(function(e) {
    e.preventDefault();

    $('.decision_text').replaceWith("<p>The detailed location data from your recent trip will be kept and can be viewed at a future date.</p>");

    $('#list_click_yes, #list_click_no').fadeOut(250);
  });

});
