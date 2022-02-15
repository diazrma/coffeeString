"use strict";

const btnDarkMode = document.getElementById("btnDarkMode");
const slideDarkMode = document.getElementById("slideDarkMode");
const container = document.getElementById("container");

document.getElementById('btnCoffeeBreak').click();

btnDarkMode.addEventListener("click", function () {
  if (this.checked) {
    container.style.backgroundColor = "#000000";
    container.style.color = "#ffffff";
    slideDarkMode.style.backgroundColor ="#FFFF00"
    
  } else {
    container.style.backgroundColor = "#ffffff";
    container.style.color = "#000000";
    slideDarkMode.style.backgroundColor ="#cccccc"
    
  }
});
