"use strict";

const alertsystem = (msg,timer) => {
  let div = document.createElement("div");
  div.id = "alertSystem";
  div.innerHTML = `<p>${msg}</p>`;
  document.body.appendChild(div);
  setTimeout(() => {
    div.style.visibility = "hidden";
  }, timer);
};

export { alertsystem };
