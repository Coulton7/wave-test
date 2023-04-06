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
        nav: true,
        dots: false,
        lazyLoad: true,
        lazyLoadEager: 2,
        checkVisible: false,
        responsiveClass: true,
        navText:["<i class='fas fa-caret-left fa-3x'></i>","<i class='fas fa-caret-right fa-3x'></i>"],
        responsive: {
            0 : {
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
    }).on('changed.owl.carousel', function(e){

        if (e.relatedTarget.relative(e.item.index) >= 0 && e.relatedTarget.relative(e.item.index) <= 4){
            $('#news-icon').addClass('active');
            $('#esg-icon').removeClass('active');
            $('#tech-icon').removeClass('active');
            $('#cust-icon').removeClass('active');
            $('#carousel-fade').carousel(0);
        }
        else if (e.relatedTarget.relative(e.item.index) >= 5 && e.relatedTarget.relative(e.item.index) <= 9){
            $('#esg-icon').addClass('active');
            $('#news-icon').removeClass('active');
            $('#tech-icon').removeClass('active');
            $('#cust-icon').removeClass('active');
            $('#carousel-fade').carousel(1);
        }
        else if (e.relatedTarget.relative(e.item.index) >= 10 && e.relatedTarget.relative(e.item.index) <= 14){
            $('#tech-icon').addClass('active');
            $('#esg-icon').removeClass('active');
            $('#news-icon').removeClass('active');
            $('#cust-icon').removeClass('active');
            $('#carousel-fade').carousel(2);
        }
        else if (e.relatedTarget.relative(e.item.index) >= 15 || e.relatedTarget.relative(e.item.index) <= 19){
            $('#cust-icon').addClass('active');
            $('#esg-icon').removeClass('active');
            $('#tech-icon').removeClass('active');
            $('#news-icon').removeClass('active');
            $('#carousel-fade').carousel(3);
        }
    }).on('translated.owl.carousel', function (x) {
        checkClasses();
    })

    checkClasses();

    function checkClasses() {
        var total = $('.slider .owl-stage .owl-item.active').length;

        $('.slider .owl-stage .owl-item.active').removeClass('last');
        $('.slider .owl-stage .owl-item.active').removeClass('first');

        $('.slider .owl-stage .owl-item.active').each(function(index) {
            if (index === total - 1 && total > 1) {
                $(this).addClass('last');
            }

            if(index === 0) {
                $(this).addClass('first');
            }
        });
    }

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