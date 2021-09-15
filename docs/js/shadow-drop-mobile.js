(function($) {
  $(".dropdown-menu.shadow-drop-menu li a").click(function(){
    $(".dropdown-menu.shadow-drop-menu:first-child").text($(this).text());
    $(".dropdown-menu.shadow-drop-menu:first-child").val($(this).text());
 });

if ($(window).width() > 992) {
  $(window).on("scroll", function() {
   var lScroll = ($(this).scrollTop() / $(window).height())*90 - 100;
   var tScroll = ($(this).scrollTop() / $(window).height())*90 - 75;
   var cScroll = ($(this).scrollTop() / $(window).height())*80 - 75;
   $('.net-zero-container').css({
     'transform': 'translate( 25%,' + (lScroll) + '%)'
   });
   $('.slider-timer').css({
     'transform': 'translate( 0%,' + (tScroll) + '%)'
   })
   $('.mobile-carousel-caption').css({
     'transform': 'translate( 0%,' + (cScroll) + '%)'
   });
 });
} else {
  $('.net-zero-container').css({
    'transform': 'translate(0% 0%)'
  });
  $('.slider-timer').css({
    'transform': 'translate(0% 0%)'
  });
  $('.mobile-carousel-caption').css({
    'transform': 'translate(0% 0%)'
  });
}

})(jQuery);
