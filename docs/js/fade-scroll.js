document.addEventListener("DOMContentLoaded", function() {
    const fadeScroll = document.querySelectorAll('.fade-scroll')

    if(window.innerWidth > 992) {
    fadeScroll.style.opacity = -1.03;

    window.addEventListener('scroll', function(e) {
        var scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        fadeScroll.style.opacity = Math.max(0, Math.min(1, +scroll / 500));
    });
    } else {
        fadeScroll.style.opacity = 1;
    }

    window.addEventListener('resize', function(){
        if(window.innerWidth > 992) {
            fadeScroll.style.opacity = -1.03;
        
            window.addEventListener('scroll', function(e) {
                var scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
                fadeScroll.style.opacity = Math.max(0, Math.min(1, +scroll / 500));
            });
        } else {
            fadeScroll.style.opacity = 1;
        }
    });
});