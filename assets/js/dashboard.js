"use strict";
import { loading } from "./loading.js";

loading();

const userInfo = document.getElementById("userInfo");

if (localStorage.getItem("userInfo")) {
  let userInfos = JSON.parse(localStorage.getItem("userInfo"));
  userInfo.innerHTML = `
  <div class="profile">
    <img src="${userInfos[0]}" class="avatar">
    <div class="info">
        <div class="row"><span> Nome: </span> ${userInfos[1]}</div>
        <div class="row"><span> E-mail: </span> ${userInfos[2]}</div>
    </div>   
</div>`;
}
