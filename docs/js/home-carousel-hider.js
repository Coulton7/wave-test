document,addEventListener("DOMContentLoaded", function() {
  const homeCarousel = document.getElementById('carousel-fade')
  homeCarousel.addEventListener('slid.bs.carousel', event => {
    var id = event.relatedTarget.id;
    if (id === "news") {
      document.querySelector('#news').querySelector('.text-slider').carousel(0);
    }
    else if (id === "esg") {
      document.querySelector('#esg').querySelector('.text-slider').carousel(0);
    } else if (id === "tech") {
      document.querySelector('#tech').querySelector('.text-slider').carousel(0);

    } else if (id === "cust-service") {
      document.querySelector('#cust-service').querySelector('.text-slider').carousel(0);
    } 
  });
});

