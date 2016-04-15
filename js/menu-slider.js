$(document).ready(function () {
 // slide menu open 
  $(".menuButton").click(function (event) {
    event.preventDefault();
    $("nav ul").toggleClass("toggleMenu");
    $(".menuButton").toggleClass("hideButton");
  });
  
  // slide menu closed & follow link
  $(".navLink").click(function () {
    $("nav ul").toggleClass("toggleMenu");
    $(".menuButton").toggleClass("hideButton");
  });
});