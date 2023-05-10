document.addEventListener("DOMContentLoaded", function() {
    var slider = tns({
        container: ".slider",
        loop: true,
        nav: false,
        controls: true,
        controlsPosition: "bottom",
        gutter: 20,
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
                items: 4.33
            }
        },
    })
    slider.events.on("translationEnd", data => {
        let {controlsContainer, displayIndex, slideCount} = data;
        document.getElementById("counter").textContent('${displayIndex} of {$slideCount}')
    })
})