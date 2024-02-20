document.addEventListener("DOMContentLoaded", function() {
    const carousel = new bootstrap.Carousel('#carousel-fade');
    var newsslider = tns({
        container: ".news-slider",
        loop: true,
        nav: false,
        controlsContainer: "#news-controls",
        gutter: 20,
        lazyload: true,
        responsive: {
            1 : {
            items: 2 
            },
    
            600 : {
            items: 3
            },
    
            768: {
                items: 3
            },
    
            992: {
                itmes: 3
            },
    
            1200: {
                items: 3
            }
        },
    })
    var info = newsslider.getInfo(),
        current = document.querySelector('.news-current'),
        total = document.querySelector('.news-total');
        activeSlide = info.displayIndex;
        
        total.textContent = info.slideCount;
        current.textContent = info.displayIndex;
  
        newsslider.events.on('transitionEnd', function(info) {
            activeSlide = info.displayIndex;
            current.textContent = info.displayIndex;
        });
    
    var pillarslider = tns({
          container: ".pillar-slider",
          loop: true,
          nav: false,
          controlsContainer: "#pillar-controls",
          gutter: 20,
          lazyload: true,
          responsive: {
              1 : {
              items: 2 
              },
      
              600 : {
              items: 3
              },
      
              768: {
                  items: 3
              },
      
              992: {
                  itmes: 4
              },
      
              1200: {
                  items: 4
              }
          },
      })
      var info = pillarslider.getInfo(),
          current = document.querySelector('.pillar-current'),
          total = document.querySelector('.pillar-total');
          activeSlide = info.displayIndex;
          
          total.textContent = info.slideCount;
          current.textContent = info.displayIndex;
    
          pillarslider.events.on('transitionEnd', function(info) {
              activeSlide = info.displayIndex;
              current.textContent = info.displayIndex;
    
              if (activeSlide >= 1 && activeSlide <= 5) {
                  carousel.to(0);
                  document.getElementById('esg-icon').classList.remove('active');
                  document.getElementById('tech-icon').classList.remove('active');
                  document.getElementById('cust-icon').classList.remove('active');
              }
    
              else if (activeSlide >= 6 && activeSlide <= 10) {
                  carousel.to(1);
                  document.getElementById('esg-icon').classList.add('active');
                  document.getElementById('tech-icon').classList.remove('active');
                  document.getElementById('cust-icon').classList.remove('active');
              }
    
              else if (activeSlide >= 11 && activeSlide <= 15) {
                  carousel.to(2);
                  document.getElementById('tech-icon').classList.add('active');
                  document.getElementById('esg-icon').classList.remove('active');
                  document.getElementById('cust-icon').classList.remove('active');
              }
          });
    
      document.getElementById('esg-icon').addEventListener('click', function() {
          document.getElementById('esg-icon').classList.add('active');
          slider.goTo(0);
          document.getElementById('tech-icon').classList.remove('active');
          document.getElementById('cust-icon').classList.remove('active');
      });
    
      document.getElementById('tech-icon').addEventListener('click', function() {
          document.getElementById('tech-icon').classList.add('active');
          slider.goTo(5);
          document.getElementById('esg-icon').classList.remove('active');
          document.getElementById('cust-icon').classList.remove('active');
      });
    
      document.getElementById('cust-icon').addEventListener('click', function() {
          document.getElementById('cust-icon').classList.add('active');
          slider.goTo(10);
          document.getElementById('esg-icon').classList.remove('active');
          document.getElementById('tech-icon').classList.remove('active');
      });
    
  });