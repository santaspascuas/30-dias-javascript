"use strict"; // Modo de uso estricto

// Uso de arrays

const arrayVacio = [];
const fruits = ["banana", "orange", "mango", "lemon"]; // array de strings, Fruits
const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"]; // array de strings, vegetables
const animalProducts = ["milk", "meat", "butter", "yoghurt"]; // array de strings, products

// Para saber si longitud
console.log("Numero de frutas", fruits.length);
console.log(fruits);

// Un array puede tener diferentes elementos

const arrayEjemplo = [
  "Bryan",
  150,
  true,
  { pais: "España", ciudad: "Madrid" },
  { skills: ["HTML", "CSS", "JS", "React", "Python"] },
];

// Voy a recorrerlos de forma normal

for (let i = 0; i < arrayEjemplo.length; i++) {
  console.log(arrayEjemplo[i]);
}

// Recorrer de forma mas moderna. Una especie de for each
for (const elemento of arrayEjemplo) {
  console.log("For of :", elemento);
}

arrayEjemplo.forEach((elemento) => {
  // Utilizo desestructuracion para sacar las cosas de los elementos
  if (typeof elemento === "object" && !Array.isArray(elemento)) {
    const { pais, ciudad, skills } = elemento;
    if (pais && ciudad) {
      console.log(`País: ${pais}, Ciudad: ${ciudad}`);
    } else if (skills) {
      console.log("Habilidades:", skills.join(", "));
    }
  }
});

// METODOS PARA MANIPULAR LOS ARRAYS

const ejemploArray = [];

// Rellenar el array entero  con el indice. Usamos la palabra fill
const array4 = Array(4).fill("X");
console.log(array4);

// Uso de la palabra concat para concatenar.
const firstList = [1, 2, 3];
const secondList = [4, 5, 6];
// Vamos a concatenar
const thirdList = firstList.concat(secondList);
console.log(thirdList);

// Vamos a añadir la expasion de arrays
const cuartoarray = [...firstList, ...secondList]; //Hacemos la unicion con la extension.
console.log(cuartoarray);
// Obetener el tamaño con lenght
// obtener el indice con el index of
// Comprobar si existe un elemento con include

const frutaUsuario = "melon";
console.log(fruits.includes(frutaUsuario)); /// Obtengo un booleano.
//Utilizo index of

let index = fruits.indexOf(frutaUsuario);

if (index === -1) {
  console.log("Esta fruta no existe en el array");
}

// Convertir el array en strings

const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
console.log(names.toString()); // Ahora es un string normal

// Metodo para cortar arrays con slice.
console.log(names.slice(1, 4));

// Metodo para eliminar con splice
console.log(names.splice(2, 3));

// Añadir elementos a un array desde la posición final
names.push("ekkoTheNeeko");
console.log(names);

// Eliminar el ultimo elemento con pop
names.pop();
console.log(names);

// Darle la vuelta a un array con reverse
const numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers);

// Metodo de ordenar con sort
/*
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
webTechs.sort();
console.log(webTechs);
*/

///---------------------EJERCICIOS----------------------------------------
import { countries } from "./countries.js";
import { webTechs } from "./web_techs.js";

// Para que pueda funcionar la importacion. Hemos añadido en el index la opción
// de modules para que no causará error.
// Hemos cargado los modulos para poder usar el js de pasises y de websçç

console.log("Lista de los paises en otro Javascript: ", countries);
console.log("Lista de Webs en otro Javascript: ", countries);

// 2.

let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

let nuevo = text.replace(/[.,]/g, "");

// Al eliminar las comas, lo que debo de hacer es dividirlo por palabras.
// Por ello usamos split y por espacios.
// Aqui hemos usado split.
let arraytexto = nuevo.split(" ");
console.log(arraytexto);

// 3.

let shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

// Agregar al principio
let auxiliar = ["meat"];
auxiliar = auxiliar.concat(shoppingCart); // El concat devuelve un arreglo que debe de asignarse.
shoppingCart = auxiliar;

// Para agregar al final si que usamos push
shoppingCart.push("Sugar");
console.log(shoppingCart);

//Deberia hacer el array en minusculas. Debo iterar
for (let i = 0; i < shoppingCart.length; i++) {
  shoppingCart[i] = shoppingCart[i].toLocaleLowerCase();
}
// Deberia obetener el indice de donde esta miel y luego borrar
const eliminar = prompt(
  "¿Eres alergico a la miel?. Escribe miel"
).toLocaleLowerCase();

let indiceeliminado = shoppingCart.indexOf(eliminar);

if (indiceeliminado != -1) {
  shoppingCart.splice(indiceeliminado);
}
console.log(shoppingCart);
