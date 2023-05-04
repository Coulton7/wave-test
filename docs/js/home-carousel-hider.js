document,addEventListener("DOMContentLoaded", function() {
  const homeCarousel = document.getElementById('carousel-fade')
  homeCarousel.addEventListener('slid.bs.carousel', event => {
    var carouselData = document.querySelector(homeCarousel).data('bs.carousel');
    var currentIndex = carouselData.getItemIndex(carouselData.$element.find('.item.active'));
    var slide = (currentIndex + 1);
    if (slide === 1) {
      if (document.querySelector('.news-media-carousel').classList.contains('display-none')) {
        document.querySelector('.news-media-carousel').classList.remove('display-none');
        document.querySelector('#news').find('.text-slider').carousel(0);
      }

      if (!document.querySelector('.sus-media-carousel').classList.contains('display-none')) {
        document.querySelector('.sus-media-carousel').classList.add('display-none');
      }

      if (!document.querySelector('.tech-media-carousel').classList.contains('display-none')) {
        document.querySelector('.tech-media-carousel').classList.add('display-none');
      }

      if (!document.querySelector('.cust-media-carousel').classList.contains('display-none')) {
        document.querySelector('.cust-media-carousel').classList.add('display-none');
      }

      if (!document.querySelector('.prod-media-carousel').classList.contains('display-none')) {
        document.querySelector('.prod-media-carousel').classList.add('display-none');
      }

    }
    else if (slide === 2) {
      if (document.querySelector('.sus-media-carousel').classList.contains('display-none')) {
        document.querySelector('.sus-media-carousel').classList.remove('display-none');
        document.querySelector('#esg').find('.text-slider').carousel(0);
      }

      if (!document.querySelector('.news-media-carousel').classList.contains('display-none')) {
        document.querySelector('.news-media-carousel').classList.add('display-none');
      }

      if (!document.querySelector('.tech-media-carousel').classList.contains('display-none')) {
        document.querySelector('.tech-media-carousel').classList.add('display-none');
      }

      if (!document.querySelector('.cust-media-carousel').classList.contains('display-none')) {
        document.querySelector('.cust-media-carousel').classList.add('display-none');
      }

      if (!document.querySelector('.prod-media-carousel').classList.contains('display-none')) {
        document.querySelector('.prod-media-carousel').classList.add('display-none');
      }

    } else if (slide === 3) {
      if (document.querySelector('.tech-media-carousel').classList.contains('display-none')) {
        document.querySelector('.tech-media-carousel').classList.remove('display-none');
        document.querySelector('#tech').find('.text-slider').carousel(0);
      }

      if (!document.querySelector('.news-media-carousel').classList.contains('display-none')) {
        document.querySelector('.news-media-carousel').classList.add('display-none');
      }

      if (!document.querySelector('.sus-media-carousel').classList.contains('display-none')) {
        document.querySelector('.sus-media-carousel').classList.add('display-none');
      }

      if (!document.querySelector('.cust-media-carousel').classList.contains('display-none')) {
        document.querySelector('.cust-media-carousel').classList.add('display-none');
      }

      if (!document.querySelector('.prod-media-carousel').classList.contains('display-none')) {
        document.querySelector('.prod-media-carousel').classList.add('display-none');
      }

    } else if (slide === 4) {
      if (document.querySelector('.cust-media-carousel').classList.contains('display-none')) {
        document.querySelector('.cust-media-carousel').classList.remove('display-none');
        document.querySelector('#cust-service').find('.text-slider').carousel(0);
      }

      if (!document.querySelector('.news-media-carousel').classList.contains('display-none')) {
        document.querySelector('.news-media-carousel').classList.add('display-none');
      }

      if (!document.querySelector('.sus-media-carousel').classList.contains('display-none')) {
        document.querySelector('.sus-media-carousel').classList.add('display-none');
      }

      if (!document.querySelector('.tech-media-carousel').classList.contains('display-none')) {
        document.querySelector('.tech-media-carousel').classList.add('display-none');
      }

      if (!document.querySelector('.prod-media-carousel').classList.contains('display-none')) {
        document.querySelector('.prod-media-carousel').classList.add('display-none');
      }

    } else if (slide === 5) {
      if (document.querySelector('.prod-media-carousel').classList.contains('display-none')) {
        document.querySelector('.prod-media-carousel').classList.remove('display-none');
        document.querySelector('#prod').find('.text-slider').carousel(0);
      }

      if (!document.querySelector('.news-media-carousel').classList.contains('display-none')) {
        document.querySelector('.news-media-carousel').classList.add('display-none');
      }

      if (!document.querySelector('.sus-media-carousel').classList.contains('display-none')) {
        document.querySelector('.sus-media-carousel').classList.add('display-none');
      }

      if (!document.querySelector('.tech-media-carousel').classList.contains('display-none')) {
        document.querySelector('.tech-media-carousel').classList.add('display-none');
      }

      if (!document.querySelector('.cust-media-carousel').classList.contains('display-none')) {
        document.querySelector('.cust-media-carousel').classList.add('display-none');
      }

    }
  });
});

