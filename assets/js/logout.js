"use strict";

import { auth, signOut } from "./authentication.js";
import { alertsystem } from "./alertsystem.js";

const logout = document.getElementById("logout");

logout.addEventListener("click", function () {

    signOut(auth).then(() => {
        alertsystem("Você não está mais logado")
      }).catch((error) => {
        alertsystem("error")
      });
      
});
