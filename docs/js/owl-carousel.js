$(function(){
    $('.owl-carousel').owlCarousel({
        margin: 10,
        loop: true,
        stagePadding: 50,
        items: 4,
        nav: true,
        responsive: {
            767 : {
             items: 4   
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
        }
    })
})