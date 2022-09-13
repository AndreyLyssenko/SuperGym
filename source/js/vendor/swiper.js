const swiper = new Swiper('.trainers__container', {
  slidesPerView: 4,
  spaceBetween: 40,
  loop: true,
  allowTouchMove: false,

  navigation: {
    nextEl: '.trainers__controll-button--next',
    prevEl: '.trainers__controll-button--prev',
    enabled: true,
  },
});
