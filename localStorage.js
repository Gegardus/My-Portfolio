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

const name2 = document.querySelector('#my-name');
const email2 = document.querySelector('#my-mail');
const message2 = document.querySelector('#my-msg');

const storeValues2 = (name2, email2, message2) => {
  const dataObject2 = JSON.stringify({ name2, email2, message2 });
  localStorage.setItem('dataObject2', dataObject2);
};

function populateStorage2() {
  const formValues2 = JSON.parse(localStorage.getItem('dataObject2'));
  if (formValues2) {
    name2.value = formValues2.name2;
    email2.value = formValues2.email2;
    message2.value = formValues2.message2;
  }
}

function getValues2() {
  name2.addEventListener('input', () => storeValues2(name2.value, email2.value, message2.value));
  email2.addEventListener('input', () => storeValues2(name2.value, email2.value, message2.value));
  message2.addEventListener('input', () => storeValues2(name2.value, email2.value, message2.value));
}

populateStorage2();
getValues2();
