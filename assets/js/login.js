"use strict";
import {
  auth,
  signInWithEmailAndPassword,
  signInWithPopup,
  provider,
  GoogleAuthProvider,
} from "./authentication.js";
import { alertsystem } from "./alertsystem.js";

const email = document.getElementById("userLogin");
const password = document.getElementById("userPassword");
const formLogin = document.getElementById("login");
const googleButton = document.getElementById("google-button");

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

googleButton.addEventListener("click", function () {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      const user = result.user;
      //displayName uid photoURL email accessToken
      // console.log(token);
      // console.log(user.accessToken);
      console.log(user.photoURL)
      const userInfo = [];
      userInfo[0] = [user.photoURL,user.displayName, user.email, user.accessToken ];
      localStorage.setItem('userInfo',JSON.stringify(userInfo[0]));
      window.location.href = "../dashboard.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      const email = error.email;

      const credential = GoogleAuthProvider.credentialFromError(error);

      console.log(error.code);
    });
});

const btnRegisterLogin = document.getElementById("btnRegisterLogin");

btnRegisterLogin.addEventListener("click", () => {
  window.location.href = "register.html";
});

// cookies
(() => {
  if (!localStorage.consentCookies) {
    document.querySelector(".box-cookies").classList.remove("hide");
  }

  const acceptCookies = () => {
    document.querySelector(".box-cookies").classList.add("hide");
    localStorage.setItem("consentCookies", "accept");
  };

  const btnCookies = document.querySelector(".btn-cookies");

  btnCookies.addEventListener("click", acceptCookies);
})();
