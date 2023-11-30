document.addEventListener("DOMContentLoaded", function() {
  var x = document.getElementById('myNav');
  var y = document.getElementById('main-nav');
  var s = document.getElementById('shareOverlay')
  document.querySelector("#overlay-btn").addEventListener('click', 
    function navBtn() {
      document.getElementById('overlay-btn').classList.toggle("change");
      if (x.style.height === "100%") {
        x.style.height = "0%";
        document.querySelector("body").classList.remove('noscroll');
        document.querySelector('#overlay-btn').classList.add('overlay-btn');
        document.querySelector('.search-block').classList.remove('overlay-search');
        document.querySelector('.navigation_col').classList.remove('overlay-menu');
        } else {
          x.style.height = "100%";
          if(s.style.height == "100%") {
            s.style.height = "0%"
            document.querySelector('#overlay-share').classList.remove('change');
          }
          document.querySelector("body").classList.add('noscroll');
          document.querySelector('#overlay-btn').classList.remove('overlay-btn');
          document.querySelector('.search-block').classList.add('overlay-search');
          document.querySelector('.navigation_col').classList.add('overlay-menu');
        }
    });

    document.querySelector("#overlay-share").addEventListener('click', 
    function shareBtn() {
      document.getElementById('overlay-share').classList.toggle("change");
      if (s.style.height === "100%") {
        s.style.height = "0%";
        document.querySelector("body").classList.remove('noscroll');
        document.querySelector('#share-overlay').classList.add('share-btn');
        document.querySelector('.search-block').classList.remove('overlay-search');
        document.querySelector('.navigation_col').classList.remove('overlay-menu');
        } else {
          s.style.height = "100%";
          if(x.style.height == "100%") {
            x.style.height = "0%";
            document.querySelector('#overlay-btn').classList.remove('change');
          }
          document.querySelector("body").classList.add('noscroll');
          document.querySelector('#share-overlay').classList.remove('share-btn');
          document.querySelector('.search-block').classList.add('overlay-search');
          document.querySelector('.navigation_col').classList.add('overlay-menu');
        }
    });

    document.querySelector("#tablet-overlay-btn").addEventListener('click',
      function navBtn() {
        document.getElementById('tablet-overlay-btn').classList.toggle("change");
        if (x.style.height === "100%") {
            x.style.height = "0%";
            document.querySelector('.main').classList.remove('active');
            document.querySelector("body").classList.remove('noscroll');
            document.querySelector('#overlay-btn').classList.add('overlay-btn');
            document.querySelector('.search-block').classList.remove('overlay-search');
            document.querySelector('.navigation_col').classList.remove('overlay-menu');
            document.querySelector(y).classList.add('fixed-top');
          } else {
            x.style.height = "100%";
            if(document.querySelector('#prodForm').classList.contains('in')) {
              document.querySelector('#prodForm').modal('hide')
            }
            if(document.querySelector('#resForm').classList.contains('in')) {
              document.querySelector('#resForm').modal('hide')
            }
            document.querySelector('.main').classList.add('active');
            document.querySelector("body").classList.add('noscroll');
            document.querySelector('#overlay-btn').classList.remove('overlay-btn');
            document.querySelector('.search-block').classList.add('overlay-search');
            document.querySelector('.navigation_col').classList.add('overlay-menu');
            document.querySelector(y).classList.remove('fixed-top');
          }
      });
});
