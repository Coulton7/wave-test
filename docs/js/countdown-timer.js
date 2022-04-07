/*
This script is an extension to the one written
by Mateusz Rybczonec on his CSS Tricks Blog

Blog Link: https://bit.ly/3nH3AhO

OG Pen Link : https://bit.ly/3fi7xXj
*/

const FULL_DASH_ARRAY = 283;
const RESET_DASH_ARRAY = `-57 ${FULL_DASH_ARRAY}`;

//All buttons
var startBtn = document.querySelectorAll(".start");
var stopBtn = document.querySelectorAll(".stop");
const mediaCarousel = document.querySelectorAll(".media-carousel-block");
var timer = document.querySelectorAll("#base-timer-path-remaining");

var TIME_LIMIT = 10;
var timePassed = -1;
var timeLeft = TIME_LIMIT;
var timerInterval = null;

function reset() {
  clearInterval(timerInterval);
  resetVars();
  $(".base-timer__path-remaining arc").attr("stroke-dasharray", RESET_DASH_ARRAY);
}

function start(withReset = false) {
  setStartDisabled();
  removeStopDisabled();
  if (withReset) {
    resetVars();
  }
  startTimer();
}

function stop() {
  setStopDisabled();
  removeStartDisabled();
  clearInterval(timerInterval);
}

function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    setCircleDasharray();

    if (timeLeft === 0) {
      timeIsUp();
    }
  }, 1000);
}

window.addEventListener("DOMContentLoaded", () => {
  setStartDisabled();
  startTimer();
});

for (let i=0; i<mediaCarousel.length; i++) {
  mediaCarousel[i].addEventListener("mouseleave", function(){
    setStartDisabled();
    removeStopDisabled();
    startTimer();
  });

  mediaCarousel[i].addEventListener("mouseenter", function(){
    setStopDisabled();
    removeStartDisabled();
    clearInterval(timerInterval);
  });
}



//---------------------------------------------
//HELPER METHODS
//---------------------------------------------
function setStartDisabled() {
  $(startBtn).prop("disabled", true);
}

function removeStartDisabled() {
  $(startBtn).prop("disabled", false);
}

function setStopDisabled() {
  $(stopBtn).prop("disabled", true);
}

function removeStopDisabled() {
  $(stopBtn).prop("disabled", false);
}

function timeIsUp() {
  setStartDisabled();
  removeStopDisabled();
  reset();
  startTimer();
  $('#carousel-fade').carousel('next');
}

function resetVars() {
  setStartDisabled();
  timePassed = -1;
  timeLeft = TIME_LIMIT;
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  $(".base-timer__path-remaining").attr("stroke-dasharray", circleDasharray);
}
