"use strict";

//En teoria no haria falta recibir nada porque lo disparo

const numero = 15;
const primos = [];

// funcion de primo

for (let i = 0; i < numero; i++) {
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

postMessage(primos);
