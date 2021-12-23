/* eslint-disable no-unused-vars */

// Mobile

const form = document.querySelector('.form-element');
const message = 'Email must contain only <br> lower case characters';

function showMessage(input, message) {
  const msg = document.querySelector('.validation-msg');
  msg.innerHTML = `<p class='error-msg'>${message}</p>`;
}

function validateEmail(input) {
  const value = input.toLowerCase();
  if (value.localeCompare(input) === 0) {
    return true;
  }
  return false;
}

form.addEventListener('submit', (event) => {
  const msg = document.querySelector('.validation-msg');
  event.preventDefault();
  const input = form.elements[1];
  const emailValid = validateEmail(input.value);
  if (emailValid) {
    msg.remove();
    form.submit();
    form.reset();
  } else {
    showMessage(input, message, false);
  }
});

// Desktop

const mediaQuery = window.matchMedia('( min-width: 992px )');

function showMessage(input, message) {
  const msg = document.querySelector('.validationDesk-msg');
  msg.innerHTML = `<p class="error-msg">${message}</p>`;
}

function validateEmail(input) {
  const value = input.toLowerCase();
  if (value.localeCompare(input) === 0) {
    return true;
  }
  return false;
}

if (mediaQuery.matches) {
  const form = document.querySelector('.formDesk-element');
  const message = 'Email must contain only <br> lower case characters';

  form.addEventListener('submit', (event) => {
    const msg = document.querySelector('.validationDesk-msg');
    event.preventDefault();
    const input = form.elements[1];
    const emailValid = validateEmail(input.value);
    if (emailValid) {
      msg.remove();
      form.submit();
      form.reset();
    } else {
      showMessage(input, message, false);
    }
  });
}
