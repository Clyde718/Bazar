$(document).ready(function () {
  $('.furniture-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    appendArrows: $('.furniture__arrows'),
    prevArrow: '<button type="button" class="slick-prev"><span class="icon-arrow_back_ios"></span></button>',
    nextArrow: '<button type="button" class="slick-next"><span class="icon-arrow_forward_ios"></span></button>'
  })

  $(".rateYo").rateYo({
    ratedFill: "#2a2a2a",
    starWidth: "20px",
    normalFill: "#bababa"
  });


  $('.card__footer-heart').on('click', function () {
    $(this).toggleClass('card__footer-heart-active')
  });

  $('.slider-top__heart').on('click', function () {
    $(this).toggleClass('slider-top__heart-active')
  });





  $('.filter-by-categories__item').on('click', function () {
    $(this).toggleClass('filter-by-categories__item-active')
  });


  var $range = $(".js-range-slider"),
    $inputFrom = $(".js-input-from"),
    $inputTo = $(".js-input-to"),
    instance,
    min = 0,
    max = 1000,
    from = 0,
    to = 0;

  $range.ionRangeSlider({
    grid: false,
    skin: "round",
    type: "double",
    min: min,
    max: max,
    from: 135,
    to: 500,
    onStart: updateInputs,
    onChange: updateInputs,
  });
  instance = $range.data("ionRangeSlider");

  function updateInputs(data) {
    from = data.from;
    to = data.to;

    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);
  }

  $inputFrom.on("input", function () {
    var val = $(this).prop("value");

    // validate
    if (val < min) {
      val = min;
    } else if (val > to) {
      val = to;
    }

    instance.update({
      from: val
    });
  });

  $inputTo.on("input", function () {
    var val = $(this).prop("value");

    // validate
    if (val < from) {
      val = from;
    } else if (val > max) {
      val = max;
    }

    instance.update({
      to: val
    });
  });


  $('.gogi').on('click', function () {
    $(this).closest('.filter-by-size__row').toggleClass('gogi-active');
  });

  $('.filter-by-tags__item').on('click', function () {
    $(this).toggleClass('filter-by-tags__item-active');
  });


  (function ($) {
    $(function () {
      $("ul.tabs__caption").on("click", "li:not(.active)", function () {
        $(this)
          .addClass("active")
          .siblings()
          .removeClass("active")
          .closest("div.tabs")
          .find("div.tabs__content")
          .removeClass("active")
          .eq($(this).index())
          .addClass("active");
      });
    });
  })(jQuery);


  $('.slider-bottom__row-1').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    speed: 300,
    appendArrows: $('.slider-bottom-1'),
    prevArrow: '<button type="button" class="slick-prev"><span class="icon-arrow_forward_ios"></span></button>',
    nextArrow: '<button type="button" class="slick-next"><span class="icon-arrow_forward_ios"></span></button>',
    asNavFor: '.slider-top__row-1',
    focusOnSelect: true,
    // autoplay: true,
  });
  $('.slider-top__row-1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    speed: 300,
    asNavFor: '.slider-bottom__row-1',
    fade: true
  });


  $('.slider-bottom__row-1').slick('setPosition');
  $('.slider-top__row-1').slick('setPosition');


  // ================================
  $('.slider-bottom__row-2').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    speed: 300,
    appendArrows: $('.slider-bottom-2'),
    prevArrow: '<button type="button" class="slick-prev"><span class="icon-arrow_forward_ios"></span></button>',
    nextArrow: '<button type="button" class="slick-next"><span class="icon-arrow_forward_ios"></span></button>',
    asNavFor: '.slider-top__row-2',
    focusOnSelect: true,
    // autoplay: true
  });

  $('.slider-top__row-2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    speed: 300,
    asNavFor: '.slider-bottom__row-2',
    fade: true
  });


  $('.slider-top__row-2').slick('setPosition');
  $('.slider-bottom__row-2').slick('setPosition');



  // ================================
  $('.slider-bottom__row-3').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    speed: 300,
    appendArrows: $('.slider-bottom-3'),
    prevArrow: '<button type="button" class="slick-prev"><span class="icon-arrow_forward_ios"></span></button>',
    nextArrow: '<button type="button" class="slick-next"><span class="icon-arrow_forward_ios"></span></button>',
    asNavFor: '.slider-top__row-3',
    focusOnSelect: true,
    // autoplay: true
  });

  $('.slider-top__row-3').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    speed: 300,
    asNavFor: '.slider-bottom__row-3',
    fade: true
  });


  $('.slider-top__row-3').slick('setPosition');
  $('.slider-bottom__row-3').slick('setPosition');


  // ================================
  $('.slider-bottom__row-4').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    speed: 300,
    appendArrows: $('.slider-bottom-4'),
    prevArrow: '<button type="button" class="slick-prev"><span class="icon-arrow_forward_ios"></span></button>',
    nextArrow: '<button type="button" class="slick-next"><span class="icon-arrow_forward_ios"></span></button>',
    asNavFor: '.slider-top__row-4',
    focusOnSelect: true,
    // autoplay: true
  });

  $('.slider-top__row-4').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    speed: 300,
    asNavFor: '.slider-bottom__row-4',
    fade: true
  });



  $('.slider-top__row-4').slick('setPosition');
  $('.slider-bottom__row-4').slick('setPosition');




  $('.latest-blog__row').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    arrows: false,
    speed: 300,
    appendDots: $('.latest-blog__dots'),
  });

});


