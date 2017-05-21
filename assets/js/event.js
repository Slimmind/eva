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
        console.log('textHeight = ' + textHeight + ' fullTextHeight = ' + fullHeight);
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