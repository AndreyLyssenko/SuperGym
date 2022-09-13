const tabsTriggers = document.querySelectorAll('.cards__trigger');
const tabs = document.querySelectorAll('.cards__list');

tabsTriggers.forEach((trigger) => {
  trigger.addEventListener('click', (evt) => {
    evt.preventDefault();
    const regexp = /\#([a-zA-Z0-9_-]+)/i;

    const id = evt.target.getAttribute('href').match(regexp)[1];

    tabs.forEach((tab) => {
      tab.classList.remove('cards__list--current');
    });

    tabsTriggers.forEach((el) => {
      el.classList.remove('cards__trigger--current');
    });

    trigger.classList.add('cards__trigger--current');

    document.getElementById(id).classList.add('cards__list--current');
  });
});
