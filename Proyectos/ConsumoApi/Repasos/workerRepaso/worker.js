"use strict";

// eL WORKER RECIBE EL MENSAKE CON ONMESSAGE

onmessage = function (data) {
  const respuesta = data.data;
  const primos = [];

  for (let i = 0; i < respuesta; i++) {
    let contador = 0;
    for (let j = 0; j <= i; j++) {
      if (i % j == 0) {
        contador++;
      }
    }

    if (contador == 2) {
      primos.push(i);
    }
  }
  //enviamos los datos

  this.postMessage(primos);
};
