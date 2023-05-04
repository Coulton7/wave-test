(function($){
  function autocollapse() {
    var navbar = document.querySelector('#autocollapse');
    navbar.classList.remove('collapsed');
    if(navbar.innerHeight() > 100) {
      navbar.classList.add('collapsed');
      document.querySelector('#overlay-btn').classList.add('display-none-important');
    } else {
      navbar.classList.remove('collapsed');
      $('#overlay-btn').classList.remove('display-none-important');
    }
  }

  function menuItemOverlay() {

    if(window.innerWidth > 992) {
      let overlayBtn = document.querySelector('.overlay-btn').getBoundingClientRect();
      let overlayBtnLeft = overlayBtn.left;
      let menuItem = document.querySelector('.desktop-last').getBoundingClientRect();
      let menuItemRight = menuItem.right;

      if ((menuItemRight > overlayBtnLeft)) {
        $('#overlay-btn').addClass('display-none-important');
      }
      else {
        $('#overlay-btn').removeClass('display-none-important');
      }
    }

    if(window.innerWidth >= 768 && window.innerWidth <= 991) {
      let tabletBtn = document.querySelector('.tablet-overlay-btn').getBoundingClientRect();
      let tabletBtnLeft = tabletBtn.left;
      let menuItem = document.querySelector('.desktop-last').getBoundingClientRect();
      let menuItemRight = menuItem.right;

      if ((menuItemRight > tabletBtnLeft)) {
        document.querySelector('.tablet-overlay-btn').classList.add('display-none-important');
      }
      else {
        document.querySelector('.tablet-overlay-btn').classList.remove('display-none-important');
      }

    }
  }

  document.addEventListener("DOMContentLoaded", autocollapse);
  document.addEventListener("DOMContentLoaded", menuItemOverlay);
  window.addEventListener('resize', function() {
    if($("#overlay-btn").hasClass("change")) {
      return;
    } else {
      autocollapse();
    }
  });
  window.addEventListener('resize', function() {
    if(this.document.querySelector("#overlay-btn").classList.contains("change")) {
      return;
    } else {
      menuItemOverlay();
    }
  });
})(jQuery);
