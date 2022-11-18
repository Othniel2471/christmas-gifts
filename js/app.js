const input = document.querySelector("#names");
const enter = document.querySelector(".label");
let partner = document.querySelector(".name");
let error = document.querySelector(".alert");
const giver = document.querySelector(".givers-name");
const clear = document.querySelector(".clear-btn");
const form = document.querySelector("form").addEventListener("click", (e) => {
  e.preventDefault();
});

const query = () => {
  removeLabel();
  if (input.value === "bernice") {
    partner.innerText = "idris";
    displayAlert("Match made", "success");
    giver.innerText = `Hey ${input.value}`;
  } else if (input.value === "idris") {
    partner.innerText = "kachuwa";
    displayAlert("Match made", "success");
    giver.innerText = `Hey ${input.value}`;
  } else if (input.value === "kachuwa") {
    partner.innerText = "mummy";
    displayAlert("Match made", "success");
    giver.innerText = `Hey ${input.value}`;
  } else if (input.value === "simon") {
    partner.innerText = "othniel";
    displayAlert("Match made", "success");
    giver.innerText = `Hey ${input.value}`;
  } else if (input.value === "mummy") {
    partner.innerText = "hello mummy you're getting a gift for simon";
    displayAlert("Match made", "success");
  } else if (input.value === "othniel") {
    partner.innerText = "hello othniel you're getting bernice a gift";
    displayAlert("Match made", "success");
    giver.innerText = `Hey ${input.value}`;
  } else if (input.value === "") {
    displayAlert("please enter name", "danger");
  } else {
    displayAlert(`You're not part of the family ${input.value}`, "danger");
    // error.innerText = `You're not part of the family ${input.value}`;
    input.value = "";
    partner.innerText = "";
    giver.innerText = "";
  }
};

// displaying alert
const displayAlert = (text, action) => {
  error.textContent = text;
  error.classList.add(`alert-${action}`);

  // remove alert
  setTimeout(() => {
    error.textContent = "";
    error.classList.remove(`alert-${action}`);
  }, 1000);
};

// remove label
const removeLabel = () => {
  if (input.value !== "") {
    enter.innerText = "";
  }
};

// clear fields
const reset = () => {
  input.value = "";
  partner.innerText = "";
  giver.innerText = "";
};

document.querySelector(".btn").addEventListener("click", query);
clear.addEventListener("click", reset);
