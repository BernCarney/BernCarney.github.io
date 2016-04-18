$(document).ready(function () {
  
  // slide menu open 
  $(".menuButton").click(function (event) {
    if ($(window).width() < 500 ) {
      event.preventDefault();
      $("nav ul").toggleClass("toggleMenu");
      $(".menuButton").toggleClass("hideButton");
    }
  });

  // slide menu closed & follow link
  $(".navLink").click(function () {
    if ($(window).width() < 500 ) {
      $("nav ul").toggleClass("toggleMenu");
      $(".menuButton").toggleClass("hideButton");
    }
  });
  
  // clean up on window resize
  $(window).resize(function() {
    $("nav ul").removeClass("toggleMenu");
    
    if ($(window).width() < 500 ) {
      $(".menuButton").removeClass("hideButton");
    }
  });
});