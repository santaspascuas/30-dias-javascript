"use strict"; // Modo de uso estricto

// 1-------------

//const edad = parseInt(prompt("Ingresa tu edad"));
/*
if (isNaN(edad)) {
  alert("Solo valido numeros");
}
  */
/*
if (edad > 18) {
  console.log("Tiene la edad suficiente para conducir");
} else {
  console.log(`Te falta ${18 - edad} años  para tener carnet`);
}

const miedad = 29;

if (edad > miedad) {
  console.log(` Eres ${edad - miedad} años  mayor que yo`);
} else if (edad < miedad) {
  console.log(`soy  ${miedad - edad}  años mayor que tu`);
} else {
  console.log("Somo de la misma edad");
}
*/
let a = 4;
let b = 3;

if (a > b) {
  console.log(`${a} es mayor que ${b}`);
} else if (a < b) {
  console.log(` ${b} es mayor que ${a}`);
}

a > b
  ? console.log(`${a} es mayor que ${b}`)
  : console.log(` ${b} es mayor que ${a}`);

///---------------------------------------//

/*
const puntuacion = parseInt(prompt("Dime, por favor, tu puntuacion"));

if (puntuacion >= 80 && puntuacion <= 100) {
  console.log("La puntuacion obtenida es : A");
} else if (puntuacion >= 70 && puntuacion <= 89) {
  console.log("La puntuacion obtenida es : B");
} else if (puntuacion >= 60 && puntuacion <= 69) {
  console.log("La puntuacion obtenida es : C");
} else if (puntuacion >= 50 && puntuacion <= 59) {
  console.log("La puntuacion obtenida es : d");
} else if (puntuacion >= 0 && puntuacion <= 49) {
  console.log("La puntuacion obtenida es : F");
}
*/

/////--------- Como plantear el siguiente ejercicio ----------///
/*
//Recibo por promt el meS
const estacion = prompt(
  "Introduce el mes para saber la estacion"
).toLocaleLowerCase();

// Ahora deberiamos comparar donde esta.

if (
  estacion === "enero" ||
  estacion === "diciembre" ||
  estacion === "febrero"
) {
  alert("La temporada es Invierno");
} else if (
  estacion === "septiembre" ||
  estacion === "octubre" ||
  estacion === "noviembre"
) {
  alert("La temporada es Otoño");
} else if (
  estacion === "marzo" ||
  estacion === "abril" ||
  estacion === "mayo"
) {
  alert("La temporada es Primavera");
} else if (
  estacion === "Junio" ||
  estacion === "Julio" ||
  estacion === "agosto"
) {
  alert("La temporada es Verano");
}
*/

const dia = prompt(
  "Introduce el dia para saber donde cojones estas"
).toLocaleLowerCase();
console.log(dia);
const laboral = ["lunes", "martes", "miercoles", "jueves", "viernes"];
// Valoramos si se encuentra dentro del array
laboral.includes(dia)
  ? console.log(`el ${dia} es una fucking dia laborable`)
  : console.log(`el ${dia} es un dia para librar y ser un monje programador`);

const mes = prompt("Introduce un mes:").toLowerCase(); // Convertir a minúsculas

// Listas de meses según la cantidad de días
const meses31 = [
  "enero",
  "marzo",
  "mayo",
  "julio",
  "agosto",
  "octubre",
  "diciembre",
];
const meses30 = ["abril", "junio", "septiembre", "noviembre"];
const febrero = "febrero";

if (meses31.includes(mes)) {
  alert(`${mes.charAt(0).toUpperCase() + mes.slice(1)} tiene 31 días.`);
} else if (meses30.includes(mes)) {
  alert(`${mes.charAt(0).toUpperCase() + mes.slice(1)} tiene 30 días.`);
} else if (mes === febrero) {
  alert(`${mes.charAt(0).toUpperCase() + mes.slice(1)} tiene 28 días.`);
} else {
  alert("Mes no válido. Por favor, introduce un mes correcto.");
}
