"use strict";
import { auth, signInWithEmailAndPassword } from "./authentication.js";
import { alertsystem } from "./alertsystem.js";
import config from "../../dotenv.json" assert { type: "json" };

const email = document.getElementById("userLogin");
const password = document.getElementById("userPassword");
const formLogin = document.getElementById("login");
const googleButton =document.getElementById('google-button');

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

googleButton.addEventListener("click", function() {

  OAuth.initialize(config.OAuth);
  
  OAuth.popup('google').then(google => {
    console.log('google:',google);
    google.me().then(data => {
      console.log(data)
     
    });
    google.get('/oauth2/v3/userinfo').then(data => {
      console.log('self data:', data);
    })
  });
});

const btnRegisterLogin = document.getElementById("btnRegisterLogin");

btnRegisterLogin.addEventListener("click", () => {
  window.location.href = "register.html";
});


