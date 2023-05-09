function waveFade() {
  var self = this;
  var windowHeight = window.innerHeight;
  var windowScrollTop = document.documentElement.scrollTop;
  var textLogo = document.querySelector(".textlogo");
  var waveFadeFunction = function() {
    return self.each(function() {
      if (windowScrollTop <= windowHeight) {
        var scrollPercent = windowScrollTop / windowHeight;
        textLogo.style.opacity = -1.03 + scrollPercent * 4
      }
    });
  };

    window.addEventListener('scroll', function() {
      waveFadeFunction();
    });

    waveFadeFunction();
    return self;
  };

window.addEventListener("resize", function(e) {

  document.addEventListener("DOMContentLoaded", function() {
    if (window.matchMedia() > 992) {
      waveFade();
    } else {
      textLogo.style.opacity = 1;
      }
    });

    document.addEventListener("DOMContentLoaded", function() {

      if (window.matchMedia() < 992) {
        document.querySelector('.navbar-nav>li>a').classList.add('normText');
        document.querySelector('.social-media').classList.add('display-none');
        waveFade();
      };

      window.addEventListener('scroll', function() {
        var s = document.documentElement.scrollTop(),
        d = document.innerHheight(),
        c = window.innerHeight();

        var currentSlide = parseInt(document.querySelector('.carousel-fade .active').index('.carousel-fade .item'));
        var i = currentSlide;
        
        var nav = document.querySelector('.navbar-nav')[0].getBoundingClientRect();
        var text = document.querySelector('.mobile-carousel-caption')[i].getBoundingClientRect();

        var scrollAmount = (s/(d-c)) * 100;
        var opacity = scrollAmount/100 * 3;
        
        if(window.matchMedia() > 992) {
          document.querySelector('.navbar-nav').style.backgroundColor = "rgba(255,255,255,"+opacity+")"
        
          if (opacity >= 0.55) {
            document.querySelector('.navbar-nav>li>a').classList.add('normText');
            document.querySelector('.social-media>ul>li>a').classList.add('normText');
          }
          else if (opacity < 0.55) {
            document.querySelector('.navbar-nav>li>a').classList.remove('normText');
            document.querySelector('.social-media>ul>li>a').classList.remove('normText');
          }
        }

        if (text.top <= nav.top + nav.height) {
            document.querySelector('.carousel-caption h1').classList.add('transparent-text');
            document.querySelector('.carousel-caption h4').classList.add('transparent-text');
        }

        else if (text.top > nav.top + nav.height) {
          document.querySelector('.carousel-caption h1').classList.remove('transparent-text');
          document.querySelector('.carousel-caption h4').classList.remove('transparent-text');
        }
      })
    });
  });
