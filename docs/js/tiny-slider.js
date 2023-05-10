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
                items: 3
            },
    
            992: {
                itmes: 4
            },
    
            1200: {
                items: 4
            }
        },
        lazyload: true,
    })
    

})
