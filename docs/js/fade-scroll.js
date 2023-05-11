document.addEventListener("DOMContentLoaded", function() {
    var textLogo = document.getElementById('textlogo')
    textLogo.style.opacity = -1.03;

    window.addEventListener('scroll', function(e) {
        var scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        textLogo.style.opacity = Math.max(0, Math.min(1, +scroll / 400));
    });

});