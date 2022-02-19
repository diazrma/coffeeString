"use strict";

import { auth } from "./authentication.js";
import { alertsystem } from "./alertsystem.js";

auth.onAuthStateChanged(function (user) {
  if (window.location.href.indexOf("home") > -1) {
    if (!user) {
      localStorage.setItem('userInfo','');
      alertsystem("Você precisa estar logado!",3000);
      setTimeout(function () {
        window.location.href = "./";
      }, 2000);
    }
  } else {
    if (user) {
      alertsystem(`Você já está logado como ${user.displayName}`,3000);
      document.getElementById("userLogin").value = user.email;
      setTimeout(function () {
        window.location.href = "./home.html";        
      }, 2000);
    }
  }
});
