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
        $(this).parents('.controls').siblings('.comment-form').slideToggle();
      } );
    },
    commentsHeight: function () {
      var commentWrap = $('.reviews .text');
      var comment = commentWrap.find('.comment');
      var expandBtn = $('.expand-btn');
      expandBtn.on('click', function () {
        var $this = $(this);
        $this.toggleClass('active');
        var text = $this.parents('.controls').siblings('.text');
        var textHeight = text.innerHeight();
        var fullHeight = text.find('.comment').innerHeight();
        if(!text.attr('style')) {
          if(fullHeight > textHeight) {
            text.css('maxHeight', fullHeight).addClass('expanded');
          }
        } else {
          text.removeAttr('style').removeClass('expanded');
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