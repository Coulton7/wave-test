document.addEventListener("DOMContentLoaded", function() {
    var slider = tns({
        container: ".slider",
        center: true,
        loop: true,
        nav: false,
        controlsContainer: "#arrow-controls",
        gutter: 20,
        lazyload: true,
        responsive: {
            1 : {
                edgePadding: 20,
                items: 2 
            },
    
            600 : {
                edgePadding: 20,
                items: 3
            },
    
            768: {
                edgePadding: 20,
                items: 3
            },
    
            992: {
                edgePadding: 30,
                itmes: 4
            },
    
            1200: {
                edgePadding: 30,
                items: 4
            }
        },
    })
    slider.events.on("translationEnd", data => {
        let {controlsContainer, displayIndex, slideCount} = data;
        document.getElementById("counter").textContent('${displayIndex} of {$slideCount}')
    })
})