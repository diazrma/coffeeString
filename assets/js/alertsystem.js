"use strict";

const alertsystem = (msg) => {
  let div = document.createElement("div");
  div.id = "alertSystem";
  div.innerHTML = `<p>${msg}</p>`;
  document.body.appendChild(div);
  setTimeout(() => {
    div.style.visibility = "hidden";
  }, 3000);
};

export { alertsystem };
