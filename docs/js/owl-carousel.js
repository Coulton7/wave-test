$(function($){
    $(".slider").on("initialized.owl.carousel changed.owl.carousel", function(e) {
        if(!e.namespace) {
            return;
        }
        $("#counter").text(e.relatedTarget.relative(e.item.index)+ 1 + " of " + e.item.count);
    });

    $(".slider").owlCarousel({
        margin: 20,
        loop: true,
        stagePadding: 50,
        items: 4,
        nav: true,
        navText:["<i class='fas fa-caret-left fa-3x'></i>","<i class='fas fa-caret-right fa-3x'></i>"],
        responsive: {
            767 : {
             items: 2   
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

    $(document).ready(function () {
        $(document).on('click', '#esg', function(e){
            $('#esg').addClass('active');
            console.log('clicked');
            $('.slider').trigger('to.owl.carousel', [5, 100, true]);
        });
    });
    
});