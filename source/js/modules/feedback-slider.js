const sliderContainer = document.querySelector('.feedback');
const sliderTrack = document.querySelector('.feedback__track');
const sliderItems = sliderTrack.querySelectorAll('li');
const slidercontrolButtons = document.querySelectorAll('.feedback__control-button');
const slidesToShow = 1;
const slidesToSwipe = 1;
let count = 0;
let itemWidth;
let width;

sliderContainer.classList.remove('feedback--no-js');

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

slidercontrolButtons.forEach((btn) => {
  if (btn.classList.contains('feedback__control-button--prev')) {
    btn.setAttribute('disabled', '');
  }
  btn.addEventListener('click', () => {
    if (btn.classList.contains('feedback__control-button--next')) {
      count++;

      if (count >= sliderItems.length - slidesToShow) {
        btn.setAttribute('disabled', '');
      } else {
        enableButton(slidercontrolButtons);
      }

      rollSlider(itemWidth * slidesToSwipe);
    }

    if (btn.classList.contains('feedback__control-button--prev')) {
      count--;

      if (count <= 0) {
        btn.setAttribute('disabled', '');
        count = 0;
      } else {
        enableButton(slidercontrolButtons);
      }

      rollSlider(itemWidth * slidesToSwipe);
    }
  });
});
