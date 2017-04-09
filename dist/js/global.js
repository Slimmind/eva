/* //= includes/plugin_name.js */

(function ($, window, document) {
  'use strict';
  var page = {
    init: function () {
      page.noDev();
      page.navigation();
      page.footerDropDown();
    },
    noDev: function () {
      if ((typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1)) {
        $('.no-dev').removeClass('no-dev');
      }
    },
    isDev: function () {
      return !$('html').hasClass('no-dev') || window.innerWidth < 1280;
    },
    navigation: function () {
      var menuBtn = $('.menu-btn');
      var wrap = $('html');
      var nav = $('.main-nav');
      menuBtn.on('click', function () {
        wrap.toggleClass('no-scroll');
        nav.toggleClass('open');
      } );
      var closeBtn = $('.main-nav .main-menu');
      closeBtn.on('click', function () {

      } );
      $(document).on('click', function (event) {
        if ($(event.target).closest('input').length ||
          $(event.target).closest('label').length ||
          $(event.target).closest('.menu-btn').length ||
          $(event.target).closest('select').length) return;
        wrap.removeClass('no-scroll');
        nav.removeClass('open');
      });
    },
    footerDropDown: function () {
      var dropBtn = $('.nav-item h3');
      var footerMenu = $('.nav-item ul');
      dropBtn.on('click', function () {
        var $this = $(this);
        $this.toggleClass('open').closest('.nav-item').siblings('div').find('h3').removeClass('open');
        $this.siblings('ul').slideToggle().closest('.nav-item').siblings('div').find('ul').slideUp();
      } );
    },
    animate: function () {
      if(!page.isDev()) {
        $('.animated').each(function () {
          $(this).attr('data-position', $(this).offset().top);
        } );
        $(window).on('scroll', function () {
          var scrolled = $(window).scrollTop();
          var addHeight = parseInt(window.innerHeight / 2);
          $(".animated").each(function () {
            var $this = $(this);
            if($this.data('position')<(scrolled + addHeight)) {
              $this.addClass('animation');
            } else {
              $this.removeClass('animation');
            }
          } );
        } );
      }
    },
    load: function () {
      page.animate();
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