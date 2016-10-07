$(function() {

  $('.next_button').click(function(e) {
    e.preventDefault();

    $('#blinds_one').fadeOut(250, function() {
      $('#blinds_two').fadeIn(250);
    });
  });

  $('.next_button_two').click(function(e) {
    e.preventDefault();

    $('#blinds_two').fadeOut(250, function() {
      $('#blinds_three').fadeIn(250);
    });
  });

  $('#show_my_building_street').click(function(e) {
    e.preventDefault();

    $('.house_no').fadeOut(function() {
      $('.house_yes').fadeIn();
    });
  });

  $('#hide_my_building_street').click(function(e) {
    e.preventDefault();

    $('.house_yes').fadeOut(function() {
      $('.house_no').fadeIn();
    });
  });

  $('#show_my_building_satellite').click(function(e) {
    e.preventDefault();

    $('.house_no_map').fadeOut(function() {
      $('.house_yes_map').fadeIn();
    });
  });

  $('#hide_my_building_satellite').click(function(e) {
    e.preventDefault();

    $('.house_yes_map').fadeOut(function() {
      $('.house_no_map').fadeIn();
    });
  });

});
