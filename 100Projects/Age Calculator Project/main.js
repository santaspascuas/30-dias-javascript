"use strict";

// Botones de acceso

const cumple = document.getElementById("birthday");
const botones = document.getElementById("btn");
const resultado = document.getElementById("result");

const fecha = new Date();
let ano = fecha.getFullYear();

function obtenerfecha() {
  //¿Como obytengo las fechas?--event es para el evento que lo dispara.

  const datos = cumple.value; // Este es el valor en string
  let separafecha = datos.split("-");

  if (ano != separafecha[0] && ano > separafecha[0]) {
    let diferencia = ano - separafecha[0];
    resultado.textContent = `Tu edad es de ${diferencia} años`;
  } else {
    resultado.textContent = `No se puede calcular tu edad`;
  }
}

botones.addEventListener("click", obtenerfecha);
