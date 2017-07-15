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
        menuBtn.toggleClass('active');
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJnbG9iYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogLy89IGluY2x1ZGVzL3BsdWdpbl9uYW1lLmpzICovXG5cbihmdW5jdGlvbiAoJCwgd2luZG93LCBkb2N1bWVudCkge1xuICAndXNlIHN0cmljdCc7XG4gIHZhciBwYWdlID0ge1xuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHBhZ2Uubm9EZXYoKTtcbiAgICAgIHBhZ2UubmF2aWdhdGlvbigpO1xuICAgICAgcGFnZS5mb290ZXJEcm9wRG93bigpO1xuICAgIH0sXG4gICAgbm9EZXY6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICgodHlwZW9mIHdpbmRvdy5vcmllbnRhdGlvbiAhPT0gXCJ1bmRlZmluZWRcIikgfHwgKG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignSUVNb2JpbGUnKSAhPT0gLTEpKSB7XG4gICAgICAgICQoJy5uby1kZXYnKS5yZW1vdmVDbGFzcygnbm8tZGV2Jyk7XG4gICAgICB9XG4gICAgfSxcbiAgICBpc0RldjogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuICEkKCdodG1sJykuaGFzQ2xhc3MoJ25vLWRldicpIHx8IHdpbmRvdy5pbm5lcldpZHRoIDwgMTI4MDtcbiAgICB9LFxuICAgIG5hdmlnYXRpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBtZW51QnRuID0gJCgnLm1lbnUtYnRuJyk7XG4gICAgICB2YXIgd3JhcCA9ICQoJ2h0bWwnKTtcbiAgICAgIHZhciBuYXYgPSAkKCcubWFpbi1uYXYnKTtcbiAgICAgIG1lbnVCdG4ub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICB3cmFwLnRvZ2dsZUNsYXNzKCduby1zY3JvbGwnKTtcbiAgICAgICAgbmF2LnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgIG1lbnVCdG4udG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgfSApO1xuICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmICgkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgnaW5wdXQnKS5sZW5ndGggfHxcbiAgICAgICAgICAkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgnbGFiZWwnKS5sZW5ndGggfHxcbiAgICAgICAgICAkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgnLm1lbnUtYnRuJykubGVuZ3RoIHx8XG4gICAgICAgICAgJChldmVudC50YXJnZXQpLmNsb3Nlc3QoJ3NlbGVjdCcpLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB3cmFwLnJlbW92ZUNsYXNzKCduby1zY3JvbGwnKTtcbiAgICAgICAgbmF2LnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGZvb3RlckRyb3BEb3duOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZHJvcEJ0biA9ICQoJy5uYXYtaXRlbSBoMycpO1xuICAgICAgdmFyIGZvb3Rlck1lbnUgPSAkKCcubmF2LWl0ZW0gdWwnKTtcbiAgICAgIGRyb3BCdG4ub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAkdGhpcy50b2dnbGVDbGFzcygnb3BlbicpLmNsb3Nlc3QoJy5uYXYtaXRlbScpLnNpYmxpbmdzKCdkaXYnKS5maW5kKCdoMycpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICR0aGlzLnNpYmxpbmdzKCd1bCcpLnNsaWRlVG9nZ2xlKCkuY2xvc2VzdCgnLm5hdi1pdGVtJykuc2libGluZ3MoJ2RpdicpLmZpbmQoJ3VsJykuc2xpZGVVcCgpO1xuICAgICAgfSApO1xuICAgIH0sXG4gICAgYW5pbWF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgaWYoIXBhZ2UuaXNEZXYoKSkge1xuICAgICAgICAkKCcuYW5pbWF0ZWQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAkKHRoaXMpLmF0dHIoJ2RhdGEtcG9zaXRpb24nLCAkKHRoaXMpLm9mZnNldCgpLnRvcCk7XG4gICAgICAgIH0gKTtcbiAgICAgICAgJCh3aW5kb3cpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIHNjcm9sbGVkID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgICAgICAgIHZhciBhZGRIZWlnaHQgPSBwYXJzZUludCh3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjkpO1xuICAgICAgICAgICQoXCIuYW5pbWF0ZWRcIikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAgICAgaWYoJHRoaXMuZGF0YSgncG9zaXRpb24nKTwoc2Nyb2xsZWQgKyBhZGRIZWlnaHQpKSB7XG4gICAgICAgICAgICAgICR0aGlzLmFkZENsYXNzKCdhbmltYXRpb24nKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICR0aGlzLnJlbW92ZUNsYXNzKCdhbmltYXRpb24nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9ICk7XG4gICAgICAgIH0gKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHBhZ2UuYW5pbWF0ZSgpO1xuICAgIH0sXG4gICAgcmVzaXplOiBmdW5jdGlvbiAoKSB7XG4gICAgfSxcbiAgICBzY3JvbGw6IGZ1bmN0aW9uICgpIHtcbiAgICB9XG4gIH07XG5cbiAgJChkb2N1bWVudCkucmVhZHkocGFnZS5pbml0KTtcbiAgJCh3aW5kb3cpLm9uKHtcbiAgICAnbG9hZCc6IHBhZ2UubG9hZCxcbiAgICAncmVzaXplJzogcGFnZS5yZXNpemUsXG4gICAgJ3Njcm9sbCc6IHBhZ2Uuc2Nyb2xsXG4gIH0pO1xuICBcbiAgd2luZG93LmlzRGV2aWNlID0gcGFnZS5pc0RldjtcblxufSkoalF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50KTtcbiJdLCJmaWxlIjoiZ2xvYmFsLmpzIn0=
