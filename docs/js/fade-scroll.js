document.addEventListener("DOMContentLoaded", function() {
    var textLogo = document.getElementById('textlogo')

    if(window.innerWidth > 992) {
    textLogo.style.opacity = -1.03;

    window.addEventListener('scroll', function(e) {
        var scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        textLogo.style.opacity = Math.max(0, Math.min(1, +scroll / 500));
    });
    } else {
        textLogo.style.opacity = 1;
    }

    window.addEventListener('resize', function(){
        if(window.innerWidth > 992) {
            textLogo.style.opacity = -1.03;
        
            window.addEventListener('scroll', function(e) {
                var scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
                textLogo.style.opacity = Math.max(0, Math.min(1, +scroll / 500));
            });
        } else {
            textLogo.style.opacity = 1;
        }
    });
});