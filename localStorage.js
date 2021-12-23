const name1 = document.querySelector('.name1');
const email1 = document.querySelector('.email1');
const message1 = document.querySelector('.msg1');

const storeValues = (name1, email1, message1) => {
  const dataObject = JSON.stringify({ name1, email1, message1 });
  localStorage.setItem('dataObject', dataObject);
};

function populateStorage() {
  const formValues = JSON.parse(localStorage.getItem('dataObject'));
  if (formValues) {
    name1.value = formValues.name1;
    email1.value = formValues.email1;
    message1.value = formValues.message1;
  }
}

function getValues() {
  name1.addEventListener('input', () => storeValues(name1.value, email1.value, message1.value));
  email1.addEventListener('input', () => storeValues(name1.value, email1.value, message1.value));
  message1.addEventListener('input', () => storeValues(name1.value, email1.value, message1.value));
}

populateStorage();
getValues();

// Desktop

const mediaQuery = window.matchMedia( '( min-width: 992px )' );

if ( mediaQuery.matches ) {
const name2 = document.querySelector('#my-name');
const email2 = document.querySelector('#my-mail');
const message2 = document.querySelector('#my-msg');

const storeDeskValues = (name2, email2, message2) => {
  const dataObject = JSON.stringify({ name2, email2, message2 });
  localStorage.setItem('dataObject', dataObject);
};

function populateDeskStorage() {
  const formDeskValues = JSON.parse(localStorage.getItem('dataObject'));
  if (formDeskValues) {
    name2.value = formDeskValues.name2;
    email2.value = formDeskValues.email2;
    message2.value = formDeskValues.message2;
  }
}

function getDeskValues() {
  name1.addEventListener('input', () => storeDeskValues(name2.value, email2.value, message2.value));
  email1.addEventListener('input', () => storeDeskValues(name2.value, email2.value, message2.value));
  message1.addEventListener('input', () => storeDeskValues(name2.value, email2.value, message2.value));
}
}

populateDeskStorage();
getDeskValues();
