import Swiper from './swiper-bundle.js';

const swiperItems = document.querySelectorAll('.trainers__item');
const swiperControl = document.querySelector('.trainers__control');

swiperControl.classList.remove('trainers__control--no-js');

swiperItems.forEach((item) => {
  item.classList.remove('trainers__item--no-js');
});

const swiper = new Swiper('.trainers__container', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      allowTouchMove: true,

      navigation: {
        enabled: true,
      }
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      loop: true,
      allowTouchMove: true,

      navigation: {
        enabled: true,
      }
    },

    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
      loop: true,
      allowTouchMove: false,

      navigation: {
        enabled: true,
      }
    }
  },

  navigation: {
    nextEl: '.trainers__control-button--next',
    prevEl: '.trainers__control-button--prev',
    enabled: true,
  },
});

swiper.slides.forEach((item) => {
  if (!item.classList.contains('swiper-slide-duplicate')) {
    item.setAttribute('tabindex', '0');
  };
});
