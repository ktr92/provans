(function ($) {
  $(window).on("load", function () {
    $(".textlimit").mCustomScrollbar({
      axis: "y",
      autoHideScrollbar: 0,
    });
  });
})(jQuery);

$(document).ready(function () {

  var slider = $(".photoheader__items-slider");
  var scrollCount = null;
  var scroll = null;


  slider.slick({
    infinite: false,
    slidesToShow: 9,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    centerMode: false,
    focusOnSelect: false,
    variableWidth: true,
    centerPadding: '60px',
    nextArrow: $('.photoheader__right'),
    prevArrow: $('.photoheader__left'),
  });

  slider.on('wheel', (function (e) {
    e.preventDefault();

    clearTimeout(scroll);
    scroll = setTimeout(function () {
      scrollCount = 0;
    }, 200);
    if (scrollCount) return 0;
    scrollCount = 1;

    if (e.originalEvent.deltaY < 0) {
      $(this).slick('slickPrev');
    } else {

      $(this).slick('slickNext');
    }
  }));


  //    var slideno = $('photoheader__item.active').data('slick-index');
  //  $('.photoheader__items').slick('slickGoTo', slideno);

});

(function ($) {
  $(function () {

    $('.tabs-js .photoheader').on('click', '.photoheader__item:not(.active)', function () {
      $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs-js').find('.photo__wrapper').find('div.photo__content').removeClass('active').eq($(this).index()).addClass('active');
    });

  });
})(jQuery);


$(document).ready(function () {


  $('.t-datepicker').tDatePicker({
    titleMonths: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Декабрь'],
    titleDays: ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'],
    limitDateRanges: 99,
    titleToday: "Сегодня",
    toDayShowTitle: true,
    titleDateRange: "день",
    titleDateRanges: "дней"
  });

  $('.js-select2_item').each(function () {
    $(this).select2({
      minimumResultsForSearch: -1
    })
  });


  $('.detailimage__slider').each(function () {
    $(this).slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      arrows: false,
      dots: true,
      fade: true,
    });
  });

  $('.galleryslider__slider').each(function () {
    $(this).slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      arrows: false,
      dots: true,
      fade: true,
    });
  });

  $('.photoslider__slider').each(function () {
    $(this).slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      arrows: false,
      dots: true,
      fade: false,
      responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: "unslick"
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  });


  $(".arrowRight").click(function (e) {
    $(this).parent().parent().find(".slick-slider").slick("slickNext");
  });
  $(".arrowLeft").click(function (e) {
    $(this).parent().parent().find(".slick-slider").slick("slickPrev");
  });

  $("input[type=tel]").mask("+7 999 999 99 99")


  jQuery("a.scrollTo").click(function () {
    elementClick = jQuery(this).attr("href")
    destination = jQuery(elementClick).offset().top - 90;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 1100);
    return false;
  });

  jQuery(".mobileheader__burger a").click(function (e) {
    e.preventDefault();
    $('.mobilepanel').slideToggle();
    $(this).parent().toggleClass('active');
    $('.mobileheader__phone').toggleClass('active');
    $('#header').toggleClass('active');

  });

  jQuery(".mainmenu > ul > li.parent > a").click(function (e) {
    e.preventDefault();
    $(this).siblings('.submenu').slideToggle();
    $(this).toggleClass('active');
  });

  jQuery(".footermenu__title").click(function (e) {
    e.preventDefault();
    $(this).siblings('.footermenu__links').slideToggle().toggleClass('active');
    $(this).toggleClass('active');
  });


  lightbox.option({
    'resizeDuration': 30,
    'wrapAround': true
  })

  (function ($) {
    $(function () {

      $('.producttabs__header ul').on('click', 'li:not(.active)', function () {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('div.producttabs').find('div.producttabs__content').removeClass('active').eq($(this).index()).addClass('active');
      });

    });
  })(jQuery);


  $('.parent_catalog > a').click(function (e) {
    e.preventDefault();
    $('.bglayer').show();
    $(this).closest('.parent_catalog').find('.subnav').addClass('active');
  });

  $('.parent_menu > a').click(function (e) {
    e.preventDefault();
    $('.bglayer').show();
    $('.navpanel').removeClass('hidden').addClass('active');
  });

  $('.close-js').click(function (e) {
    e.preventDefault();
    $('.bglayer').hide();
    $('.navpanel').removeClass('active').addClass('hidden');
  });


  $('.showtext').click(function (e) {
    e.preventDefault();
    $(this).siblings('.text').removeClass('text_hidden');
    $(this).hide();
  });

  $('.readmore').click(function (e) {
    e.preventDefault();
    $(this).siblings('.text').removeClass('text_hidden_mobile');
    $(this).hide();
  });


 });