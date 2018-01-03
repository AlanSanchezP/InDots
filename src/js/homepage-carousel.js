$(".home-sections-carousel").slick({
  centerMode: true,
  variableWidth: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: '<div class="carousel-buttons carousel-button-right"><img class="carousel-arrows" src="img/icons/right-arrow.png"></div>',
  prevArrow: '<div class="carousel-buttons carousel-button-left"><img class="carousel-arrows" src="img/icons/left-arrow.png"></div>'
});

$(".homepage-courses-carousel").slick({
  centerMode: true,
  variableWidth: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: false,
  nextArrow: '<div class="carousel-buttons carousel-button-right"><img class="carousel-arrows" src="img/icons/right-arrow.png"></div>',
  prevArrow: '<div class="carousel-buttons carousel-button-left"><img class="carousel-arrows" src="img/icons/left-arrow.png"></div>',
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});