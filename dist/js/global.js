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
          $(event.target).closest('select').length) {
          return;
        }
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
          var addHeight = parseInt(window.innerHeight * 0.9);
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJnbG9iYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogLy89IGluY2x1ZGVzL3BsdWdpbl9uYW1lLmpzICovXG5cbihmdW5jdGlvbiAoJCwgd2luZG93LCBkb2N1bWVudCkge1xuICAndXNlIHN0cmljdCc7XG4gIHZhciBwYWdlID0ge1xuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHBhZ2Uubm9EZXYoKTtcbiAgICAgIHBhZ2UubmF2aWdhdGlvbigpO1xuICAgICAgcGFnZS5mb290ZXJEcm9wRG93bigpO1xuICAgIH0sXG4gICAgbm9EZXY6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICgodHlwZW9mIHdpbmRvdy5vcmllbnRhdGlvbiAhPT0gXCJ1bmRlZmluZWRcIikgfHwgKG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignSUVNb2JpbGUnKSAhPT0gLTEpKSB7XG4gICAgICAgICQoJy5uby1kZXYnKS5yZW1vdmVDbGFzcygnbm8tZGV2Jyk7XG4gICAgICB9XG4gICAgfSxcbiAgICBpc0RldjogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuICEkKCdodG1sJykuaGFzQ2xhc3MoJ25vLWRldicpIHx8IHdpbmRvdy5pbm5lcldpZHRoIDwgMTI4MDtcbiAgICB9LFxuICAgIG5hdmlnYXRpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBtZW51QnRuID0gJCgnLm1lbnUtYnRuJyk7XG4gICAgICB2YXIgd3JhcCA9ICQoJ2h0bWwnKTtcbiAgICAgIHZhciBuYXYgPSAkKCcubWFpbi1uYXYnKTtcbiAgICAgIG1lbnVCdG4ub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICB3cmFwLnRvZ2dsZUNsYXNzKCduby1zY3JvbGwnKTtcbiAgICAgICAgbmF2LnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG4gICAgICB9ICk7XG4gICAgICB2YXIgY2xvc2VCdG4gPSAkKCcubWFpbi1uYXYgLm1haW4tbWVudScpO1xuICAgICAgY2xvc2VCdG4ub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXG4gICAgICB9ICk7XG4gICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKCQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KCdpbnB1dCcpLmxlbmd0aCB8fFxuICAgICAgICAgICQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KCdsYWJlbCcpLmxlbmd0aCB8fFxuICAgICAgICAgICQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KCcubWVudS1idG4nKS5sZW5ndGggfHxcbiAgICAgICAgICAkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgnc2VsZWN0JykubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHdyYXAucmVtb3ZlQ2xhc3MoJ25vLXNjcm9sbCcpO1xuICAgICAgICBuYXYucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZm9vdGVyRHJvcERvd246IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBkcm9wQnRuID0gJCgnLm5hdi1pdGVtIGgzJyk7XG4gICAgICB2YXIgZm9vdGVyTWVudSA9ICQoJy5uYXYtaXRlbSB1bCcpO1xuICAgICAgZHJvcEJ0bi5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICR0aGlzLnRvZ2dsZUNsYXNzKCdvcGVuJykuY2xvc2VzdCgnLm5hdi1pdGVtJykuc2libGluZ3MoJ2RpdicpLmZpbmQoJ2gzJykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgJHRoaXMuc2libGluZ3MoJ3VsJykuc2xpZGVUb2dnbGUoKS5jbG9zZXN0KCcubmF2LWl0ZW0nKS5zaWJsaW5ncygnZGl2JykuZmluZCgndWwnKS5zbGlkZVVwKCk7XG4gICAgICB9ICk7XG4gICAgfSxcbiAgICBhbmltYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZighcGFnZS5pc0RldigpKSB7XG4gICAgICAgICQoJy5hbmltYXRlZCcpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICQodGhpcykuYXR0cignZGF0YS1wb3NpdGlvbicsICQodGhpcykub2Zmc2V0KCkudG9wKTtcbiAgICAgICAgfSApO1xuICAgICAgICAkKHdpbmRvdykub24oJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgc2Nyb2xsZWQgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgICAgICAgdmFyIGFkZEhlaWdodCA9IHBhcnNlSW50KHdpbmRvdy5pbm5lckhlaWdodCAqIDAuOSk7XG4gICAgICAgICAgJChcIi5hbmltYXRlZFwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICAgICBpZigkdGhpcy5kYXRhKCdwb3NpdGlvbicpPChzY3JvbGxlZCArIGFkZEhlaWdodCkpIHtcbiAgICAgICAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ2FuaW1hdGlvbicpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgJHRoaXMucmVtb3ZlQ2xhc3MoJ2FuaW1hdGlvbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gKTtcbiAgICAgICAgfSApO1xuICAgICAgfVxuICAgIH0sXG4gICAgbG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgcGFnZS5hbmltYXRlKCk7XG4gICAgfSxcbiAgICByZXNpemU6IGZ1bmN0aW9uICgpIHtcbiAgICB9LFxuICAgIHNjcm9sbDogZnVuY3Rpb24gKCkge1xuICAgIH1cbiAgfTtcblxuICAkKGRvY3VtZW50KS5yZWFkeShwYWdlLmluaXQpO1xuICAkKHdpbmRvdykub24oe1xuICAgICdsb2FkJzogcGFnZS5sb2FkLFxuICAgICdyZXNpemUnOiBwYWdlLnJlc2l6ZSxcbiAgICAnc2Nyb2xsJzogcGFnZS5zY3JvbGxcbiAgfSk7XG4gIFxuICB3aW5kb3cuaXNEZXZpY2UgPSBwYWdlLmlzRGV2O1xuXG59KShqUXVlcnksIHdpbmRvdywgZG9jdW1lbnQpO1xuIl0sImZpbGUiOiJnbG9iYWwuanMifQ==
