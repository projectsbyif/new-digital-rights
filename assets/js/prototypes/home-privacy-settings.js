$(function() {
  var currentStep = 0;

  $('.selector a').not('.next').click(function(e) {
    e.preventDefault();

    $(this).siblings().removeClass('selected');
    $(this).addClass('selected');

    if (!$(this).hasClass('next')) {
    }

    if ($(this).parent().attr('id') === "blinds_one_selector") {
      if ($(this).text() === "Yes") {
        $('#blinds_one .preview_area').css({
          'background-image': "url('/images/house.jpg')"
        });
        $('.next').fadeIn(250)
      } else if ($(this).text() === "No") {
        $('#blinds_one .preview_area').css({
          'background-image': "url('/images/house_blur.jpg')"
        });
        $('.next').fadeIn(250)
      }
    } else if ($(this).parent().attr('id') === "blinds_two_selector") {
      if ($(this).text() === "Yes") {
        $('#blinds_two .preview_area').css({
          'background-image': "url('/images/aerial.jpg')"
        });
        $('.next_save').fadeIn(250)
      } else if ($(this).text() === "No") {
        $('#blinds_two .preview_area').css({
          'background-image': "url('/images/aerial_blur.jpg')"
        });
        $('.next_save').fadeIn(250)
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

  $('#save_button').click(function(e) {
    e.preventDefault();
    $('#yes_final, #no_final, #save_button').fadeOut(250, function() {
      $('.saved_settings').fadeIn(250);
    });
  });
});
