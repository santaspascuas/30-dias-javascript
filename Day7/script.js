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

function fullname(nombre, apellido) {
  console.log(`${nombre} ${apellido}`);
}
fullname("Bryan", "Cuadrado");

const suma = function (num1, num2) {
  let suma = num1 + num2;
  return suma;
};
console.log(suma(5, 4));

//Area de un triangulo

function areaTriangulo(base, altura) {
  const area = base * altura;
  return area;
}

console.log(areaTriangulo(10, 5));

//Funcion  del IMC

// Función del IMC
function imc(peso, altura) {
  const imc = peso / (altura * altura); // Fórmula correcta
  return imc;
}

// Llamada a la función
const valor = imc(95, 1.7); // Altura correctamente escrita

// Clasificación según el IMC
if (valor >= 30) {
  console.log("Está obeso");
} else if (valor < 18.5) {
  console.log("Está bajo de peso");
} else if (valor >= 25 && valor < 30) {
  console.log("Tiene sobrepeso");
} else if (valor >= 18.5 && valor < 25) {
  console.log("Normal");
}

const rest1 = {
  name: "Restaurante faisan",
  numerodeClientes: 25,
  categorias: ["focaccia", "ensalada"],
  servicio: ["desayunos", "comidas", "cenas"],
};

for (let indice in rest1) {
  console.log(indice);
}

const nuevo = rest1.categorias;

console.log(nuevo);

for (let indice in rest1) {
  if (indice === "categorias" || indice === "servicio") {
    console.log(`${indice}:`, rest1[indice]);
  }
}
