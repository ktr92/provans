(function($){
  $(window).on("load",function(){
      $(".textlimit").mCustomScrollbar({
         axis:"y",
         autoHideScrollbar: 0,
      });
  });
})(jQuery);

$(document).ready(function() {

  var slider = $(".photoheader__items-slider");
  var scrollCount = null;
  var scroll= null;


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

  slider.on('wheel', (function(e) {
      e.preventDefault();

      clearTimeout(scroll);
      scroll = setTimeout(function(){scrollCount=0;}, 200);
      if(scrollCount) return 0;
      scrollCount=1;

      if (e.originalEvent.deltaY < 0) {
          $(this).slick('slickNext');
      } else {
          $(this).slick('slickPrev');
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

   $('.js-select2_item').each(function() {
      $(this).select2({
      minimumResultsForSearch: -1
     })
  });



   $('.detailimage__slider').each(function() {
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
   
   $('.galleryslider__slider').each(function() {
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

   $('.photoslider__slider').each(function() {
      $(this).slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      arrows: false,
      dots: true,
      fade: false,
       responsive: [
    {
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

   

      $(".arrowRight").click(function(e) {
          $(this).parent().parent().find(".slick-slider").slick("slickNext");
      });
      $(".arrowLeft").click(function(e) {
          $(this).parent().parent().find(".slick-slider").slick("slickPrev");
      });

      $("input[type=tel]").mask("+7 999 999 99 99")


       jQuery("a.scrollTo").click(function() {
        elementClick = jQuery(this).attr("href")
        destination = jQuery(elementClick).offset().top - 90;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 1100);
        return false;
    });

       jQuery(".mobileheader__burger a").click(function(e) {
        e.preventDefault();
        $('.mobilepanel').slideToggle();
        $(this).parent().toggleClass('active');
        $('.mobileheader__phone').toggleClass('active');
        $('#header').toggleClass('active');
        
       });

       jQuery(".mainmenu > ul > li.parent > a").click(function(e) {
        e.preventDefault();
        $(this).siblings('.submenu').slideToggle();
         $(this).toggleClass('active');
       });

       jQuery(".footermenu__title").click(function(e) {
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

  

  $(document).mouseup(function(e) 
    {
        var container = $(".bgtoggle-js");
        var ext1 = $(".bgtoggler-js");
        var ext2 = $(".bgtoggle-js");

        if ($(".bgtoggle-js").is(":visible")) {
           if (!ext1.is(e.target) &&  !container.is(e.target) && ext1.has(e.target).length === 0 && ext2.has(e.target).length === 0) 
            {
                container.removeClass('active').addClass('hidden');
                $('.bglayer').hide();
            }
        }

  });



  $(".productcard__image").each(function() {
    $(this).addClass('isInitialized').brazzersCarousel();
  });

    var $frame = $('.frame');
    var $wrap  = $frame.parent();

    // Call Sly on frame
    $frame.sly({
      horizontal: 1,
      itemNav: 'basic',
      smart: 1,
      activateOn: 'mouseenter',
      mouseDragging: 1,
      touchDragging: 1,
      releaseSwing: 1,
      startAt: 0,
      scrollBar: $wrap.find('.scrollbar'),
      scrollBy: 1,
      speed: 400,
      elasticBounds: 1,
      easing: 'swing',
      dragHandle: 1,
      dynamicHandle: 1,
      clickBar: 1,

      // Cycling
      cycleBy: 'items',
      cycleInterval: 0,
      pauseOnHover: 1,

      // Buttons
      prev: $wrap.find('.productslider__arrow_left'),
      next: $wrap.find('.productslider__arrow_right'),
    });

    $('.filter__header-js').on('click', function() {
      $(this).parent().toggleClass('filter__item_open');
      $(this).siblings('.filter__form').slideToggle();
    });

   
});



window.onload = function() {

if ($("#sliderprice1").length) {

   $('input#maxCost1').on('focusin', function () {
    $(this).val("");
  });

  $('input#minCost1').on('focusin', function () {
    $(this).val("");
  });
  $('input#maxCost2').on('focusin', function () {
    $(this).val("");
  });

  $('input#minCost2').on('focusin', function () {
    $(this).val("");
  });



  $("#maxCost1").val($('#limitMax1').val());
  $("#minCost1").val($('#limitMin1').val());

   $("#maxCost1").prop("placeholder", $("#limitMax1").val());
   $("#minCost1").prop("placeholder", $("#limitMin1").val());

 /* function prettify(num) {
    var n = num.toString();
    var separator = " ";
    return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + separator);
  }

  var $test1 = $("#maxCost1");
  var vals1 = $test1.prop("value");
  $test1.prop("value", prettify(vals1));

  var $test2 = $("#minCost1");
  var vals2 = $test2.prop("value");
  $test2.prop("value", prettify(vals2));*/
  
  try {


    jQuery("#sliderprice1").slider({
      min: +jQuery("input#limitMin1").val(),
      max: +jQuery("input#limitMax1").val(),
      values: [+jQuery("input#limitMin1").val(), +jQuery("input#limitMax1").val()],
      range: "min",
      stop: function (event, ui) {
        jQuery("input#minCost1").val(jQuery("#sliderprice1").slider("values",0));
        jQuery("input#maxCost1").val(jQuery("#sliderprice1").slider("values",1));

        //var val1 = $test1.prop("value");
        //$test1.prop("value", prettify(val1));

        if (jQuery("input#minCost1").val() == $('#limitMin1').val()) {
          jQuery("input#minCost1").addClass('notchanged');
        }
        else {
          jQuery("input#minCost1").removeClass('notchanged');
        }

        if (jQuery("input#maxCost1").val() == $('#limitMax1').val()) {
          jQuery("input#maxCost1").addClass('notchanged');
        }
        else {
          jQuery("input#maxCost1").removeClass('notchanged');
        }

        
      },
      slide: function (event, ui) {
        jQuery("input#minCost1").val(jQuery("#sliderprice1").slider("values",0));
        jQuery("input#maxCost1").val(jQuery("#sliderprice1").slider("values",1));

        if (jQuery("input#minCost1").val() == $('#limitMin1').val()) {
          jQuery("input#minCost1").addClass('notchanged');
        }
        else {
          jQuery("input#minCost1").removeClass('notchanged');
        }

        if (jQuery("input#maxCost1").val() == $('#limitMax1').val()) {
          jQuery("input#maxCost1").addClass('notchanged');
        }
        else {
          jQuery("input#maxCost1").removeClass('notchanged');
        }

        
        //var val1 = $test1.prop("value");
       // $test1.prop("value", prettify(val1));
      }
    });

  


    jQuery("input#maxCost1").change(function () {

      var value1=jQuery("input#minCost1").val();
      var value2=jQuery("input#maxCost1").val();

      if (value2 > (+jQuery("input#limitMax1").val())) {
        value2 = +jQuery("input#limitMax1").val();
        jQuery("input#maxCost1").val(+jQuery("input#limitMax1").val())
      }

     
      jQuery("#sliderprice1").slider("values", 1, value2);
      $test1.prop("value", prettify(val1));
      var val1 = $test1.prop("value");

        $test1.prop("value", prettify(val1));

        if (jQuery("input#minCost1").val() == $('#limitMin1').val()) {
          jQuery("input#minCost1").addClass('notchanged');
        }
        else {
          jQuery("input#minCost1").removeClass('notchanged');
        }

        if (jQuery("input#maxCost1").val() == $('#limitMax1').val()) {
          jQuery("input#maxCost1").addClass('notchanged');
        }
        else {
          jQuery("input#maxCost1").removeClass('notchanged');
        }
    
    });

     jQuery("input#minCost1").change(function () {

      var value1=jQuery("input#minCost1").val();
      var value2=jQuery("input#maxCost1").val();

      if (value2 < (+jQuery("input#limitMin1").val())) {
        value2 = +jQuery("input#limitMin1").val();
        jQuery("input#minCost1").val(+jQuery("input#limitMin1").val())
      }

     
      jQuery("#sliderprice1").slider("values", 0, value1);
      var val1 = $test1.prop("value");
      $test1.prop("value", prettify(val1));

      var val1 = $test1.prop("value");
        $test1.prop("value", prettify(val1));

        if (jQuery("input#minCost1").val() == $('#limitMin1').val()) {
          jQuery("input#minCost1").addClass('notchanged');
        }
        else {
          jQuery("input#minCost1").removeClass('notchanged');
        }

        if (jQuery("input#maxCost1").val() == $('#limitMax1').val()) {
          jQuery("input#maxCost1").addClass('notchanged');
        }
        else {
          jQuery("input#maxCost1").removeClass('notchanged');
        }
    
    });




  } catch (err) {

  };


}

};





