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
