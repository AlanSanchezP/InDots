(function () {
  var modal = null,
    carousel = null;

  function getItemHTML(itemData, formInfo) {
    var htmlCode = '<div class="item">'
    + '<div class="flash-indots-modal-item-photo cover" style="background-image: ' + itemData.cover + '"></div>'
    + '<div class="flash-indots-modal-item-data">'
    + '<h3 class="flash-indots-modal-item-title flash-indots-icon-title indots-font-cabin-regular">' + itemData.title + '</h3>'
    + '<div class="indots-video-container">' + itemData.video + '</div>'
    + '<div class="indots-video-container">' + itemData.videoSecondPart + '</div>'
    + '<div class="indots-video-container">' + itemData.videoThirdPart + '</div>'
    + '</div>'
    + '</div>';
    return htmlCode;
  }

  function forEachItem(index) {
    var itemData = {
        cover: $(this).find('.flash-indots-item-photo').css('background-image').replace('\"', '\''),
        title: $(this).find('.flash-indots-item-name span').text(),
        video: $(this).attr('data-item-video'),
        videoSecondPart: $(this).attr('data-item-video-second'),
        videoThirdPart: $(this).attr('data-item-video-third'),
      },
      formInfo = {
        sendTo: 'https://app.getresponse.com/add_subscriber.html',
        textName: 'first_name',
        emailName: 'email',
        campaignName: 'campaign_token',
        thankName: 'thankyou_url',
        fowardName: 'forward_data'
      },
      validationRules = {};
    validationRules[formInfo.emailName] = {
      required: true,
      email: true
    };
    validationRules[formInfo.hidenName] = {
      required: true
    };
    validationRules[formInfo.textName] = {
      required: true
    };
    carousel.append(getItemHTML(itemData, formInfo));
    carousel.find('#flash-indots-modal-form_' + index + '').validate({
      rules: validationRules
    });
  }

  function createCarousel() {
    carousel.slick({
      prevArrow: '<span class="slick-prev circle fa fa-angle-left"></span>',
      nextArrow: '<span class="slick-next circle fa fa-angle-right"></span>'
    });
  }

  function carouselCallback() {
    modal.open();
    carousel.off('afterChange.slick', carouselCallback);
    carousel.resize();
  }

  function createModal() {
    var modalHTML = '<div class="remodal" data-remodal-id="flash-indots-modal">'
      + '<div class="flash-indots-modal-header">'
      + '<h2 class="flash-indots-modal-title flash-indots-icon-title"></h2>'
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

    carousel.on('afterChange.slick', carouselCallback);
    $(document).on('opened', '[data-remodal-id="flash-indots-modal"]', function () {
      carousel.slick('setPosition');
    });
  }

  function onClick() {
    carousel.on('afterChange.slick', carouselCallback);
    carousel.slick('slickGoTo', $(this).index());
  }

  if ($('.flash-indots-items').length) {
    createModal();
    $('.flash-indots-items').on('click', '.flash-indots-item', onClick);
  }
})();
