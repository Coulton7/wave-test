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
    }).on('changed.owl.carousel', function(e){

        if (e.relatedTarget.relative(e.item.index) == 0){
            $('#news-icon').addClass('active');
            $('#esg-icon').removeClass('active');
            $('#tech-icon').removeClass('active');
            $('#cust-icon').removeClass('active');
        }
        else if (e.relatedTarget.relative(e.item.index) == 5){
            $('#esg-icon').addClass('active');
            $('#news-icon').removeClass('active');
            $('#tech-icon').removeClass('active');
            $('#cust-icon').removeClass('active');
        }
        else if (e.relatedTarget.relative(e.item.index) == 10){
            $('#tech-icon').addClass('active');
            $('#esg-icon').removeClass('active');
            $('#news-icon').removeClass('active');
            $('#cust-icon').removeClass('active');
        }
        else if (e.relatedTarget.relative(e.item.index) == 15){
            $('#cust-icon').addClass('active');
            $('#esg-icon').removeClass('active');
            $('#tech-icon').removeClass('active');
            $('#news-icon').removeClass('active');
        }
    })

    $(document).ready(function () {
        $('#esg-icon').on('click', function() {
            $(this).addClass('active');
            $('.slider').trigger('to.owl.carousel', [5, 100, true]);
            $('#news-icon').removeClass('active');
            $('#tech-icon').removeClass('active');
            $('#cust-icon').removeClass('active');
        });

        $('#tech-icon').on('click', function() {
            $(this).addClass('active');
            $('.slider').trigger('to.owl.carousel', [10, 100, true]);
            $('#esg-icon').removeClass('active');
            $('#news-icon').removeClass('active');
            $('#cust-icon').removeClass('active');
        });

        $('#cust-icon').on('click', function() {
            $(this).addClass('active');
            $('.slider').trigger('to.owl.carousel', [15, 100, true]);
            $('#esg-icon').removeClass('active');
            $('#tech-icon').removeClass('active');
            $('#news-icon').removeClass('active');
        });

        $('#news-icon').on('click', function() {
            $(this).addClass('active');
            $('.slider').trigger('to.owl.carousel', [0, 100, true]);
            $('#esg-icon').removeClass('active');
            $('#tech-icon').removeClass('active');
            $('#cust-icon').removeClass('active');
        });
    });
    
});