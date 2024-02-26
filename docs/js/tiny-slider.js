document.addEventListener("DOMContentLoaded", function() {
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
            items: 2
            },
    
            768: {
                items: 2
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
                  itmes: 3
              },
      
              1200: {
                  items: 3
              }
          },
      })
      var info = pillarslider.getInfo(),
          pillarCurrent = document.querySelector('.pillar-current'),
          pillarTotal = document.querySelector('.pillar-total');
          activeSlide = info.displayIndex;
          
          pillarTotal.textContent = info.slideCount;
          pillarCurrent.textContent = info.displayIndex;
    
          pillarslider.events.on('transitionEnd', function(info) {
              activeSlide = info.displayIndex;
              pillarCurrent.textContent = info.displayIndex;
    
                if (activeSlide >= 1 && activeSlide <= 5) {
                    document.getElementById('esg-icon').classList.add('active');
                    document.getElementById('tech-icon').classList.remove('active');
                    document.getElementById('cust-icon').classList.remove('active');
                    if(!document.querySelector('.esg-text').classList.contains('d-block')){
                        document.querySelector('.esg-text').classList.add('d-block');
                        document.querySelector('.esg-text').classList.remove('d-none');
                        document.querySelector('.esg-btn').classList.add('d-inline-flex');
                        document.querySelector('.esg-btn').classList.remove('d-none');
                    }
                    if(!document.querySelector('.tech-text').classList.contains('d-none')){
                        document.querySelector('.tech-text').classList.add('d-none');
                        document.querySelector('.tech-text').classList.remove('d-block');
                        document.querySelector('.tech-btn').classList.add('d-none');
                        document.querySelector('.tech-btn').classList.remove('d-inline-flex');
                    }
                    if(!document.querySelector('.cust-text').classList.contains('d-none')){
                        document.querySelector('.cust-text').classList.add('d-none');
                        document.querySelector('.cust-text').classList.remove('d-block');
                        document.querySelector('.cust-btn').classList.add('d-none');
                        document.querySelector('.cust-btn').classList.remove('d-inline-flex');
                    }
                }
    
                else if (activeSlide >= 6 && activeSlide <= 10) {
                    document.getElementById('esg-icon').classList.remove('active');
                    document.getElementById('tech-icon').classList.add('active');
                    document.getElementById('cust-icon').classList.remove('active');
                    if(!document.querySelector('.tech-text').classList.contains('d-block')){
                        document.querySelector('.tech-text').classList.add('d-block');
                        document.querySelector('.tech-text').classList.remove('d-none');
                        document.querySelector('.tech-btn').classList.add('d-inline-flex');
                        document.querySelector('.tech-btn').classList.remove('d-none');
                    }
                    if(!document.querySelector('.esg-text').classList.contains('d-none')){
                        document.querySelector('.esg-text').classList.add('d-none');
                        document.querySelector('.esg-text').classList.remove('d-block');
                        document.querySelector('.esg-btn').classList.add('d-none');
                        document.querySelector('.esg-btn').classList.remove('d-inline-flex');
                    }
                    if(!document.querySelector('.cust-text').classList.contains('d-none')){
                        document.querySelector('.cust-text').classList.add('d-none');
                        document.querySelector('.cust-text').classList.remove('d-block');
                        document.querySelector('.cust-btn').classList.add('d-none');
                        document.querySelector('.cust-btn').classList.remove('d-inline-flex');
                    }
                }
    
                else if (activeSlide >= 11 && activeSlide <= 15) {
                    document.getElementById('tech-icon').classList.remove('active');
                    document.getElementById('esg-icon').classList.remove('active');
                    document.getElementById('cust-icon').classList.add('active');
                    if(!document.querySelector('.cust-text').classList.contains('d-block')){
                        document.querySelector('.cust-text').classList.add('d-block');
                        document.querySelector('.cust-text').classList.remove('d-none');
                        document.querySelector('.cust-btn').classList.add('d-inline-flex');
                        document.querySelector('.cust-btn').classList.remove('d-none');
                    }
                    if(!document.querySelector('.esg-text').classList.contains('d-none')){
                        document.querySelector('.esg-text').classList.add('d-none');
                        document.querySelector('.esg-text').classList.remove('d-block')
                        document.querySelector('.esg-btn').classList.add('d-none');
                        document.querySelector('.esg-btn').classList.remove('d-inline-flex');
                    }
                    if(!document.querySelector('.tech-text').classList.contains('d-none')){
                        document.querySelector('.tech-text').classList.add('d-none');
                        document.querySelector('.tech-text').classList.remove('d-block');
                        document.querySelector('.tech-btn').classList.add('d-none');
                        document.querySelector('.tech-btn').classList.remove('d-inline-flex');
                    }
              }
          });
    
      document.getElementById('esg-icon').addEventListener('click', function() {
          document.getElementById('esg-icon').classList.add('active');
          pillarslider.goTo(0);
          document.getElementById('tech-icon').classList.remove('active');
          document.getElementById('cust-icon').classList.remove('active');

      });
    
      document.getElementById('tech-icon').addEventListener('click', function() {
          document.getElementById('tech-icon').classList.add('active');
          pillarslider.goTo(5);
          document.getElementById('esg-icon').classList.remove('active');
          document.getElementById('cust-icon').classList.remove('active');
      });
    
      document.getElementById('cust-icon').addEventListener('click', function() {
          document.getElementById('cust-icon').classList.add('active');
          pillarslider.goTo(10);
          document.getElementById('esg-icon').classList.remove('active');
          document.getElementById('tech-icon').classList.remove('active');
      });
    
  });