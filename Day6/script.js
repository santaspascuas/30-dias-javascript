"use strict"; // Modo de uso estricto

// Ejemplo de bucle for

const receta = ["Arroz", "Pollo", "Gusiantes", "Cilantro"];
const recetaMinuscula = [];

for (let i = 0; i < receta.length; i++) {
  recetaMinuscula.push(receta[i].toLocaleLowerCase());
}
console.log(recetaMinuscula);

// Ejemplo de bucle while

let marca = 10;

while (marca > 0) {
  console.log(marca);
  marca--;
}

// Los bucles for of. Son perfecto cuando no me intersa el indice. Perfectos para arays o colecciones.
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

for (const webs of webTechs) {
  console.log(webs.toLocaleLowerCase());
}

//Ejercicios

const paises = [
  "ALBANIA",
  "BOLIVIA",
  "CANADA",
  "DENMARK",
  "ETHIOPIA",
  "FINLAND",
  "GERMANY",
  "HUNGARY",
  "IRELAND",
  "JAPAN",
  "KENYA",
];

const letrasPais = [];

for (const siglas of paises) {
  // Este for del exterior me vale porque es el que recorreo todo
  let letras = ""; // Aqui se vuelve a inicializar vacio
  for (let i = 0; i < 3; i++) {
    letras += siglas[i];
  }
  // Aqui seria cuando le añado.
  letrasPais.push(letras.toUpperCase());
}

console.log(letrasPais);

const longitudPaises = [];

for (const bandera of paises) {
  //Bucle que lea la palabra
  // El indice debe de reiniciarse cuando finaliza la iteracion
  longitudPaises.push(bandera.length);
}

console.log(longitudPaises);

const nuevo = [];

for (let i = 0; i < paises.length; i++) {
  nuevo.push([paises[i], letrasPais[i], longitudPaises[i]]);
  console.log(nuevo[i]);
}

// Primero conseguir sacar los caracteres

for (const pais of paises) {
  const longitud = pais.length; // Longitud del país
  if (
    longitud >= 4 && // Asegurarnos de que tenga al menos 4 letras
    pais[longitud - 4].toLowerCase() === "l" &&
    pais[longitud - 3].toLowerCase() === "a" &&
    pais[longitud - 2].toLowerCase() === "n" &&
    pais[longitud - 1].toLowerCase() === "d"
  ) {
    console.log(pais[longitud - 4]);
    console.log(longitud);
    console.log(pais); // Imprimir los países que terminan en "land"
  }
}

/// Ahora seria la terminación con ia

for (const pais of paises) {
  const longitud = pais.length;

  if (
    longitud >= 2 && // Establecemos el minimo de letras a buscar.
    pais[longitud - 2].toLowerCase() === "i" &&
    pais[longitud - 1].toLowerCase() === "a"
  ) {
    console.log(pais);
  }
}

// El maximo de cvaracteres

let auxilio = paises[0];

for (const pais of paises) {
  const longitud = pais.length;

  if (pais.length > auxilio.length) {
    auxilio = pais;
  }
}

console.log(auxilio);
