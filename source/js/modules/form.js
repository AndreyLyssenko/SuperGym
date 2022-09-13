const form = document.querySelector('.communication__form').querySelector('form');
const inputPhone = form.querySelector('[name="tel"]');
const formErrorMessage = form.querySelector('.communication__message');
const re = /^[\+]?[0-9]*$/;

inputPhone.addEventListener('focus', () => {
  formErrorMessage.classList.remove('communication__message--error');
});

inputPhone.addEventListener('input', () => {
  formErrorMessage.classList.remove('communication__message--error');
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  if (!re.test(inputPhone.value)) {
    formErrorMessage.classList.toggle('communication__message--error');
  } else {
    localStorage.clear();
    localStorage.setItem('name', form.querySelector('[name="name"]').value);
    localStorage.setItem('phone', inputPhone.value);
    evt.target.submit();
  }
});
