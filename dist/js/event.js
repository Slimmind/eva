(function ($, window, document) {
  'use strict';
  var page = {
    init: function () {
      page.addComments();
      page.commentsHeight();
    },
    isDev: function () {
      return !$('html').hasClass('no-dev') || window.innerWidth < 1280;
    },
    addComments: function () {
      $('.add-comment').on('click', function () {
        $(this).toggleClass('active').parents('.controls').siblings('.comment-form').slideToggle();
      } );
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJldmVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCQsIHdpbmRvdywgZG9jdW1lbnQpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICB2YXIgcGFnZSA9IHtcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICBwYWdlLmFkZENvbW1lbnRzKCk7XG4gICAgICBwYWdlLmNvbW1lbnRzSGVpZ2h0KCk7XG4gICAgfSxcbiAgICBpc0RldjogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuICEkKCdodG1sJykuaGFzQ2xhc3MoJ25vLWRldicpIHx8IHdpbmRvdy5pbm5lcldpZHRoIDwgMTI4MDtcbiAgICB9LFxuICAgIGFkZENvbW1lbnRzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAkKCcuYWRkLWNvbW1lbnQnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpLnBhcmVudHMoJy5jb250cm9scycpLnNpYmxpbmdzKCcuY29tbWVudC1mb3JtJykuc2xpZGVUb2dnbGUoKTtcbiAgICAgIH0gKTtcbiAgICB9LFxuICAgIGNvbW1lbnRzSGVpZ2h0OiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgY29tbWVudFdyYXAgPSAkKCcucmV2aWV3LXRleHQtd3JhcCcpO1xuICAgICAgdmFyIGV4cGFuZEJ0biA9ICQoJy5leHBhbmQtYnRuJyk7XG4gICAgICBleHBhbmRCdG4ub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAkdGhpcy50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIHZhciB0ZXh0ID0gJHRoaXMucGFyZW50cygnYXJ0aWNsZScpLmZpbmQoJy5yZXZpZXctdGV4dCcpO1xuICAgICAgICB2YXIgdGV4dEhlaWdodCA9IGNvbW1lbnRXcmFwLmlubmVySGVpZ2h0KCk7XG4gICAgICAgIHZhciBmdWxsSGVpZ2h0ID0gdGV4dC5pbm5lckhlaWdodCgpICsgMTA7XG4gICAgICAgIGlmKCFjb21tZW50V3JhcC5hdHRyKCdzdHlsZScpKSB7XG4gICAgICAgICAgaWYoZnVsbEhlaWdodCA+IHRleHRIZWlnaHQpIHtcbiAgICAgICAgICAgIGNvbW1lbnRXcmFwLmNzcygnbWF4SGVpZ2h0JywgZnVsbEhlaWdodCkuYWRkQ2xhc3MoJ2V4cGFuZGVkJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbW1lbnRXcmFwLnJlbW92ZUF0dHIoJ3N0eWxlJykucmVtb3ZlQ2xhc3MoJ2V4cGFuZGVkJyk7XG4gICAgICAgIH1cbiAgICAgIH0gKTtcbiAgICB9LFxuICAgIGxvYWQ6IGZ1bmN0aW9uICgpIHtcblxuICAgIH0sXG4gICAgcmVzaXplOiBmdW5jdGlvbiAoKSB7XG4gICAgfSxcbiAgICBzY3JvbGw6IGZ1bmN0aW9uICgpIHtcbiAgICB9XG4gIH07XG5cbiAgJChkb2N1bWVudCkucmVhZHkocGFnZS5pbml0KTtcbiAgJCh3aW5kb3cpLm9uKHtcbiAgICAnbG9hZCc6IHBhZ2UubG9hZCxcbiAgICAncmVzaXplJzogcGFnZS5yZXNpemUsXG4gICAgJ3Njcm9sbCc6IHBhZ2Uuc2Nyb2xsXG4gIH0pO1xuXG4gIHdpbmRvdy5pc0RldmljZSA9IHBhZ2UuaXNEZXY7XG5cbn0pKGpRdWVyeSwgd2luZG93LCBkb2N1bWVudCk7Il0sImZpbGUiOiJldmVudC5qcyJ9
