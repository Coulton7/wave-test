(function($){
  function autocollapse() {
    var navbar = $('#autocollapse');
    navbar.removeClass('collapsed');
    if(navbar.innerHeight() > 100) {
      navbar.addClass('collapsed');
      $('#overlay-btn').addClass('display-none-important');
    } else {
      navbar.removeClass('collapsed');
      $('#overlay-btn').removeClass('display-none-important');
    }
  }

  function menuItemOverlay() {

    if($(window).width() > 992) {
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

    if($(window).width() >= 768 && $(window).width <= 991) {
      let tabletBtn = document.querySelector('.tablet-overlay-btn').getBoundingClientRect();
      let tabletBtnLeft = tabletBtn.left;
      let menuItem = document.querySelector('.desktop-last').getBoundingClientRect();
      let menuItemRight = menuItem.right;

      if ((menuItemRight > tabletBtnLeft)) {
        $('.tablet-overlay-btn').addClass('display-none-important');
      }
      else {
        $('.tablet-overlay-btn').removeClass('display-none-important');
      }

    }
  }

  $(document).on('ready', autocollapse);
  $(document).on('ready', menuItemOverlay);
  $(window).on('resize', function() {
    if($("#overlay-btn").hasClass("change")) {
      return;
    } else {
      autocollapse();
    }
  });
  $(window).on('resize', function() {
    if($("#overlay-btn").hasClass("change")) {
      return;
    } else {
      menuItemOverlay();
    }
  });
})(jQuery);
