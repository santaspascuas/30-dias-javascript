"use strict";

//Selectores
const boton = document.getElementById("boton");
const arriba = document.getElementById("salida");
const abajo = document.getElementById("salida2");

//Creamos el objeto worker

const worker = new Worker("worker.js");

///Funciones

function printearMen() {
  const mensaje = "Este mensaje es para decir que no bloqueo cosas";
  arriba.textContent = mensaje;
}

function muestraMen(msg) {
  abajo.textContent = msg.data;
}

//Evento
boton.addEventListener("click", printearMen);
worker.addEventListener("message", muestraMen);
