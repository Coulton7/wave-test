$(function(){
    $('.owl-carousel').owlCarousel({
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
        onIntialized: counter,
        onTranslated: counter
    });

    function counter(event) {
        var element = event.target;

        var items = event.item.count;

        var item = event.item.index + 1

        if(item > items) {
            item = item - items
        }
        $('#counter').html(item+" of "+items)
    }
})