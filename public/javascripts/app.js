$(function() {
  let isContentsVisible = false;

  $('#show_contents').click(function(e) {
    e.preventDefault();

    if (!isContentsVisible) {
      $('#contents').show();
      $('#show_contents a').text("Hide contents");
      isContentsVisible = true;
    } else {
      $('#contents').hide();
      $('#show_contents a').text("Show contents");
      isContentsVisible = false;
    }
  });
});
