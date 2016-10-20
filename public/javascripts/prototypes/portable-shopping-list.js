$(function() {

  $('#import_shopping').click(function(e) {
    e.preventDefault();

    $('#shopping_import').fadeOut(250, function() {
      $('#shopping_list').fadeIn(500);
    });
  });

  $('#checkout').click(function(e) {
    e.preventDefault();

    $('#shopping_list').fadeOut(250, function() {
      $('#shopping_accept').fadeIn(500);
    });
  });

});
