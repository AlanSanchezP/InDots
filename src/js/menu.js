(function () {
  var mobile = window.matchMedia('(max-width: 1064px)');

  function detectTouch(e) {
    if (!$(e.target).is('nav .menu-trigger') && !$(e.target).is('nav .menu-container') && !$(e.target).closest('nav .menu-container').length && $('nav .menu-container').hasClass('active')) {
      e.preventDefault();
      $('nav .menu-container').removeClass('active');
      $('body').removeClass('noscroll');
    }
  }

  function detectClick() {
    if ($('nav .menu-container').hasClass('active')) {
      $('nav .menu-container').removeClass('active');
      $('body').removeClass('noscroll');
    } else {
      $('nav .menu-container').addClass('active');
      $('body').addClass('noscroll');
    }
  }

  if (mobile.matches) {
    $('body')[0].addEventListener('touchstart', detectTouch, {passive: false});
    $('nav .menu-trigger').click(detectClick);
  } else {
    $('body')[0].removeEventListener('touchstart', detectTouch, {passive: false});
    $('nav .menu-trigger').off('click');
    $('body').removeClass('noscroll');
  }

  $(window).resize(function () {
    $('body')[0].removeEventListener('touchmove', detectTouch, {passive: false});
    $('nav .menu-trigger').off('click');
    $('body').removeClass('noscroll');
    $('nav .menu-container').removeClass('active');

    if (mobile.matches) {
      $('body')[0].addEventListener('touchmove', detectTouch, {passive: false});
      $('nav .menu-trigger').click(detectClick);
    }
  });
})();