new Swiper('.comment-slider', {

   loop: true,

   navigation: false,

   breakpoints: {
      768: {
         navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
         },
      },
   }
});

new Swiper('.promo-slider', {

   loop: true,

   pagination: {
      el: '.swiper-pagination',

      clickable: true,
   },

   thumbs: {
      swiper: {
         el: '.mini-slider',
         direction: 'vertical',
         slidesPerView: 3,
         spaceBetween: 24,
      }
   }
});

window.addEventListener('DOMContentLoaded', () => {
   const menu = document.querySelector('.menu');
   const hamburger = document.querySelector('.button--nav');

   const promoWrapper = document.querySelector('.promo__wrapper');

   hamburger.addEventListener('click', () => {
      menu.classList.toggle('menu--active');
      promoWrapper.classList.toggle('promo__wrapper--active');
   });


   const tabWrappers = document.querySelectorAll('.tab-wrapper');
   if (tabWrappers) {

      tabWrappers.forEach((tabWrapper) => {

         const tabsBtn   = tabWrapper.querySelectorAll(".tabs__tab");
         const tabsItems = tabWrapper.querySelectorAll('.tabs__slider');
      
         tabsBtn.forEach(function(item) {
            item.addEventListener("click", function() {

               let currentBtn = item;
               let tabId      = currentBtn.getAttribute("data-tab");
               let currentTab = document.querySelector(tabId);
      
               tabsBtn.forEach(function(item) {
                  item.classList.remove('tabs__tab--active');
               });
      
               tabsItems.forEach(function(item) {
                  item.classList.remove('tabs__slider--active');
               });
      
               currentBtn.classList.add('tabs__tab--active');
               currentTab.classList.add('tabs__slider--active');
               
            });
         });

      });
   
   }

})