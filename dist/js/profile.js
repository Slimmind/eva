(function ($, window, document) {
  'use strict';
  var page = {
    init: function () {
      page.commentsHeight();
    },
    isDev: function () {
      return !$('html').hasClass('no-dev') || window.innerWidth < 1280;
    },
    commentsHeight: function () {
      var commentWrap = $('.review-text-wrap');
      var expandBtn = $('.expand-btn');
      expandBtn.on('click', function () {
        var $this = $(this);
        $this.toggleClass('active');
        var text = $this.parents('article').find('.review-text');
        var textHeight = commentWrap.innerHeight();
        var fullHeight = text.innerHeight() + 10;
        if(!commentWrap.attr('style')) {
          if(fullHeight > textHeight) {
            commentWrap.css('maxHeight', fullHeight).addClass('expanded');
          }
        } else {
          commentWrap.removeAttr('style').removeClass('expanded');
        }
      } );
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJwcm9maWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoJCwgd2luZG93LCBkb2N1bWVudCkge1xuICAndXNlIHN0cmljdCc7XG4gIHZhciBwYWdlID0ge1xuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHBhZ2UuY29tbWVudHNIZWlnaHQoKTtcbiAgICB9LFxuICAgIGlzRGV2OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gISQoJ2h0bWwnKS5oYXNDbGFzcygnbm8tZGV2JykgfHwgd2luZG93LmlubmVyV2lkdGggPCAxMjgwO1xuICAgIH0sXG4gICAgY29tbWVudHNIZWlnaHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBjb21tZW50V3JhcCA9ICQoJy5yZXZpZXctdGV4dC13cmFwJyk7XG4gICAgICB2YXIgZXhwYW5kQnRuID0gJCgnLmV4cGFuZC1idG4nKTtcbiAgICAgIGV4cGFuZEJ0bi5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICR0aGlzLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgdmFyIHRleHQgPSAkdGhpcy5wYXJlbnRzKCdhcnRpY2xlJykuZmluZCgnLnJldmlldy10ZXh0Jyk7XG4gICAgICAgIHZhciB0ZXh0SGVpZ2h0ID0gY29tbWVudFdyYXAuaW5uZXJIZWlnaHQoKTtcbiAgICAgICAgdmFyIGZ1bGxIZWlnaHQgPSB0ZXh0LmlubmVySGVpZ2h0KCkgKyAxMDtcbiAgICAgICAgaWYoIWNvbW1lbnRXcmFwLmF0dHIoJ3N0eWxlJykpIHtcbiAgICAgICAgICBpZihmdWxsSGVpZ2h0ID4gdGV4dEhlaWdodCkge1xuICAgICAgICAgICAgY29tbWVudFdyYXAuY3NzKCdtYXhIZWlnaHQnLCBmdWxsSGVpZ2h0KS5hZGRDbGFzcygnZXhwYW5kZWQnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29tbWVudFdyYXAucmVtb3ZlQXR0cignc3R5bGUnKS5yZW1vdmVDbGFzcygnZXhwYW5kZWQnKTtcbiAgICAgICAgfVxuICAgICAgfSApO1xuICAgIH0sXG4gICAgbG9hZDogZnVuY3Rpb24gKCkge1xuICAgIH0sXG4gICAgcmVzaXplOiBmdW5jdGlvbiAoKSB7XG4gICAgfSxcbiAgICBzY3JvbGw6IGZ1bmN0aW9uICgpIHtcbiAgICB9XG4gIH07XG5cbiAgJChkb2N1bWVudCkucmVhZHkocGFnZS5pbml0KTtcbiAgJCh3aW5kb3cpLm9uKHtcbiAgICAnbG9hZCc6IHBhZ2UubG9hZCxcbiAgICAncmVzaXplJzogcGFnZS5yZXNpemUsXG4gICAgJ3Njcm9sbCc6IHBhZ2Uuc2Nyb2xsXG4gIH0pO1xuXG4gIHdpbmRvdy5pc0RldmljZSA9IHBhZ2UuaXNEZXY7XG5cbn0pKGpRdWVyeSwgd2luZG93LCBkb2N1bWVudCk7Il0sImZpbGUiOiJwcm9maWxlLmpzIn0=
