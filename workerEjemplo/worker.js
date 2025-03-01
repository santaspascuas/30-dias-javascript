"use strict";
//La logica de solucion del problema
// Primero gestionamos la logica aqui
//Hemos pasado por mensaje aqui los datos y lo recogemos con onmmesage

onmessage = function (datos) {
  //He enviado los datos en un mensaje.
  let valores = datos.data;
  //Trasnformo en un array para ordenadors
  let ordenados = valores.split("");
  //deberiamos mandar la solucion al index.

  this.postMessage(ordenados.sort());
};
