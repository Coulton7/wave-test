function fadeText(){

  var fade_text = document.querySelector(".fade_text");
  var quoteIndex = -1;

  function showNextQuote() {
    ++quoteIndex;
    fade_text.eq(quoteIndex % fade_text.length)
    .fadeIn(900)
    .delay(900)
    .fadeOut(900, showNextQuote);
  }

  showNextQuote();
};

function frontFadeText(){
  var front_fade_text = document.querySelector('.front-fade');
  var fadeIndex = -1;

  function showNextText() {
    ++fadeIndex;
    front_fade_text.eq(fadeIndex % front_fade_text.length)
    .fadeIn(900)
    .delay(900)
    .fadeOut(900, showNextText);
  }
  showNextText();
};

document.addEventListener("DOMContentLoaded", function(){
  document.querySelector('.preface', fadeText);
  document.querySelector('.wavelower', frontFadeText);
});