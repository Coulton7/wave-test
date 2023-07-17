document.addEventListener("DOMContentLoaded", function() {
    var slider = tns({
        container: ".slider",
        loop: true,
        nav: false,
        controlsContainer: "#arrow-controls",
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
                items: 3.66
            },
    
            992: {
                itmes: 4.33
            },
    
            1200: {
                items: 4.66
            }
        },
    })
    var info = slider.getInfo(),
        current = document.querySelector('.current'),
        total = document.querySelector('.total'),
        activeSlide = info.index;
        
        total.textContent = info.slideCount;
        current.textContent = info.displayIndex;

        slider.events.on('transitionEnd', function(info) {
            current.textContent = info.displayIndex;

            if (activeSlide >= 1 && activeSlide <= 5) {
                document.querySelector('#news-icon').classList.add('active');
                document.querySelector('#esg-icon').classList.remove('acive');
                document.querySelector('#tech-icon').classList.remove('active');
                document.querySelector('#cust-icon').classList.remove('active');
            }

            else if (activeSlide >= 6 && activeSlide <= 10) {
                document.querySelector('#esg-icon').classList.add('active');
                document.querySelector('#news-icon').classList.remove('acive');
                document.querySelector('#tech-icon').classList.remove('active');
                document.querySelector('#cust-icon').classList.remove('active');
            }
        });
});