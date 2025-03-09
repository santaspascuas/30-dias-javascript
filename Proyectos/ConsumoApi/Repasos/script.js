"use strict";

const suma = function (a, b) {
  const resultado = a + b;
  return resultado;
};

// console.log(suma(45, 40)); // Ejemplo de funcion anonima invocada por la variable+

// funcion flecha

const resultado = (x, y) => x + y;
// console.log(resultado(20, 20));

//Hoisting solo da con functions

// console.log(saludar());

function saludar() {
  return "Hola, mundo";
}
//Ambisto de las funciones.

var global = "Soy global";
function padre() {
  let localDad = "Soy variable local de la función padre";
  function hijo() {
    const localSon = "Soy variable local de la función hijo";
    // console.log(global);
    // console.log(localDad);
  }
  hijo();
  //console.log(localSon); // Error: localHijo is not defined
}
padre();

// Solo con una sola funcion.

const valor = document.getElementById("caja");
const boton1 = document.getElementById("boton");
const boton2 = document.getElementById("boton2");

//Obtengo valores con acciones.

function calcularIva(event) {
  const datos = parseFloat(valor.value);
  const id = event.target.id;
  if (!isNaN(datos)) {
    if (id === "boton") {
      const resultado = datos + (datos * 10) / 100;
      valor.value = resultado;
    } else {
      const resultado = datos + (datos * 21) / 100;
      valor.value = resultado;
    }
  }
}

boton1.addEventListener("click", calcularIva);
boton2.addEventListener("click", calcularIva);

//No hace falta en change para obtener el valor del input. input .value
// isNan para detectar datos. Ya que si existe el botn y por eso no es nulable

const items = [
  { item: "item1", estado: true },
  { item: "item2", estado: false },
  { item: "item3", estado: true },
  { item: "item4", estado: false },
];

// La idea es sacar los false del array
console.log(items);

//For in

let pendientes = [];

/*
for (let clave in items) {
  // Primero es un array y luego una coleccion
  //console.log(items[clave].estado);

  if (items[clave].estado === false) {
    pendientes.push(items[clave]);
  }
}
console.log(pendientes);
*/

for (let i = 0; i < items.length; i++) {
  if (items[i].estado === false) {
    pendientes.push(items[i]);
  }
}

///Vamos a hacer el contador de visitas

addEventListener("DOMContentLoaded", function () {
  let visitas = this.localStorage.getItem("visitas");
  visitas = parseInt(visitas) + 1;
  this.localStorage.setItem("visitas", visitas);
  console.log(visitas);
});
