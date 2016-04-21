$(document).ready(function () {
    var scroll_pos = 0;

    $(window).scroll(function () {
      scroll_pos = $(this).scrollTop();

      if (scroll_pos > 400) {
        if ($(window).width() > 500 ) { 
          $("nav ul").addClass("nav-darken");
        }
      }
      else {
        $("nav ul").removeClass("nav-darken");
      }
    });
});