"use strict";

import { ref, database, child, onValue } from "./firebase.js";

const configuracoes = ref(database, "configuracoes");

const lpogOptions = child(configuracoes, "linguagens");
onValue(lpogOptions, (snapshot) => {
  snapshot.forEach((child) => {
    let selectedLp = document.getElementById("lp");

    selectedLp.innerHTML =
      selectedLp.innerHTML +
      `<option value="${child.key}">${child.val()}</option>`;
  });
});

const btnSubmitLogin = document.getElementById("btnSubmitLogin");

btnSubmitLogin.addEventListener("click", () => {
  window.location.href = "index.html";
});
