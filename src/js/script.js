$(document).ready(function () {
   $('.carousel__inner').slick({
      speed: 1200,
      //adaptiveHeight: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="img/icon/chevron-left.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="img/icon/chevron-right.png"></button>',
      responsive: [
         {
            breakpoint: 992,
            settings: {
               //dots: true,
               arrows: false
            }
         }
      ]
   });

   $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab-active)', function () {
      $(this)
         .addClass('catalog__tab-active').siblings().removeClass('catalog__tab-active')
         .closest('div.container').find('div.catalog__contant').removeClass('catalog__contant-active').eq($(this).index()).addClass('catalog__contant-active');
   });

   $('.catalog-item__link').each(function (i) {
      $(this).on('click', function (e) {
         e.preventDefault();
         $('.catalog-item__content').eq(i).toggleClass('catalog-item__content-active');
         $('.catalog-item__list').eq(i).toggleClass('catalog-item__list-active');
      })
   })

   $('.catalog-item__back').each(function (i) {
      $(this).on('click', function (e) {
         e.preventDefault();
         $('.catalog-item__content').eq(i).toggleClass('catalog-item__content-active');
         $('.catalog-item__list').eq(i).toggleClass('catalog-item__list-active');
      })
   })

   //Modal

   $('[data-modal=consultation]').on('click', function () {
      $('.overlay, #consultation').fadeIn();
   });
   $('.modal__close').on('click', function () {
      $('.overlay, #consultation, #order, #thanks').fadeOut();
   });
   //$('.button-mini').on('click', function () {
   //   $('.overlay, #order').fadeIn();
   //});

   $('.button-mini').each(function (i) {
      $(this).on('click', function () {
         $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text())
         $('.overlay, #order').fadeIn();
      })
   });

   function validateForms(form) {
      $(form).validate({
         rules: {
            name: {
               required: true,
               minlength: 2
            },
            phone: "required",
            email: {
               required: true,
               email: true
            }
         },
         messages: {
            name: {
               required: "Пожалуйста, введите свое имя",
               minlength: jQuery.validator.format("Введите {0} символа!")
            },
            phone: "Пожалуйста, введите свой номер телефона",
            email: {
               required: "Пожалуйста, введите свою почту",
               email: "Неправильно введен адрес почты"
            }
         }
      });
   };

   validateForms('#consultation-form');
   validateForms('#consultation form');
   validateForms('#order form');

   $('input[name=phone]').mask("+7 (999) 999-99-99");

   $('form').submit(function () {
      e.preventDefault();
      $.ajax({
         type: "POST",
         url: "mailer/smart.php",
         data: $(this).serialize()
      }).done(function () {
         $(this).find("input").val("")
         $('#consultation, #order').fadeOut();
         $('.overlay, #thanks').fadeIn('slow');
         $('form').trigger('reset');
      });
      return false;
   });

   //Scroll

   $(window).scroll(function () {
      if ($(this).scrollTop() > 1000) {
         $('.pageup').fadeIn();
      } else {
         $('.pageup').fadeOut();
      }
   });

   $("a[href=#up]").click(function () {
      const _href = $(this).attr("href");
      $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
      return false;
   });

   new WOW().init();

});