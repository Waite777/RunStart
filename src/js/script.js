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
               dots: true,
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
});