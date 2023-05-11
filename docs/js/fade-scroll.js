document.addEventListener("DOMContentLoaded", function() {
    const textLogo = document.getElementById('textlogo');
    const sectionShadow = document.getElementById('section-shadow');
    const enquiry = document.getElementById('enq-icon');

    if(window.innerWidth > 992) {
        sectionShadow.style.opacity = -1.03;
        textLogo.style.opacity = -1.03;
        enquiry.style.opacity = -1.03;

    window.addEventListener('scroll', function(e) {
        var scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        sectionShadow.style.opacity = Math.max(0, Math.min(1, +scroll / 500));
        textLogo.style.opacity = Math.max(0, Math.min(1, +scroll / 500));
        enquiry.style.opacity = Math.max(0, Math.min(1, +scroll / 500));
    });
    } else {
        sectionShadow.style.opacity = 1;
        textLogo.style.opacity = 1;
        enquiry.style.opacity = 1;
    }

    window.addEventListener('resize', function(){
        if(window.innerWidth > 992) {
            sectionShadow.style.opacity = -1.03;
            textLogo.style.opacity = -1.03;
            enquiry.style.opacity = -1.03;
        
            window.addEventListener('scroll', function(e) {
                var scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
                sectionShadow.style.opacity = Math.max(0, Math.min(1, +scroll / 500));
                textLogo.style.opacity = Math.max(0, Math.min(1, +scroll / 500));
                enquiry.style.opacity = Math.max(0, Math.min(1, +scroll / 500));
            });
        } else {
            sectionShadow.style.opacity = 1;
            textLogo.style.opacity = 1;
            enquiry.style.opacity = 1;
        }
    });

});