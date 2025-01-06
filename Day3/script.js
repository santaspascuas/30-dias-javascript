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

// 6- Comparacion

console.log(3 > 2);
console.log(3 != 0);
console.log(0 === false);
console.log("mango".length == "avocado".length); // Falso

//7- Operadores de comparacion

//const check = 4 > 3 && 10 > 4;// True y true = true
//const check = 4 > 3 && 10 < 5; // True y false = false;
//const check = 4 < 3 && 10 < 5; // Falso y falso = falso;

// Ahora con operador de O ||

//const check = 4 > 3 || 5 > 2; //True || True = True
//const check = 4 > 3 || 10 < 5; // True || false = True;
//const check = 4 < 3 || 10 < 5; // Falso || Falso = Falso;

// Ahora la negacion

//let check = !(4 > 3); // True
//let check = !(4 > 3); // Falso

// 8-- Incrementos y decrementos

let contador = 0;
console.log(++contador);

let decremento = 10;
console.log(--decremento);

let contador2 = 0;
for (let i = 0; i < 10; i++) {
  ++contador2;
}
console.log(contador2);

// 9-------Operadores Ternarios

let condicion = true;
// Vamos ahora a declarar el ternario
condicion
  ? console.log("Si es verdadero entrará aqui")
  : console.log("Sino entrara aqui");

condicion = false;
condicion
  ? console.log("Ahora cambiamos a falso y no entrara aqui")
  : console.log("Entrará aqui porque hemos cambiado a falso");

let numero = 4;

numero > 0
  ? console.log("El numero es mayor que 0")
  : console.log("El numero es menor que 0");

// 10 ---- Interaccion con el navegador

//alert("Bienvenido a la web"); // Mando una alerta en el navegador

const agree = confirm("¿Estas seguro de eliminar esto?"); // Una especie de confirmación. Podria usarse para las cookies
console.log(agree);

// Objetos Date para manejar las fechas y horas

const fecha = new Date();

console.log(fecha.getFullYear()); // Obtenemos con el objeto date toda la fecha
console.log(fecha.getMonth()); // Obtengo el mes en formato numero. 0 de Enero
console.log(fecha.getDate()); // Obtenego el dia del mes en el que estou.
console.log(fecha.getHours()); // Obtenemos las horas
console.log(fecha); // Obtengo la fecha completa

// Formate para ontener toda la fecha a como quieres

const ano = fecha.getFullYear(); // Tenemos el año
const mes = fecha.getMonth() + 1; // El mes mas 1
const dia = fecha.getDay(); // Obtenemos el dia
const hora = fecha.getHours();
const minutes = fecha.getMinutes();

//Todo formateado a como quieres:

console.log(`0${dia}/0${mes}/${ano} ${hora}:${minutes}`);

///------------------EJERCICIOS--------------------------------------------//

const firstnames = "Bryan";
const lastNames = "Cuadrado";
const ciudad = "Madrid";
const edad = 28;
const isMarried = false;
const year = 2025;

console.log(typeof firstnames);
console.log(typeof lastNames);
console.log(typeof ciudad);
console.log(typeof edad);
console.log(typeof isMarried);
console.log(typeof year);

console.log(typeof "10" === 10); // Falso
console.log(parseInt(9.8) === 10); // Falso

const var1 = 10 > 4;
const frase = "mundo";

console.log(var1);
console.log(frase === "mundo");
console.log(ciudad.length === "bryans".length);

console.log(year > 2030);
console.log(isMarried);
console.log(ciudad === "tres cantos");

console.log(4 === "4");

/// Pide al usuario el ingreso de las cosas
/*
const base = prompt("Ingresa la base del triangulo");
const altura = prompt("Ingresa la altura");
const area = parseInt(base) * parseInt(altura);
console.log(area);
*/

const nombres2 = prompt("Introduce tu nombre");

//uso el ternario

nombres2.length > 7
  ? console.log("El nombre tiene mas de 7 letras")
  : console.log("El nombre tiene menos de 7 letras");
