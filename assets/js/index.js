'use strict';

(function (window, document, $, hljs) {
  $(function () {
    // Fix for IOS :active
    document.addEventListener('touchstart', function () {});

    // Nav activation
    $('.nav-button, .nav-cover').on('click', function (ev) {
      ev.preventDefault();
      $('body').toggleClass('nav-opened');
    });

    // Social links
    var $navSocial = $('.nav-social');
    $.each(window.cyanotype.social, function(name, url) {
      var $li = $('<li class="nav-' + name + '" role="presentation"></li>');
      var $a = $('<a href="' + url + '" class="icon-' + name + ' button"></a>');
      var $navItem = $li.append($a);
      $navSocial.append($navItem);
    });

    // Code highlighting
    hljs.initHighlightingOnLoad();
  });
}(window, document, window.jQuery, window.hljs));
