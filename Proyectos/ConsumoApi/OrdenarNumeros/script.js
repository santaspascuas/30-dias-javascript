"use strict";
// Primero deberia seleccionarlos
// luegoe tener una funcion que caprture el evento y traerme los numeros

const caja = document.getElementById("caja");

console.log(caja);

// Aqui tendria que tener una funcion que capture el evento y se active con el evento de escribit

const valores = (event) => {
  // Hemps cometido el error de que debemos de guardar el numero en una variable
  let numeros = event.target.value.trim();

  //La cadena va a ser seguida y la voy a separar por el espacio

  let array = numeros.split(""); // Convierte el string en el array
};

caja.addEventListener("change", valores);

let ejemplo = [7, 8, 9, 4, 5, 2];

const ordenar = (array) => {
  //Aqui va a a ir comparando los valores.
  let bandera = array[0];
  for (let i = 0; i < array.length; i++) {}
};
