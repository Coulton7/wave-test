  function enviroLogo() {

    var enviro_logo = document.querySelector(".enviro_logo");
    var enviroLogo = -1;
    var runCount = 0;

    function showNextLogo() {
      if (runCount < 101) {
        ++enviroLogo;
        enviro_logo.eq(enviroLogo % enviro_logo.length)
          .show(0)
          .delay(8000)
          .hide(0, showNextLogo);
        runCount++;
      } else {
        enviro_logo.eq(enviroLogo % enviro_logo.length)
          .show(0);
      }
    }
    showNextLogo();
  };

  function mobEnviroLogo() {
    var mob_enviro_Logo = document.querySelector(".mob-enviro-logo");
    var mobEnviroLogo = -1;
    var mobRunCount = 0;

    function mobShowNextLogo() {
      if (mobRunCount < 101) {
        ++mobEnviroLogo;
        mob_enviro_Logo.eq(mobEnviroLogo % mob_enviro_Logo.length)
          .show(0)
          .delay(8000)
          .hide(0, mobShowNextLogo);
        mobRunCount++;
      } else {
        mob_enviro_Logo.eq(mobEnviroLogo % mob_enviro_Logo.length)
        .show(0);
      }
    }
    mobShowNextLogo();
  };


  document.addEventListener("DOMContentLoaded", function() {
    if(document.querySelector('.envirologo-container').is(':visible')) {
      document.querySelector('.envirologo-container').enviroLogo();
    }

    if(document.querySelector('.mob-envirologo-container').is(':visible')) {
      document.querySelector('.mob-envirologo-container').mobEnviroLogo();
    }
  });
