"use strict";

import { auth } from "./authentication.js";
import { alertsystem } from "./alertsystem.js";

const overlay = document.getElementById("overlay");
auth.onAuthStateChanged(function (user) {
  if (window.location.href.indexOf("dashboard") > -1) {
    if (!user) {
        localStorage.setItem('userInfo','');
      overlay.style.display = "none";
      alertsystem("Você precisa estar logado!");
      setTimeout(function () {
        window.location.href = "./";
      }, 2000);
    }
  } else {
    if (user) {
      alertsystem(`Você já está logado como ${user.displayName}`);
      document.getElementById("userLogin").value = user.email;
      setTimeout(function () {
        window.location.href = "./dashboard.html";
      }, 2000);
    }
  }
});
