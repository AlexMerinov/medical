// --------------------sliders -----------


//--------slider doctor--------------------

const sliderDoctors = new Swiper('.doctors-slider', {
   loop: true,

   slidesPerView: 1.5,

   centeredSlides: true,

   breakpoints: {
      768: {
         slidesPerView: 3,
         spaceBetween: 20,
      }
   },

   pagination: {
      el: '.doctors-slider-pagination',
      clickable: true,
   },

});


const sliderNews = new Swiper('.news-slider', {

   spaceBetween: 20,

   breakpoints: {
      768: {
         slidesPerView: 2,
         spaceBetween: 20
      }
   },



   slidesPerView: 1,

   pagination: {
      el: '.news-slider-pagination',
      clickable: true,
   },

});


const slider = new Swiper('.slider', {

   slidesPerView: 1,

   pagination: {
      el: '.slide__pagination',
      clickable: true,
   },

});

//  ----------------------------- header -------------------------

const body = document.querySelector('body');

const searchBtn = document.querySelector('.header-nav__search');
const searchInput = document.querySelector('.search');

searchBtn.addEventListener("click", function () {
   searchInput.classList.toggle('search--active');
})

const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.header-nav__main');

burger.addEventListener("click", function () {
   burger.classList.toggle('burger--active');
   mobileMenu.classList.toggle('header-nav__main--active');
   body.classList.toggle('lock');

})

// ------------------------------- tabs ---------------------------


const tabsBtn = document.querySelectorAll(".tabs__btn");
const tabsElements = document.querySelectorAll('.tabs__element');

tabsBtn.forEach(function (item) {
   item.addEventListener("click", function () {

      let currentBtn = item;
      let tabId = currentBtn.getAttribute("data-tab");
      let currentTab = document.querySelector(tabId);

      tabsBtn.forEach(function (item) {
         item.classList.remove('tabs__btn--active');
      });

      tabsElements.forEach(function (item) {
         item.classList.remove('tabs__element--active');
      });

      currentBtn.classList.add('tabs__btn--active');
      currentTab.classList.add('tabs__element--active');

   });
});

