"use strict";
import { auth, signInWithEmailAndPassword } from "./authentication.js";
import { alertsystem } from "./alertsystem.js";

const email = document.getElementById("userLogin");
const password = document.getElementById("userPassword");
const formLogin = document.getElementById("login");

const login = (email, password) => {
  if (email == "" || password == "") {
    alertsystem("Preencha todos os campos!");
  } else {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        //user.uid
        window.location.href = "../dashboard.html";
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/invalid-email":
            alertsystem("E-mail inválido!");
            break;
          case "auth/user-not-found":
            alertsystem("Usuário não encontrado!");
            break;
          default:
            alertsystem("Preencha todos os campos!");
        }
        console.log(error.code);
      });
  }
};

formLogin.addEventListener("submit", function (e) {
  e.preventDefault();
  login(email.value, password.value);
});

const btnRegisterLogin = document.getElementById("btnRegisterLogin");

btnRegisterLogin.addEventListener("click", () => {
  window.location.href = "register.html";
});
