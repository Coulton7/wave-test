(function($) {
  $(document).ready(function() {
    $('#carousel-fade').on('slid.bs.carousel', function() {
      var carouselData = $(this).data('bs.carousel');
      var currentIndex = carouselData.getItemIndex(carouselData.$element.find('.item.active'));
      var total = carouselData.$items.length;
      var slide = (currentIndex + 1);
      if (slide === 1) {
        if ($('.sus-media-carousel').hasClass('display-none')) {
          $('.sus-media-carousel').removeClass('display-none');
          if ($(window).width() < 767) {
            $('.sus-media-carousel').find('#sus-main').addClass('active');
          }
          if($('.mob-slide').hasClass('item'||'item active')){
            $(this).removeClass('item');
            $(this).removeClass('active');
          }
        }
        if (!$('.tech-media-carousel').hasClass('display-none')) {
          $('.tech-media-carousel').addClass('display-none');
          if ($(window).width() < 767) {
            $('.tech-media-carousel').find('.media-tab').removeClass('active');
          }
        }
        if (!$('.cust-media-carousel').hasClass('display-none')) {
          $('.cust-media-carousel').addClass('display-none');
          if ($(window).width() < 767) {
            $('.cust-media-carousel').find('.media-tab').removeClass('active');
          }
        }
        if (!$('.prod-media-carousel').hasClass('display-none')) {
          $('.prod-media-carousel').addClass('display-none');
          if ($(window).width() < 767) {
            $('.prod-media-carousel').find('.media-tab').removeClass('active');
          }
        }
      } else if (slide === 2) {
        if ($('.tech-media-carousel').hasClass('display-none')) {
          $('.tech-media-carousel').removeClass('display-none');
          if ($(window).width() < 767) {
            $('.tech-media-carousel').find('#tech-main').addClass('active');
          }
          if($('.mob-slide').hasClass('item'||'item active')){
            $(this).removeClass('item');
            $(this).removeClass('active');
          }
        }
        if (!$('.sus-media-carousel').hasClass('display-none')) {
          $('.sus-media-carousel').addClass('display-none');
          if ($(window).width() < 767) {
            $('.sus-media-carousel').find('.media-tab').removeClass('active');
          }
        }
        if (!$('.cust-media-carousel').hasClass('display-none')) {
          $('.cust-media-carousel').addClass('display-none');
          if ($(window).width() < 767) {
            $('.cust-media-carousel').find('.media-tab').removeClass('active');
          }
        }
        if (!$('.prod-media-carousel').hasClass('display-none')) {
          $('.prod-media-carousel').addClass('display-none');
          if ($(window).width() < 767) {
            $('.prod-media-carousel').find('.media-tab').removeClass('active');
          }
        }
      } else if (slide === 3) {
        if ($('.cust-media-carousel').hasClass('display-none')) {
          $('.cust-media-carousel').removeClass('display-none');
          if ($(window).width() < 767) {
            $('.cust-media-carousel').find('#cust-main').addClass('active');
          }
          if($('.mob-slide').hasClass('item'||'item active')){
            $(this).removeClass('item');
            $(this).removeClass('active');
          }
        }
        if (!$('.sus-media-carousel').hasClass('display-none')) {
          $('.sus-media-carousel').addClass('display-none');
          if ($(window).width() < 767) {
            $('.sus-media-carousel').find('.media-tab').removeClass('active');
          }
        }
        if (!$('.tech-media-carousel').hasClass('display-none')) {
          $('.tech-media-carousel').addClass('display-none');
          if ($(window).width() < 767) {
            $('.tech-media-carousel').find('.media-tab').removeClass('active');
          }
        }
        if (!$('.prod-media-carousel').hasClass('display-none')) {
          $('.prod-media-carousel').addClass('display-none');
          if ($(window).width() < 767) {
            $('.prod-media-carousel').find('.media-tab').removeClass('active');
          }
        }
      } else if (slide === 4) {
        if ($('.prod-media-carousel').hasClass('display-none')) {
          $('.prod-media-carousel').removeClass('display-none');
          if ($(window).width() < 767) {
            $('.prod-media-carousel').find('#prod-main').addClass('active');
          }
          if($('.mob-slide').hasClass('item'||'item active')){
            $(this).removeClass('item');
            $(this).removeClass('active');
          }
        }
        if (!$('.sus-media-carousel').hasClass('display-none')) {
          $('.sus-media-carousel').addClass('display-none');
          if ($(window).width() < 767) {
            $('.sus-media-carousel').find('.media-tab').removeClass('active');
          }
        }
        if (!$('.tech-media-carousel').hasClass('display-none')) {
          $('.tech-media-carousel').addClass('display-none');
          if ($(window).width() < 767) {
            $('.tech-media-carousel').find('.media-tab').removeClass('active');
          }
        }
        if (!$('.cust-media-carousel').hasClass('display-none')) {
          $('.cust-media-carousel').addClass('display-none');
          if ($(window).width() < 767) {
            $('.cust-media-carousel').find('.media-tab').removeClass('active');
          }
        }
      }
    });
  });
})(jQuery);
