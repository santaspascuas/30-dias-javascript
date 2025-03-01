"use strict"; // Modo de uso estricto

/*
//Funcion de decir nombre

function funcionNombre(nombre, apellido) {
 // console.log(nombre + "-" + apellido);
}

funcionNombre("bryan", "Cuadrado");

function HelloWolrd() {
  //alert("Hola, Mundo!!!");
}
HelloWolrd();

// Funciones vacias
function NombreDetalles() {
  let firstName = "Bryan";
  let apellido = "Cuadrado";
  let objetivo = "Ser programador y trabajar en el extranjero";
  let total = firstName + " " + apellido + " " + objetivo;
  return total;
}
//console.log(NombreDetalles());

/// fUNCION NCON VARIOS VALORES = A darle un array

const ejemplo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sumatorio = 0;
function sumaArrays(array) {
  for (const indice of ejemplo) {
    sumatorio += indice;
  }
  return sumatorio;
}

console.log(sumaArrays(ejemplo));

/// Funcion felchita
sumatorio = 0;
const ejemplos12 = function (array) {
  for (const indice of ejemplo) {
    sumatorio += indice;
  }
  return sumatorio;
};

console.log(ejemplos12(ejemplo));

/// Las funciones normales aceptan un numero de paramretros ilimitado
// Podemos meterle directamemte el array y se les suma.

function sumaTodos() {
  let suma = 0;

  for (let i = 0; i < arguments.length; i++) {
    suma += arguments[i];
  }
  return suma;
}
console.log(sumaTodos(10, 20, 13, 40, 10)); // 93

// Ejemplo con la funcion flecha de paso de varios parametros sin estar declarados con anterioridad.

const sumatorios = (...args) => {
  let sum = 0;
  for (const element of args) {
    sum += element;
  }
  return sum;
};
console.log(sumatorios(15, 20, 30, 25, 10, 33, 40)); // 173

/// Ejemplo de funciones anonimas

const funcionAnonima = function () {
  console.log("Soy una funcion anonima");
};
funcionAnonima(); // Aqui esta la llamada de la función

// Ejemplo de funciones de autoinvocacion

(function (n) {
  console.log(n * n);
})(2);

// Uso de la funcion flecha.------

const cambioaMayusculas = (array) => {
  const newArray = [];

  for (const elemento of array) {
    newArray.push(elemento.toLowerCase());
  }
  return newArray;
};
const countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
console.log(cambioaMayusculas(countries));

const printFullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};

console.log(printFullName("Bryan", "Cuadrado"));

// Funciones con mensaje por defectos o variables por defecto. Sustituyen a la variable por defecto para printear la funcion

function ejemploDefecto(name = "Bryan") {
  let mensaje = `${name}, bienvenido al reto de los 30 día de javascritp`;
  return mensaje;
}
console.log(ejemploDefecto("Lobito"));
*/

///----------------------------------------EJERCICIOS------------------------------------------------------------------------------///

function NombreCompleto() {
  const nombre = "Bryan";
  const apellido = "Cuadrado";
  console.log(nombre + apellido);
}
NombreCompleto();

function fullname(nombre, apellido) {
  console.log(`${nombre} ${apellido}`);
}
fullname("Bryan", "Cuadrado");

const numero = function (num1, num2) {
  return num1 + num2;
};
console.log(numero(5, 4) + "hola");

function CalculaRectangulo(ancho, alto) {
  const area = ancho * alto;
  return area;
}

console.log("El area del rectangulo" + CalculaRectangulo(10, 20));

const prisma = function (ancho, alto, largo) {
  return 2 * (ancho + alto);
};

console.log("El area del prisma" + prisma(10, 20, 30));

function AreadelCirculo(pi, radio) {
  let area = pi * radio * radio;
  return area;
}
console.log(AreadelCirculo(15, 20));

const densidad = (masa, volumen) => masa / volumen;
console.log(densidad(5, 25)); // Expresion de funcion flecha

// función flecja bloqueada

const densidad2 = (masa, volumen) => {
  const densidad = masa / volumen;
  return densidad;
};
console.log(densidad2(5, 25)); // Salida: 0.2

function convertirCelcius(c) {
  const farenhi = (c * 9) / 5 + 32;
  return farenhi;
}
console.log(convertirCelcius(25));

// Opcion 2

const semana = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
];

function lecturaArray(array) {
  array.forEach((indice) => {
    console.log(indice);
  });
}
lecturaArray(semana);

function showDateTime() {
  const now = new Date();
  const day = now.getDate();
  const mes = now.getMonth();
  const ano = now.getFullYear();
  const hora = now.getHours();
  const min = now.getMinutes();
  return `${day}/${mes}/${ano} ${hora}:${min}`;
}
console.log(showDateTime());

function reverseArray(array) {
  let nuevo = [];
  for (let i = array.length - 1; i >= 0; i--) {
    nuevo.push(semana[i]);
  }
  return nuevo;
}

console.log(reverseArray(semana));
