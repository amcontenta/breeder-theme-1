$(document).ready(function () {
  $(".js-hamburger-menu").on("click", function () {
    $(".js-mobile-nav-overlay").addClass("show");
    $("body").addClass("overflow-hidden");
  });

  $(".js-overlay-close-button").on("click", function () {
    $(".js-mobile-nav-overlay").removeClass("show");
    $("body").removeClass("overflow-hidden");
  });
});

ScrollReveal().reveal('.fade-in, h1', {
  duration: 1500,
});

ScrollReveal().reveal('.fade-up', {
  distance: '50px',
  duration: 1500,
});

ScrollReveal().reveal('.fade-up-in', {
  distance: '50px',
  duration: 1500,
});






// const ash = {
//   name: "ashley",
//   age: 32,
// };