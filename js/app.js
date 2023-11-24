const input = document.querySelector('#names');
const enter = document.querySelector('.label');
let partner = document.querySelector('.name');
let error = document.querySelector('.alert');
const giver = document.querySelector('.givers-name');
const clear = document.querySelector('.clear-btn');
const form = document.querySelector('form').addEventListener('click', (e) => {
  e.preventDefault();
});

const query = () => {
  removeLabel();
  if (input.value === 'othniel') {
    partner.innerText = `hello ${input.value} you're paired with mummy`;
    displayAlert('Match made', 'success');
    giver.innerText = `Hey ${input.value}`;
  } else if (input.value === 'kezia') {
    partner.innerText = `hello ${input.value} you're paired with idris`;
    displayAlert('Match made', 'success');
    giver.innerText = `Hey ${input.value}`;
  } else if (input.value === 'bernice') {
    partner.innerText = `hello ${input.value} you're paired with othniel`;
    displayAlert('Match made', 'success');
    giver.innerText = `Hey ${input.value}`;
  } else if (input.value === 'kachuwa') {
    partner.innerText = `hello ${input.value} you're paired with simon`;
    displayAlert('Match made', 'success');
    giver.innerText = `Hey ${input.value}`;
  } else if (input.value === 'mummy') {
    partner.innerText = `hello ${input.value} you're paired with kachuwa`;
    displayAlert('Match made', 'success');
    giver.innerText = `Hey ${input.value}`;
  } else if (input.value === 'simon') {
    partner.innerText = `hello ${input.value} you're paired with lois`;
    displayAlert('Match made', 'success');
    giver.innerText = `Hey ${input.value}`;
  } else if (input.value === 'idris') {
    partner.innerText = `hello ${input.value} you're paired with kezia`;
    displayAlert('Match made', 'success');
    giver.innerText = `Hey ${input.value}`;
  } else if (input.value === 'lois') {
    partner.innerText = `hello ${input.value} you're paired with bernice`;
    displayAlert('Match made', 'success');
    giver.innerText = `Hey ${input.value}`;
  } else {
    displayAlert(`You're not part of the family ${input.value}`, 'danger');
    // error.innerText = `You're not part of the family ${input.value}`;
    input.value = '';
    partner.innerText = '';
    giver.innerText = '';
  }
  input.value = '';
};

// displaying alert
const displayAlert = (text, action) => {
  error.textContent = text;
  error.classList.add(`alert-${action}`);

  // remove alert
  setTimeout(() => {
    error.textContent = '';
    error.classList.remove(`alert-${action}`);
  }, 1000);
};

// remove label
const removeLabel = () => {
  if (input.value !== '') {
    enter.innerText = '';
  }
};

// clear fields
const reset = () => {
  input.value = '';
  partner.innerText = '';
  giver.innerText = '';
};

document.querySelector('.btn').addEventListener('click', query);
clear.addEventListener('click', reset);
