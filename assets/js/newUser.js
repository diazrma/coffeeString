"use strict";

import { auth, createUserWithEmailAndPassword } from "./authentication.js";
import { alertsystem } from "./alertsystem.js";

const email = document.getElementById("userLogin");
const password = document.getElementById("userPassword");
const formRegister = document.getElementById("register");

const newUser = (email, password) => {
    if (email == "" || password == "") {
        alertsystem("Preencha todos os campos!");
        
        
      } else {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alertsystem("Cadastrado com sucesso!");
    })
    .catch((error) => {
      switch (error.code) {
        case "auth/invalid-email":
          alertsystem("E-mail inválido");
          break;
        case "auth/weak-password":
          alertsystem("Senha com minímo de 6 caracteres!");
          break;
        case "auth/email-already-in-use":
          alertsystem("Usuário já cadastrado em nosso sistema!");
          break;
        default:
          alertsystem("Preencha todos os campos!");
      }
      console.log(error.code);
    });
}
};

formRegister.addEventListener("submit", function (e) {
  e.preventDefault();
  newUser(email.value, password.value);
});
