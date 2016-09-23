$(function() {
  // Prototype menu toggle
  $('#show_prototype_menu').click(function(e) {
    e.preventDefault();

    $('.prototype_menu').show().css({
      'left': $(window).width()
    }).animate({
      'left': $(window).width() - $('.prototype_menu').outerWidth()
    }, 250);
  });

  $('#hide_prototype_menu').click(function(e) {
    e.preventDefault();

    $('.prototype_menu').animate({
      'left': $(window).width()
    }, 250, function() {
      $('.prototype_menu').hide();
    });
  });
});
