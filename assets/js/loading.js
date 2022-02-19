"use strict";

const overlay = document.getElementById("overlay");

const loading = () => {
  setTimeout(() => {
    overlay.style.display = "none";
  }, 500);
};

export { loading };
