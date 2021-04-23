$(document).ready(function () {
  $('.js-hamburger').on('click', function () {
    if ($(this).hasClass('is-active')) {
      $('.js-mobile-nav-overlay').removeClass('visible');
      $('body').removeClass('overflow-hidden');
    }
    else {
      $('.js-mobile-nav-overlay').addClass('visible');
      $('body').addClass('overflow-hidden');
    }
  });

  $('.js-hamburger').on('click', function () {
    $(this).toggleClass('is-active');
  });

  // $('.page-wrapper > div:not(.desktop-nav-wrapper):not(.mobile-nav-wrapper):not(.mobile-nav-overlay)').addClass('visible');

  // $('a').on('click', (evt) => {
  //   const href = evt.target.href;
  //   evt.preventDefault();
  //   $('.page-wrapper > div:not(.desktop-nav-wrapper):not(.mobile-nav-wrapper):not(.mobile-nav-overlay)').removeClass('visible');
  //   setTimeout(() => {
  //     window.location.href = href;
  //   }, 200);
  // })

  ScrollReveal().reveal('.fade-in, h1', {
    duration: 1500,
  });
  
  ScrollReveal().reveal('.fade-up', {
    distance: '50px',
    duration: 1500,
  });
  
  ScrollReveal().reveal('.fade-up-in', {
    distance: '30px',
    duration: 1500,
  });
  
});

