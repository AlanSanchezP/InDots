(function () {
  var modal = null,
    carousel = null;

  function getItemHTML(itemData) {
    var sendTo = '.',
      hiddenName = 'name',
      emailName = 'email',
      htmlCode = '<div class="item">'
    + '<div class="flash-indots-modal-item-photo cover" style="background-image: ' + itemData.cover + '"></div>'
    + '<div class="flash-indots-modal-item-data">'
    + '<h3 class="flash-indots-modal-item-title flash-indots-icon-title">' + itemData.title + '</h3>'
    + '<div class="flash-indots-modal-item-description">' + itemData.description + '</div>'
    + '<div class="flash-indots-modal-item-info">'
    + '<div><span class="flash-indots-green-text">Formato</span>' + itemData.format + '</div>'
    + '<div><span class="flash-indots-green-text">Duración</span>' + itemData.duration + '</div>'
    + '<div><span class="flash-indots-green-text">Tiempo</span>' + itemData.lessonDuration + '</div>'
    + '<div><span class="flash-indots-green-text">Precio</span>' + itemData.price + '</div>'
    + '</div>'
    + '<form class="flash-indots-modal-form" action="' + sendTo + '">'
    + '<input type="hidden" name="' + hiddenName + '">'
    + '<div class="input-wrapper">'
    + '<input class="contact-input" type="email" id="email_flash_' + itemData.index + '" name="' + emailName + '" placeholder="Correo lectrónico">'
    + '</div>'
    + '<div class="button-wrapper"><button class="indots-button green" type="submit" name="submit">Inscribirme</div>'
    + '</form>'
    + '</div>'
    + '</div>';
    return htmlCode;
  }

  function forEachItem(index) {
    var itemData = {
      cover: $(this).find('.flash-indots-item-photo').css('background-image').replace('\"', '\''),
      title: $(this).find('.flash-indots-item-name span').text(),
      description: $(this).attr('data-item-description'),
      format: $(this).attr('data-item-format'),
      duration: $(this).attr('data-item-duration'),
      lessonDuration: $(this).attr('data-item-lesson-duration'),
      price: $(this).attr('data-item-price'),
      index: index
    }
    carousel.append(getItemHTML(itemData));
  }

  function createCarousel() {
    carousel.slick({
      prevArrow: '<span class="slick-prev circle fa fa-angle-left"></span>',
      nextArrow: '<span class="slick-next circle fa fa-angle-right"></span>'
    });
  }

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
    carousel = $('[data-remodal-id="flash-indots-modal"] .flash-indots-carousel');
    $('.flash-indots-items .flash-indots-item').each(forEachItem);
    createCarousel();
  }

  function onClick() {
    carousel.slick('slickGoTo', $(this).index());
    modal.open();
  }

  if ($('.flash-indots-items').length) {
    createModal();
    $('.flash-indots-items').on('click', '.flash-indots-item', onClick);
  }
})();