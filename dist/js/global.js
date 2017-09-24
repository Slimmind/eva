/* //= includes/plugin_name.js */

(function ($, window, document) {
  'use strict';
  var page = {
    init: function () {
      page.noDev();
      page.navigation();
      page.footerDropDown();
      page.popups();
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
        menuBtn.toggleClass('active');
      });
      $(document).on('click', function (event) {
        if ($(event.target).closest('input').length ||
          $(event.target).closest('label').length ||
          $(event.target).closest('.menu-btn').length ||
          $(event.target).closest('select').length ||
          $(event.target).closest('.popup-link').length ||
          $(event.target).closest('.popup').length) {
          return;
        }
        wrap.removeClass('no-scroll');
        nav.removeClass('open');
        menuBtn.removeClass('active');
      });
    },
    footerDropDown: function () {
      var dropBtn = $('.nav-item h3');
      var footerMenu = $('.nav-item ul');
      dropBtn.on('click', function () {
        var $this = $(this);
        $this.toggleClass('open').closest('.nav-item').siblings('div').find('h3').removeClass('open');
        $this.siblings('ul').slideToggle().closest('.nav-item').siblings('div').find('ul').slideUp();
      });
    },
    animate: function () {
      if (!page.isDev()) {
        $('.animated').each(function () {
          $(this).attr('data-position', $(this).offset().top);
        });
        $(window).on('scroll', function () {
          var scrolled = $(window).scrollTop();
          var addHeight = parseInt(window.innerHeight * 0.9);
          $(".animated").each(function () {
            var $this = $(this);
            if ($this.data('position') < (scrolled + addHeight)) {
              $this.addClass('animation');
            } else {
              $this.removeClass('animation');
            }
          });
        });
      }
    },
    popups: function () {
      var popup = $('.popup');
      var popupLink = $('.popup-link');
      var mainWrap = $('html');
      var popupURL = popupLink.data('url');
      popupLink.on('click', function () {
        mainWrap.addClass('no-scroll overlay');
        $(popupURL).addClass('open');
      });
      popup.on('click', function (event) {
        if ($(event.target).closest('.popup-content').length === 0 ||
          $(event.target).is('.popup-close')) {
          popup.removeClass('open');
          mainWrap.removeClass('no-scroll overlay');
        }
      });
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJnbG9iYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogLy89IGluY2x1ZGVzL3BsdWdpbl9uYW1lLmpzICovXG5cbihmdW5jdGlvbiAoJCwgd2luZG93LCBkb2N1bWVudCkge1xuICAndXNlIHN0cmljdCc7XG4gIHZhciBwYWdlID0ge1xuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHBhZ2Uubm9EZXYoKTtcbiAgICAgIHBhZ2UubmF2aWdhdGlvbigpO1xuICAgICAgcGFnZS5mb290ZXJEcm9wRG93bigpO1xuICAgICAgcGFnZS5wb3B1cHMoKTtcbiAgICB9LFxuICAgIG5vRGV2OiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoKHR5cGVvZiB3aW5kb3cub3JpZW50YXRpb24gIT09IFwidW5kZWZpbmVkXCIpIHx8IChuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0lFTW9iaWxlJykgIT09IC0xKSkge1xuICAgICAgICAkKCcubm8tZGV2JykucmVtb3ZlQ2xhc3MoJ25vLWRldicpO1xuICAgICAgfVxuICAgIH0sXG4gICAgaXNEZXY6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAhJCgnaHRtbCcpLmhhc0NsYXNzKCduby1kZXYnKSB8fCB3aW5kb3cuaW5uZXJXaWR0aCA8IDEyODA7XG4gICAgfSxcbiAgICBuYXZpZ2F0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgbWVudUJ0biA9ICQoJy5tZW51LWJ0bicpO1xuICAgICAgdmFyIHdyYXAgPSAkKCdodG1sJyk7XG4gICAgICB2YXIgbmF2ID0gJCgnLm1haW4tbmF2Jyk7XG4gICAgICBtZW51QnRuLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd3JhcC50b2dnbGVDbGFzcygnbm8tc2Nyb2xsJyk7XG4gICAgICAgIG5hdi50b2dnbGVDbGFzcygnb3BlbicpO1xuICAgICAgICBtZW51QnRuLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgIH0pO1xuICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmICgkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgnaW5wdXQnKS5sZW5ndGggfHxcbiAgICAgICAgICAkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgnbGFiZWwnKS5sZW5ndGggfHxcbiAgICAgICAgICAkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgnLm1lbnUtYnRuJykubGVuZ3RoIHx8XG4gICAgICAgICAgJChldmVudC50YXJnZXQpLmNsb3Nlc3QoJ3NlbGVjdCcpLmxlbmd0aCB8fFxuICAgICAgICAgICQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KCcucG9wdXAtbGluaycpLmxlbmd0aCB8fFxuICAgICAgICAgICQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KCcucG9wdXAnKS5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgd3JhcC5yZW1vdmVDbGFzcygnbm8tc2Nyb2xsJyk7XG4gICAgICAgIG5hdi5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICBtZW51QnRuLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZm9vdGVyRHJvcERvd246IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBkcm9wQnRuID0gJCgnLm5hdi1pdGVtIGgzJyk7XG4gICAgICB2YXIgZm9vdGVyTWVudSA9ICQoJy5uYXYtaXRlbSB1bCcpO1xuICAgICAgZHJvcEJ0bi5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICR0aGlzLnRvZ2dsZUNsYXNzKCdvcGVuJykuY2xvc2VzdCgnLm5hdi1pdGVtJykuc2libGluZ3MoJ2RpdicpLmZpbmQoJ2gzJykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgJHRoaXMuc2libGluZ3MoJ3VsJykuc2xpZGVUb2dnbGUoKS5jbG9zZXN0KCcubmF2LWl0ZW0nKS5zaWJsaW5ncygnZGl2JykuZmluZCgndWwnKS5zbGlkZVVwKCk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGFuaW1hdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghcGFnZS5pc0RldigpKSB7XG4gICAgICAgICQoJy5hbmltYXRlZCcpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICQodGhpcykuYXR0cignZGF0YS1wb3NpdGlvbicsICQodGhpcykub2Zmc2V0KCkudG9wKTtcbiAgICAgICAgfSk7XG4gICAgICAgICQod2luZG93KS5vbignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBzY3JvbGxlZCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICAgICAgICB2YXIgYWRkSGVpZ2h0ID0gcGFyc2VJbnQod2luZG93LmlubmVySGVpZ2h0ICogMC45KTtcbiAgICAgICAgICAkKFwiLmFuaW1hdGVkXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgICAgIGlmICgkdGhpcy5kYXRhKCdwb3NpdGlvbicpIDwgKHNjcm9sbGVkICsgYWRkSGVpZ2h0KSkge1xuICAgICAgICAgICAgICAkdGhpcy5hZGRDbGFzcygnYW5pbWF0aW9uJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAkdGhpcy5yZW1vdmVDbGFzcygnYW5pbWF0aW9uJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgcG9wdXBzOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcG9wdXAgPSAkKCcucG9wdXAnKTtcbiAgICAgIHZhciBwb3B1cExpbmsgPSAkKCcucG9wdXAtbGluaycpO1xuICAgICAgdmFyIG1haW5XcmFwID0gJCgnaHRtbCcpO1xuICAgICAgdmFyIHBvcHVwVVJMID0gcG9wdXBMaW5rLmRhdGEoJ3VybCcpO1xuICAgICAgcG9wdXBMaW5rLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbWFpbldyYXAuYWRkQ2xhc3MoJ25vLXNjcm9sbCBvdmVybGF5Jyk7XG4gICAgICAgICQocG9wdXBVUkwpLmFkZENsYXNzKCdvcGVuJyk7XG4gICAgICB9KTtcbiAgICAgIHBvcHVwLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoJChldmVudC50YXJnZXQpLmNsb3Nlc3QoJy5wb3B1cC1jb250ZW50JykubGVuZ3RoID09PSAwIHx8XG4gICAgICAgICAgJChldmVudC50YXJnZXQpLmlzKCcucG9wdXAtY2xvc2UnKSkge1xuICAgICAgICAgIHBvcHVwLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgbWFpbldyYXAucmVtb3ZlQ2xhc3MoJ25vLXNjcm9sbCBvdmVybGF5Jyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgbG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgcGFnZS5hbmltYXRlKCk7XG4gICAgfSxcbiAgICByZXNpemU6IGZ1bmN0aW9uICgpIHtcbiAgICB9LFxuICAgIHNjcm9sbDogZnVuY3Rpb24gKCkge1xuICAgIH1cbiAgfTtcblxuICAkKGRvY3VtZW50KS5yZWFkeShwYWdlLmluaXQpO1xuICAkKHdpbmRvdykub24oe1xuICAgICdsb2FkJzogcGFnZS5sb2FkLFxuICAgICdyZXNpemUnOiBwYWdlLnJlc2l6ZSxcbiAgICAnc2Nyb2xsJzogcGFnZS5zY3JvbGxcbiAgfSk7XG5cbiAgd2luZG93LmlzRGV2aWNlID0gcGFnZS5pc0RldjtcblxufSkoalF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50KTtcbiJdLCJmaWxlIjoiZ2xvYmFsLmpzIn0=
