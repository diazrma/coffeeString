"use strict";
import { auth, signInWithEmailAndPassword } from "./authentication.js";
import { alertsystem } from "./alertsystem.js";

const email = document.getElementById("userLogin");
const password = document.getElementById("userPassword");
const formLogin = document.getElementById("login");

const login = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        //user.uid
         window.location.href="../dashboard.html"
    })
    .catch((error) => {
      alertsystem('Usuário ou senha inválidos');
    });
};

formLogin.addEventListener("submit", function (e) {
  e.preventDefault();
  login(email.value, password.value);
});

const btnRegisterLogin = document.getElementById("btnRegisterLogin");

btnRegisterLogin.addEventListener("click", () => {
  window.location.href = "register.html";
});
