"use strict";
//Llamar a una funcion dentro de otra, Callbacks

// const suma = (a, b, cb) => {
//   cb(a + b);
//   //cb se trata de una funcion que se pasa como parametro-
// };

// suma(1, 2, (resultado) => {
//   console.log(resultado);
// });

//Podemos reescribirlos.

const suma = (a, b, cb) => cb(a + b);

const imprimir = (data) => console.log(data);

suma(1, 2, imprimir);

//Vamos a simular que cada x tiempo me retorne la informaciuón en un callback

const getData = (cb, cbError) => {
  if (false) {
    setTimeout(() => {
      console.log("Cada tres segundo");
      cb({
        nombre: "Bryan",
        apellido: "Cuadrado",
      });
    }, 3000);
  } else {
    cbError = new Error("No se ha podido obtener datos");
  }
};

const imprimirData = (data) => console.log(data);
const errorHandler = (error) => console.log(error);

getData(imprimirData, errorHandler);
