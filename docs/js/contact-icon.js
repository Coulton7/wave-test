function contactIcon() {
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

function frontIcon() {
  var front_icon = $(".front-icon");
  var frontIcon = -1;
  var frontRunCount = 0;

  function frontShowNextIcon() {
    if (frontRunCount < 101) {
      ++frontIcon;
      front_icon.eq(frontIcon % front_icon.length)
        .show(0)
        .delay(1800)
        .hide(0, frontShowNextIcon);
      frontRunCount++;
    } else {
      front_icon.eq(frontIcon % front_icon.length)
      .show(0);
    }
  }
  frontShowNextIcon();
};

document.addEventListener("DOMContentLoaded",function() {
  var socialmedia = document.querySelector('.socialmedia').offsetLeft;
  var socialMedia = document.querySelector('.social-media').offsetLeft;

  if (socialmedia > 0) {
    document.querySelector('.socialmedia', contactIcon);
  }
  if (socialMedia > 0) {
    document.querySelector('.social-media', frontIcon);
  }
});
