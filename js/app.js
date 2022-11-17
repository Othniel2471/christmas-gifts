const input = document.querySelector("input");
let partner = document.querySelector(".name");
let error = document.querySelector(".error");
const giver = document.querySelector(".givers-name");
const form = document.querySelector("form").addEventListener("click", (e) => {
  e.preventDefault();
});

const query = () => {
  if (input.value === "bernice") {
    partner.innerText = "idris";
    giver.innerText = `Hey ${input.value}`;
  } else if (input.value === "idris") {
    partner.innerText = "kachuwa";
    giver.innerText = `Hey ${input.value}`;
  } else if (input.value === "kachuwa") {
    partner.innerText = "mummy";
    giver.innerText = `Hey ${input.value}`;
  } else if (input.value === "simon") {
    partner.innerText = "othniel";
    giver.innerText = `Hey ${input.value}`;
  } else if (input.value === "mummy") {
    partner.innerText = "hello mummy you're getting a gift for simon";
  } else if (input.value === "othniel") {
    partner.innerText = "hello othniel you're getting bernice a gift";
    giver.innerText = `Hey ${input.value}`;
  } else {
    error.innerText = `You're not part of the family ${input.value}`;
    input.value = "";
    partner.innerText = "";
  }
};
document.querySelector(".btn").addEventListener("click", query);
