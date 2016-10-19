$(function() {

  $('#import_shopping').click(function(e) {
    e.preventDefault();

    $('#shopping_import').fadeOut(250, function() {
      $('#shopping_list').fadeIn(500);
    });
  });

});
