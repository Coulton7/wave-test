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
    slider.events.on("translationEnd", data => {
        let { controlsContainer, displayIndex, slideCount } = data;
        console.log('${displayIndex} / ${slideCount}');
        // Create an element and inject this into the controlsContainer (or update it thereafter)
      })
});