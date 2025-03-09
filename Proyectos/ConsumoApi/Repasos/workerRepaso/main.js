"use strict";
//Aqui tiene que ser que el hilo principal manda la información
const salida = document.getElementById("salida");

//creamos el worker
const worker = new Worker("worker.js");

// Al no haber accion solo es una funcion

function enviarDatos() {
  const numero = 15000;
  //enviamos mensaje
  worker.postMessage(numero);
}

enviarDatos();

function printearMensaje(msg) {
  let datos = msg.data;
  let ultimo = datos[datos.length - 1];
  salida.textContent = `Hola. el numero primo mas grande menor que 15000 es ${ultimo}`;
}

//Escuha el worker

worker.addEventListener("message", printearMensaje);
