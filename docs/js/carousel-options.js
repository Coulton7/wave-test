//Function to animate slider captions
function doAnimations(elems) {
  var animEndEv = 'webkitAnimationEnd animationend';

  elems.forEach(function () {
    var $this = document.querySelector(this),
      $animationType = $this.data('animation');
    $this.classList.add($animationType).one(animEndEv, function () {
      $this.classList.remove($animationType);
    });
  });
}

var $myCarousel = document.getElementById('carousel-fade');
  $firstAnimatingElems = $myCarousel
    .querySelector('.item').firstChild
    .querySelector('[data-animation ^= "animated"]');

$myCarousel.carousel();

doAnimations($firstAnimatingElems);

$myCarousel.on('slide.bs.carousel', function (e) {
  var $animatingElems = document.querySelector(e.relatedTarget).querySelector(
    '[data-animation ^= "animated"]'
  );
  doAnimations($animatingElems);
  document.querySelector('img.lazyload').lazyload();
});

var isOnDiv = false;
document.querySelectorAll('.media-carousel-block').forEach((i) => {
  i.addEventListener('mouseover', function () {
    isOnDiv = true;
  });
});

document.querySelectorAll('.media-carousel-block').forEach((i) => {
  i.addEventListener('mouseout', function () {
    isOnDiv = false;
  });
});

function carouselNormalization() {
  var items = document.querySelectorAll('#carousel-fade .item'),
    heights = [],
    tallest;

  if (items.length) {
    function normalizeHeights() {
      items.forEach(function () {
        heights.push(document.querySelector(this).getBoundingClientRect().height);
      });
      tallest = Math.max.apply(null, heights);
      items.forEach(function () {
        document.querySelector(this).css('min-height', tallest + 'px');
      });
    }
    normalizeHeights();

    window.addEventListener('resize orientationchange', function () {
      (tallest = 0), (heights.length = 0);
      items.forEach(function () {
        document.querySelector(this).css('min-height', '0');
      });
      normalizeHeights();
    });
  }
}

function horizontalNormalization() {
  var items = document.querySelectorAll('.media-carousel .item'),
    heights = [],
    tallest;

  if (items.length) {
    function horizontalHeights() {
      items.forEach(function () {
        heights.push(document.querySelector(this).getBoundingClientRect().height);
      });
      tallest = Math.max.apply(null, heights);
      items.forEach(function () {
        document.querySelector(this).css('min-height', tallest + 'px');
      });
    }
    horizontalHeights();

    window.addEventListener('resize orientationchange', function () {
      if (document.querySelector(window).getBoundingClientRect().width > 991) {
        (tallest = 0), (heights.length = 0);
        items.forEach(function () {
          document.querySelector(this).css('min-height', '0');
        });
        horizontalHeights();
      }
    });
  }
}

window.onload = function () {
  carouselNormalization();
  if (window.innerWidth() > 991) {
    horizontalNormalization();
  }
};

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('div[data-ride="carousel"]').forEach(function () {
    var $carousel = document.querySelector(this);
    var id = this.id;
    var relatedIndicators = document.querySelector('li[data-target=#' + id + ']');
    $carousel.on('slid.bs.carousel', function (e) {
      var index = $carousel
        .querySelector('.carousel-inner .item')
        .index($carousel.querySelector('.carousel-inner .active'));
      relatedIndicators.classList.remove('active');
      relatedIndicators
        .filter('[data-slide-to=' + index + ']')
        .classList.add('active');
    });
  });

  document.querySelector('.carousel .horizontal .item').forEach(function () {
    var next = document.querySelector(this).nextElementSibling;
    if (!next.length) {
      next = document.querySelector(this).siblings(':first');
    }
    next.children(':first-child').cloneNode(true).append(document.querySelector(this));
    for (var i = 1; i < 3; i++) {
      next = next.nextElementSibling;
      if (!next.length) {
        next = document.querySelector(this).siblings(':first');
      }
      next.children(':first-child').cloneNode(true).append(document.querySelector(this));
    }
    window.addEventListener('load', function () {
      if (window.innerWidth() <= 767) {
        next.children.not(':first-child').remove();
      }
    });
  });

  window.addEventListener('load resize orientationchange', function () {
    const mediaCarousel = document.querySelectorAll('.media-carousel-block');
    if (window.innerWidth() > 991) {
      for (let x = 0; x < mediaCarousel.length; x++) {
        mediaCarousel[x].addEventListener('mouseleave', function () {
          document.querySelector('.nav-help').style.display = 'none';
        });

        mediaCarousel[x].addEventListener('mouseenter', function () {
          document.querySelector('.nav-help').fadeIn(1000);
        });
      }
    }
  });
});
