$(document).ready(function () {
  $('.furniture-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    appendArrows: $('.furniture__arrows'),
    prevArrow: '<button type="button" class="slick-prev"><span class="icon-arrow_back_ios"></span></button>',
    nextArrow: '<button type="button" class="slick-next"><span class="icon-arrow_forward_ios"></span></button>'
  })
});