"use strict"; // Modo de uso estricto

//1- Valores booleanos
let bandera = true;
let bandera2 = 3 > 4; // Esto nos dara cosas falsas.

//2- Indefinida
let firstname; // Sino le asignamos nada, sera una variable indefinida.
console.log(firstname);

//3- Valor Null

let vacio = null;
console.log(vacio);

// 4- Operadores de asignacion

let nombre = "bryan";
let apellido = "Cuadrado";
let nombrecompleto = nombre + apellido;

console.log(nombrecompleto);

//5- Operadores aritmeticos

let a = 4;
let b = 6;

let suma = a + b;
let diferencia = a - b;
let multi = a * b;
let div = a / b;

console.log(`La suma es : ${suma}, la resta es: ${diferencia},
    la multiplicacion es ${multi}, la division es: ${div}`);
