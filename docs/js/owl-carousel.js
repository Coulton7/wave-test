$(function(){
    $(".slider").on("initialized.owl.carousel changed.owl.carousel", function(e) {
        if(!e.namespace) {
            return;
        }
        $("#counter").text(e.relatedTarget.relative(e.item.index)+ 1 + "of" + e.item.count);
    });

    $(".slider").owlCarousel({
        margin: 20,
        loop: true,
        stagePadding: 50,
        items: 4,
        nav: true,
        navText:["<i class='fas fas fa-angle-left fa-3x'></i>","<i class='fas fas fa-angle-right fa-3x'></i>"],
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
        },
    });
});