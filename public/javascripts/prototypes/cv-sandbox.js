$(function() {
  let cvToCheck;
  let cvCheckTimer;

  $('.cv_thumbnail').not('.cv_thumbnail a').click(function(e) {
    e.preventDefault();

    $(this).parent().children().attr('class', 'cv_thumbnail');
    $(this).addClass('selected');
    $(this).siblings().not('.selected').addClass('unselected');

    $('#cv_check_button').removeClass('off');

    cvToCheck = $(this).attr('data-cv-id');
  });

  $('#cv_check_button').click(function(e) {
    let t = $(this);

    e.preventDefault();

    clearInterval(cvCheckTimer);

    t.text("Checking...");

    cvCheckTimer = setTimeout(function() {
      t.text("Check");

      switch (cvToCheck) {
        case "1":
          $('#cv_results p').eq(0).attr('class', 'result true');
          $('#cv_results p').eq(1).attr('class', 'result false');
          $('#cv_results p').eq(2).attr('class', 'result false');
          $('#cv_results p').eq(3).attr('class', 'result false');
          break;
        case "2":
          $('#cv_results p').eq(0).attr('class', 'result true');
          $('#cv_results p').eq(1).attr('class', 'result true');
          $('#cv_results p').eq(2).attr('class', 'result false');
          $('#cv_results p').eq(3).attr('class', 'result false');
          break;
        case "3":
          $('#cv_results p').eq(0).attr('class', 'result true');
          $('#cv_results p').eq(1).attr('class', 'result true');
          $('#cv_results p').eq(2).attr('class', 'result true');
          $('#cv_results p').eq(3).attr('class', 'result true');
          break;
      }
    }, 1000);
  });

  $('.cv_thumbnail a').click(function(e) {
    e.preventDefault();
    e.stopPropagation();


    $('.cv_modal').fadeIn(250).css({
      'display': 'flex'
    });

    $('.cv_single').hide();
    $('#cv_' + $(this).attr('data-cv-id')).fadeIn(250);
  });

  $('#close_cv').click(function(e) {
    e.preventDefault();

    $('.cv_modal').fadeOut(250);
  });
});
