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
                document.querySelector('#esg-icon').classList.remove('active');
                document.querySelector('#tech-icon').classList.remove('active');
                document.querySelector('#cust-icon').classList.remove('active');
            }

            else if (activeSlide >= 6 && activeSlide <= 10) {
                document.querySelector('#esg-icon').classList.add('active');
                document.querySelector('#news-icon').classList.remove('active');
                document.querySelector('#tech-icon').classList.remove('active');
                document.querySelector('#cust-icon').classList.remove('active');
            }
        });

    document.getElementById('news-icon').addEventListener('click', function() {
        document.getElementById('news-icon').classList.add('active');
        slider.goTo(0);
        document.getElementById('esg-icon').classList.remove('active');
        document.getElementById('tech-icon').classList.remove('active');
        document.getElementById('cust-icon').classList.remove('active');
    });

    document.getElementById('esg-icon').addEventListener('click', function() {
        document.getElementById('esg-icon').classList.add('active');
        slider.goTo(5);
        document.getElementById('news-icon').classList.remove('active');
        document.getElementById('tech-icon').classList.remove('active');
        document.getElementById('cust-icon').classList.remove('active');
    });

    document.getElementById('tech-icon').addEventListener('click', function() {
        document.getElementById('tech-icon').classList.add('active');
        slider.goTo(10);
        document.getElementById('esg-icon').classList.remove('active');
        document.getElementById('news-icon').classList.remove('active');
        document.getElementById('cust-icon').classList.remove('active');
    });

    document.getElementById('cust-icon').addEventListener('click', function() {
        document.getElementById('cust-icon').classList.add('active');
        slider.goTo(15);
        document.getElementById('esg-icon').classList.remove('active');
        document.getElementById('tech-icon').classList.remove('active');
        document.getElementById('news-icon').classList.remove('active');
    });
});