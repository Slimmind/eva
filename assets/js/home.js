//= includes/slick.js

(function ($, window, document) {
  'use strict';
  var page = {
    init: function () {
      page.topSlider();
    },
    noDev: function () {
      if ((typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1)) {
        $('.no-dev').removeClass('no-dev');
      }
    },
    isDev: function () {
      return !$('html').hasClass('no-dev') || window.innerWidth < 1280;
    },
    topSlider: function () {
      var sliderWrap = $('.top-slider');
      sliderWrap.find('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: true,
        asNavFor: '.slider-nav',
        infinite: false,
        responsive: [
          {
            breakpoint: 1280,
            settings: {
              dots: true,
              arrows: true
            }
          }
        ]
      });
      if(!page.isDEv) {
        sliderWrap.find('.slider-nav').slick({
          slidesToShow: 9,
          slidesToScroll: 1,
          asNavFor: '.slider-for',
          arrows: false,
          dots: false,
          infinite: false,
          focusOnSelect: true,
          responsive: [
            {
              breakpoint: 1600,
              settings: {
                slidesToShow: 7
              }
            }
          ]
        });
      }
    },
    load: function () {

    },
    resize: function () {
    },
    scroll: function () {
    }
  };

  $(document).ready(page.init);
  $(window).on({
    'load': page.load,
    'resize': page.resize,
    'scroll': page.scroll
  });

  window.isDevice = page.isDev;

})(jQuery, window, document);