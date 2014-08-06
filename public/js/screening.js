/* NBC Universal DSR Screening Room JS */
$(document).ready(function() {

  // Toggle Video Collections
  $('.video-list-wrap-title').on('click', function(e) {
    if($(this).parent().hasClass('video-list-wrap-active')) {
      $('.video-list-wrap').removeClass('video-list-wrap-active');
    } else {
      $('.video-list-wrap').removeClass('video-list-wrap-active');
      $(this).parent().addClass('video-list-wrap-active');
    }
  });

});