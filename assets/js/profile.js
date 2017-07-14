//= includes/slick.js

(function ($, window, document) {
  'use strict';
  var page = {
    init: function () {
      page.commentsHeight();
      page.recommendsSlider();
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
    recommendsSlider: function () {
      $('.recommends-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        fade: true,
        arrows: true,
        infinite: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      });
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