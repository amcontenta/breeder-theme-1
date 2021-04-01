$(document).ready(function () {
  console.log('doc has loaded');
  $(".js-hamburger-menu").on("click", function () {
    $(".js-mobile-nav-overlay").addClass("show");
    $("body").addClass("overflow-hidden");
  });

  $(".js-overlay-close-button").on("click", function () {
    $(".js-mobile-nav-overlay").removeClass("show");
    $("body").removeClass("overflow-hidden");
  });
});
