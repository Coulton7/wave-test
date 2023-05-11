document.addEventListener("DOMContentLoaded", function() {
    const textLogo = document.getElementById('textlogo');
    const sectionShadow = document.getElementById('section-shadow');
    const enquiry = document.getElementById('enq-icon');
    const navbar = document.querySelector('.navbar-nav')

    if(window.innerWidth > 992) {
        sectionShadow.style.opacity = -1.03;
        textLogo.style.opacity = -1.03;
        enquiry.style.opacity = -1.03;
        navbar.style.backgroundColor = "rgba(255,255,255,0)";

    window.addEventListener('scroll', function(e) {
        var scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        sectionShadow.style.opacity = Math.max(0, Math.min(1, +scroll / 500));
        textLogo.style.opacity = Math.max(0, Math.min(1, +scroll / 500));
        enquiry.style.opacity = Math.max(0, Math.min(1, +scroll / 500));
        navbar.style.backgroundColor = "rgba(255,255,255,"+ Math.max(0, Math.min(1, +scroll / 500)); +")"
        console.log(scroll/500);

        if(scroll/500 >= 0.75) {
            document.querySelector('.navbar-nav>li>a').classList.add('normText');
            document.querySelector('.social-media>ul>li>a').classList.add('normText');
        }
    });
    } else {
        sectionShadow.style.opacity = 1;
        textLogo.style.opacity = 1;
        enquiry.style.opacity = 1;
        navbar.style.backgroundColor = "rgba(255,255,255,1)";
    }

    window.addEventListener('resize', function(){
        if(window.innerWidth > 992) {
            sectionShadow.style.opacity = -1.03;
            textLogo.style.opacity = -1.03;
            enquiry.style.opacity = -1.03;
            navbar.style.backgroundColor = "rgba(255,255,255,0)";
        
            window.addEventListener('scroll', function(e) {
                var scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
                sectionShadow.style.opacity = Math.max(0, Math.min(1, +scroll / 500));
                textLogo.style.opacity = Math.max(0, Math.min(1, +scroll / 500));
                enquiry.style.opacity = Math.max(0, Math.min(1, +scroll / 500));
                navbar.style.backgroundColor = "rgba(255,255,255,"+ Math.max(0, Math.min(1, +scroll / 500)); +")"
            });
        } else {
            sectionShadow.style.opacity = 1;
            textLogo.style.opacity = 1;
            enquiry.style.opacity = 1;
            navbar.style.backgroundColor = "rgba(255,255,255,1)";
        }
    });

});