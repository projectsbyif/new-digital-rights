$(function() {
  $('#list_click_yes').click(function(e) {
    e.preventDefault();

    $('#map').css({
      'background-image': "url('/images/brighton-filtered.jpg')"
    });

    $('.decision_text').replaceWith("<p>Detailed location data from your trip has been removed.");

    $('#list_click_yes, #list_click_no').fadeOut(250);

  });

});
