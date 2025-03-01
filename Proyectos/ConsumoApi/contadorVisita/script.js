"use strict";

document.addEventListener("DOMContentLoaded", function () {
  let visita = localStorage.getItem("visitas");

  if (visita) {
    visita = parseInt(visita) + 1;
  } else {
    visita = 1;
  }

  localStorage.setItem("visitas", visita);
  console.log("Visitas:", visita);
});
