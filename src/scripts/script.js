new Swiper('.comment-slider', {

   loop: true,

   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

new Swiper('.promo-slider', {

   loop: true,
   
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

new Swiper('.mini-slider', {

   loop: true,
   
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    direction: 'vertical',
    slidesPerView: 3,
    spaceBetween: 24,
});