(function($) {
  $(document).ready(function() {
    $('#carousel-fade').on('slid.bs.carousel', function() {
      var carouselData = $(this).data('bs.carousel');
      var currentIndex = carouselData.getItemIndex(carouselData.$element.find('.item.active'));
      var total = carouselData.$items.length;
      var slide = (currentIndex + 1);
      if (slide === 1) {
        if ($('.news-media-carousel').hasClass('display-none')) {
          $('.news-media-carousel').removeClass('display-none');
          $('#news').find('.transparent-background').addClass('flexslider');
        }

        if (!$('.sus-media-carousel').hasClass('display-none')) {
          $('.sus-media-carousel').addClass('display-none');
          $('#esg').find('.transparent-background').removeClass('flexslider');
        }

        if (!$('.tech-media-carousel').hasClass('display-none')) {
          $('.tech-media-carousel').addClass('display-none');
          $('#tech').find('.transparent-background').removeClass('flexslider');
        }

        if (!$('.cust-media-carousel').hasClass('display-none')) {
          $('.cust-media-carousel').addClass('display-none');
          $('#cust-serivce').find('.transparent-background').removeClass('flexslider');
        }

        if (!$('.prod-media-carousel').hasClass('display-none')) {
          $('.prod-media-carousel').addClass('display-none');
          $('#prod').find('.transparent-background').removeClass('flexslider');
        }

      }
      else if (slide === 2) {
        if ($('.sus-media-carousel').hasClass('display-none')) {
          $('.sus-media-carousel').removeClass('display-none');
          $('#esg').find('.transparent-background').addClass('flexslider');
        }

        if (!$('.news-media-carousel').hasClass('display-none')) {
          $('.news-media-carousel').addClass('display-none');
          $('#news').find('.transparent-background').removeClass('flexslider');
        }

        if (!$('.tech-media-carousel').hasClass('display-none')) {
          $('.tech-media-carousel').addClass('display-none');
          $('#tech').find('.transparent-background').removeClass('flexslider');
        }

        if (!$('.cust-media-carousel').hasClass('display-none')) {
          $('.cust-media-carousel').addClass('display-none');
          $('#cust-serivce').find('.transparent-background').removeClass('flexslider');
        }

        if (!$('.prod-media-carousel').hasClass('display-none')) {
          $('.prod-media-carousel').addClass('display-none');
          $('#prod').find('.transparent-background').removeClass('flexslider');
        }

      } else if (slide === 3) {
        if ($('.tech-media-carousel').hasClass('display-none')) {
          $('.tech-media-carousel').removeClass('display-none');
          $('#tech').find('.transparent-background').addClass('flexslider');
        }

        if (!$('.news-media-carousel').hasClass('display-none')) {
          $('.news-media-carousel').addClass('display-none');
          $('#news').find('.transparent-background').removeClass('flexslider');
        }

        if (!$('.sus-media-carousel').hasClass('display-none')) {
          $('.sus-media-carousel').addClass('display-none');
          $('#esg').find('.transparent-background').removeClass('flexslider');
        }

        if (!$('.cust-media-carousel').hasClass('display-none')) {
          $('.cust-media-carousel').addClass('display-none');
          $('#cust-service').find('.transparent-background').removeClass('flexslider');
        }

        if (!$('.prod-media-carousel').hasClass('display-none')) {
          $('.prod-media-carousel').addClass('display-none');
          $('#prod').find('.transparent-background').removeClass('flexslider');
        }

      } else if (slide === 4) {
        if ($('.cust-media-carousel').hasClass('display-none')) {
          $('.cust-media-carousel').removeClass('display-none');
          $('#cust-service').find('.transparent-background').addClass('flexslider');
        }

        if (!$('.news-media-carousel').hasClass('display-none')) {
          $('.news-media-carousel').addClass('display-none');
          $('#news').find('.transparent-background').removeClass('flexslider');
        }

        if (!$('.sus-media-carousel').hasClass('display-none')) {
          $('.sus-media-carousel').addClass('display-none');
          $('#esg').find('.transparent-background').removeClass('flexslider');
        }

        if (!$('.tech-media-carousel').hasClass('display-none')) {
          $('.tech-media-carousel').addClass('display-none');
          $('#tech').find('.transparent-background').removeClass('flexslider');
        }

        if (!$('.prod-media-carousel').hasClass('display-none')) {
          $('.prod-media-carousel').addClass('display-none');
          $('#prod').find('.transparent-background').removeClass('flexslider');
        }

      } else if (slide === 5) {
        if ($('.prod-media-carousel').hasClass('display-none')) {
          $('.prod-media-carousel').removeClass('display-none');
          $('#prod').find('.transparent-background').addClass('flexslider');
        }

        if (!$('.news-media-carousel').hasClass('display-none')) {
          $('.news-media-carousel').addClass('display-none');
          $('#news').find('.transparent-background').removeClass('flexslider');
        }

        if (!$('.sus-media-carousel').hasClass('display-none')) {
          $('.sus-media-carousel').addClass('display-none');
          $('#esg').find('.transparent-background').removeClass('flexslider');
        }

        if (!$('.tech-media-carousel').hasClass('display-none')) {
          $('.tech-media-carousel').addClass('display-none');
          $('#tech').find('.transparent-background').removeClass('flexslider');
        }

        if (!$('.cust-media-carousel').hasClass('display-none')) {
          $('.cust-media-carousel').addClass('display-none');
          $('#cust-serivce').find('.transparent-background').removeClass('flexslider');
        }

      }
    });
  });
})(jQuery);
