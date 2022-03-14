(function($) {

  $.fn.contactIcon = function() {

    var contact_icon = $(".contact_icon");
    var contactIcon = -1;
    var runCount = 0;

    function showNextIcon() {
      if (runCount < 101) {
        ++contactIcon;
        contact_icon.eq(contactIcon % contact_icon.length)
          .show(0)
          .delay(1800)
          .hide(0, showNextIcon);
        runCount++;
      } else {
        contact_icon.eq(contactIcon % contact_icon.length)
          .show(0);
      }
    }
    showNextIcon();
  };

   $.fn.frontIcon= function() {
  var front_icon = $(".front-icon");
  var frontIcon = -1;
  var frontRunCount = 0;

  function mobshowNextIcon() {
    if (frontRunCount < 101) {
      ++frontIcon;
      front_icon.eq(frontIcon % front_icon.length)
        .show(0)
        .delay(1800)
        .hide(0, showNextIcon);
      runCount++;
    } else {
      front_icon.eq(frontIcon % front_icon.length)
        .show(0);
    }
  }
  mobshowNextIcon();
}
})(jQuery);

$(document).ready(function() {
  if($('.socialmedia').visible(true)){
    $('.socialmedia').contactIcon();
  }
   else if($('.social-media').visible(true){
    $('.social-media').frontIcon();
  }
})(jQuery);
