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

   pagination: false,

   breakpoints: {
      768: {
         pagination: {
            el: '.swiper-pagination',
            clickable: true,
         } 
      }
   },

   thumbs: {
      swiper: {
         el: '.mini-slider',
         slidesPerView: 3,
         spaceBetween: 16,
         breakpoints: {
            768: {
               direction: 'vertical',
               spaceBetween: 24,
            }
         }
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


   const iconMenu = document.querySelector ('.header-mobile__menu');
   const mobileMenu = document.querySelector ('.header__wrapper')

   iconMenu.addEventListener('click', () => {
      iconMenu.classList.toggle('header-mobile__menu--active');
      mobileMenu.classList.toggle('header__wrapper--active');
   });

   

})