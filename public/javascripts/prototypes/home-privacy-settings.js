$(function() {
  let currentStep = 0;

  $('.selector a').not('.next').click(function(e) {
    e.preventDefault();

    $(this).siblings().removeClass('selected');
    $(this).addClass('selected');

    if (!$(this).hasClass('next')) {
    }

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
          'background-image': "url('/public/images/aerial.jpg')"
        });
      } else if ($(this).text() === "No") {
        $('#blinds_two .preview_area').css({
          'background-image': "url('/public/images/aerial_blur.jpg')"
        });
      }
    }

    if (currentStep == 0) {
      $('#blinds_one_selector .next').removeClass('unselected');
    } else if (currentStep == 1) {
      $('#blinds_two_selector .next').removeClass('unselected');
    }
  });

  $('.next').click(function(e) {
    e.preventDefault();

    if (currentStep < 3) {
      if (currentStep == 0) {
        if ($('#blinds_one_selector').find('.selected').length != 0) {
          // Show 1
          $('#blinds_one').fadeOut(250, function() {
            $('#blinds_two').fadeIn(250);
          });

          currentStep++;
        }
      } else if (currentStep == 1) {
        if ($('#blinds_two_selector').find('.selected').length != 0) {
          // Show confirmation
          $('.next').fadeOut(250, function() {
            $(this).text("Saved").addClass('unselected').css({ 'opacity': 1 }).fadeIn(250);
            currentStep++;
          });
        }
      }
    }
  });
});
