const sliderItems = document.querySelectorAll('.feedback__item');
const sliderTrack = document.querySelector('.feedback__track');
const sliderControllButtons = document.querySelectorAll('.feedback__controll-button');
const slidesToShow = 1;
const slidesToSwipe = 1;
let count = 0;
let itemWidth;
let width;

sliderItems.forEach((item) => {
  item.querySelector('.feedback__item-wrapper').classList.remove('feedback__item-wrapper--no-js');
});

const rollSlider = (slideRange) => {
  sliderTrack.style.transform = 'translate(-' + count * slideRange + 'px, 0)';
};

const init = () => {
  width = document.querySelector('.feedback__container').offsetWidth;
  sliderTrack.style.width = width * sliderItems.length + 'px';
  sliderItems.forEach((item) => {
    itemWidth = width;
    item.style.width = width + 'px';
  });

  rollSlider(itemWidth * slidesToSwipe);
};

init();

window.addEventListener('resize', init);

const enableButton = (btnArray) => {
  btnArray.forEach((elem) => {
    elem.removeAttribute('disabled', '');
  });
};

sliderControllButtons.forEach((btn) => {
  if (btn.classList.contains('feedback__controll-button--prev')) {
    btn.setAttribute('disabled', '');
  }
  btn.addEventListener('click', () => {
    if (btn.classList.contains('feedback__controll-button--next')) {
      count++;

      if (count >= sliderItems.length - slidesToShow) {
        btn.setAttribute('disabled', '');
      } else {
        enableButton(sliderControllButtons);
      }

      rollSlider(itemWidth * slidesToSwipe);
    }

    if (btn.classList.contains('feedback__controll-button--prev')) {
      count--;

      if (count <= 0) {
        btn.setAttribute('disabled', '');
        count = 0;
      } else {
        enableButton(sliderControllButtons);
      }

      rollSlider(itemWidth * slidesToSwipe);
    }
  });
});
