(function ($, window, document) {
  'use strict';
  var page = {
    init: function () {
      page.comments();
    },
    isDev: function () {
      return !$('html').hasClass('no-dev') || window.innerWidth < 1280;
    },
    comments: function () {
      $('.add-comment').on('click', function () {
        $('.comment-form').slideToggle();
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