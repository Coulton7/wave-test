(function($){
  $(document).ready(function() {
    var x = document.getElementById('myNav');
    var y = document.getElementById('main-nav');
    $("#overlay-btn").click(
      function navBtn() {
        document.getElementById('overlay-btn').classList.toggle("change");
        if (x.style.height === "100%") {
            x.style.height = "0%";
            $('.main').removeClass('active');
            $("body").removeClass('noscroll');
            $('#overlay-btn').addClass('overlay-btn');
            $('.search-block').removeClass('overlay-search');
            $('.navigation_col').removeClass('overlay-menu');
            $(y).addClass('fixed-top');
          } else {
            x.style.height = "100%";
            if($('#prodForm').hasClass('in')) {
              $('#prodForm').modal('hide')
            }
            if($('#resForm').hasClass('in')) {
              $('#resForm').modal('hide')
            }
            if($('#location-details').dialog('isOpen') === true) {
              $('#location-details').dialog('close');
            }
            $('.main').addClass('active');
            $("body").addClass('noscroll');
            $('#overlay-btn').removeClass('overlay-btn');
            $('.search-block').addClass('overlay-search');
            $('.navigation_col').addClass('overlay-menu');
            $(y).removeClass('fixed-top');
          }
      });

      $("#footer-overlay-btn").click(
        function footerNavbtn(){
          document.getElementById('footer-overlay-btn').classList.toggle("change");
          if (x.style.height === "100%"){
          x.style.height = "0%";
          $('.main').removeClass('active');
          $("body").removeClass('noscroll');
          $('#overlay-btn').addClass('overlay-btn');
          $('.search-block').removeClass('overlay-search');
          $('.navigation_col').removeClass('overlay-menu');
          $(y).addClass('fixed-top');
        } else {
          x.style.height = "100%";
          if($('#prodForm').hasClass('in')) {
            $('#prodForm').modal('hide');
          }
          if($('#location-details').dialog('isOpen') === true) {
            $('#location-details').dialog('close');
          }
          $('.main').addClass('active');
          $("body").addClass('noscroll');
          $('#overlay-btn').removeClass('overlay-btn');
          $('.search-block').addClass('overlay-search');
          $('.navigation_col').addClass('overlay-menu');
          $(y).removeClass('fixed-top');
        }
      });
  });

  $(document).ready(function() {
    $('#prev').on('click', function() {
      $('.sustain-nav').animate({
        scrollLeft: '-=200'
      }, 300, 'swing');
    });

    $('#next').on('click', function() {
      $('.sustain-nav').animate({
        scrollLeft: '+=200'
      }, 300, 'swing');
    });
  });
})(jQuery);
