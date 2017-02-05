(function () {
  var modal = null;

  function createModal() {
    var modalHTML = '<div class="remodal" data-remodal-id="flash-indots-modal">'
      + '<div class="flash-indots-modal-header">'
      + '<h2 class="flash-indots-modal-title flash-indots-icon-title">Flash InDots</h2>'
      + '<button data-remodal-action="close" class="remodal-close"></button>'
      + '</div>'
      + '<div class="flash-indots-modal-body">'
      + '<div class="flash-indots-carousel">'
      + '</div>'
      + '</div>'
      + '</div>';
    $('main').append(modalHTML);
    modal = $('[data-remodal-id="flash-indots-modal"]').remodal();
  }

  function onClick() {
    console.log('Click!', modal);
  }

  if ($('.flash-indots-items').length) {
    createModal();
    $('.flash-indots-items').on('click', '.flash-indots-item', onClick);
  }
})();