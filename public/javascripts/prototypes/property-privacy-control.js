$(function() {
  let currentStep = 0;

  $('.selector a').click(function(e) {
    e.preventDefault();

    $(this).siblings().removeClass('selected');
    $(this).addClass('selected');

    if ($(this).parent().attr('id') === "blinds_one_selector") {
      if ($(this).text() === "Yes") {
        $('#blinds_one .preview_area').css({
          'background-image': "url('/public/images/house.jpg')"
        });
      } else if ($(this).text() === "No") {
        $('#blinds_one .preview_area').css({
          'background-image': "url('/public/images/house_blur.jpg')"
        });
      }
    } else if ($(this).parent().attr('id') === "blinds_two_selector") {
      if ($(this).text() === "Yes") {
        $('#blinds_two .preview_area').css({
          'background-image': "url('/public/images/house_satellite.svg')"
        });
      } else if ($(this).text() === "No") {
        $('#blinds_two .preview_area').css({
          'background-image': "url('/public/images/house_satellite_blur.svg')"
        });
      }
    }
  });

  $('.next').click(function(e) {
    e.preventDefault();

    if (currentStep == 0) {
      // Show 1
      $('#blinds_one').fadeOut(250, function() {
        $('#blinds_two').fadeIn(250);
      });
      currentStep++;
    } else if (currentStep == 1) {
      // Show confirmation
      $('.next').fadeOut(250, function() {
        $('.saved').fadeIn(250)
      });
    }
  });
});
