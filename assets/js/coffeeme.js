"use strict";

const btnCoffeeMe = document.getElementById("btnCoffeeMe");
const syncCoffeeMe = document.getElementById("syncCoffeeMe");
const total = document.getElementById("total");

let qtdCoffee = 0;

const addCoffee = () => {
  syncCoffeeMe.classList.add("fa-spin");
  btnCoffeeMe.setAttribute("disabled", "disabled");

  setTimeout(() => {
    btnCoffeeMe.removeAttribute("disabled");
    syncCoffeeMe.classList.remove("fa-spin");
  },  5 * 60 * 1000);

  qtdCoffee += 1;

  total.innerHTML = "Total até agora: " + qtdCoffee;
};

btnCoffeeMe.addEventListener("click", addCoffee);
