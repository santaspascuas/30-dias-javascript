"use strict";

//selector
const data = document.getElementById("lista");
const ordenadosLista = document.getElementById("ordenados");

//Ahora el worker
const myWorker = new Worker("worker.js");

const obtenerDatos = function (event) {
  const datos = event.target.value;
  //Aqui le pasaremos el mensaje del worker
  myWorker.postMessage(datos);
};

function printeaOrdenados(msg) {
  //Lo pone en el ouput
  ordenadosLista.textContent = msg.data;
}

data.addEventListener("change", obtenerDatos); //Mi selector escuchando
