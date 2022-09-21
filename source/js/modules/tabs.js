const tabsTriggers = document.querySelectorAll('.cards__trigger');
const tabs = document.querySelectorAll('.cards__list');
const triggersContainer = document.querySelector('.cards__tabs-triggers');
const tabsTitles = document.querySelectorAll('.cards__title');

tabsTitles.forEach((el) => {
  el.classList.remove('cards__title--no-js');
});

tabs.forEach((el) => {
  el.classList.remove('cards__list--no-js');
});

triggersContainer.classList.remove('cards__tabs-triggers--no-js');

tabsTriggers.forEach((trigger) => {
  trigger.addEventListener('click', (evt) => {
    evt.preventDefault();

    const id = evt.target.getAttribute('href').replace('#', '');

    tabs.forEach((tab) => {
      tab.classList.remove('cards__list--current');
    });

    tabsTriggers.forEach((el) => {
      el.classList.remove('cards__trigger--current');
    });

    trigger.classList.add('cards__trigger--current');
    trigger.setAttribute('disabled', '');

    document.getElementById(id).classList.add('cards__list--current');
  });
});
