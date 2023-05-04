document,addEventListener("DOMContentLoaded", function() {
  const homeCarousel = document.getElementById('carousel-fade')
  homeCarousel.addEventListener('slid.bs.carousel', event => {
    var id = event.relatedTarget.id;
    if (id === "news") {
      if (document.querySelector('.news-media-carousel').classList.contains('display-none')) {
        document.querySelector('.news-media-carousel').classList.remove('display-none');
        document.querySelector('#news').querySelector('.text-slider').carousel(0);
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
    else if (id === "esg") {
      if (document.querySelector('.sus-media-carousel').classList.contains('display-none')) {
        document.querySelector('.sus-media-carousel').classList.remove('display-none');
        document.querySelector('#esg').querySelector('.text-slider').carousel(0);
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

    } else if (id === "tech") {
      if (document.querySelector('.tech-media-carousel').classList.contains('display-none')) {
        document.querySelector('.tech-media-carousel').classList.remove('display-none');
        document.querySelector('#tech').querySelector('.text-slider').carousel(0);
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

    } else if (id === "cust-service") {
      if (document.querySelector('.cust-media-carousel').classList.contains('display-none')) {
        document.querySelector('.cust-media-carousel').classList.remove('display-none');
        document.querySelector('#cust-service').querySelector('.text-slider').carousel(0);
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

    } 
  });
});

