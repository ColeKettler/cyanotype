'use strict';

(function (document, $) {
  $(function () {
    // Fix for IOS :active
    document.addEventListener('touchstart', function () {});

    // Nav activation
    $('.nav-button, .nav-cover').on('click', function (ev) {
      ev.preventDefault();
      $('body').toggleClass('nav-opened');
    });
  });
}(document, jQuery));