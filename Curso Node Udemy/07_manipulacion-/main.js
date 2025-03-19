"use strict";
//alert("Hola mundo");

////Uso de filter
let estudiantes = [
  { nombre: "Bryan", edad: 25, matricula: true },
  { nombre: "Fio", edad: 25, matricula: true },
  { nombre: "kira", edad: 15, matricula: false },
  { nombre: "trisha", edad: 35, matricula: true },
  { nombre: "KaliUchi", edad: 5, matricula: false },
];

let filtrado = estudiantes.filter(
  (estudiantes) => estudiantes.edad >= 21 && estudiantes.matricula
);

// console.log(estudiantes);
console.log(filtrado);
//Filter seria mejor con la base de datos ya que tendemos muchos registros.

//reduce

let calificaciones = [3, 5, 9, 10, 15];

let suma = calificaciones.reduce(
  (acumulador, calificacion) => acumulador + calificacion,
  0
);
console.log(suma);
// console.log(suma / calificaciones.length);

let edades = [21, 21, 23, 25, 23, 43, 21, 18, 23, 23];

//Necesitamos las personas y el numero de edades
//{
//21..3
//3..2
//}

let resultado = edades.reduce((acumulador, edad) => {
  if (!acumulador[edad]) {
    //Estoy diciendo sino existe
    //Estoy diciendo que sino existe el valor lo inicialice a 1.
    acumulador[edad] = 1;
  } else {
    acumulador[edad] += 1;
  }
  return acumulador;
}, {}); // Esto segundo significa que retornara un objeto

// console.log(edades);
// console.log(resultado);

let ventas = [
  { nombre: "camiseta", precio: 15, totalVendido: 20 },
  { nombre: "camiseta", precio: 15, totalVendido: 20 },
  { nombre: "pantalon", precio: 150, totalVendido: 10 },
  { nombre: "zapatillas", precio: 27, totalVendido: 8 },
];

let totalVentas = ventas.reduce((acumulador, producto) => {
  let totalVentasuni = producto.precio * producto.totalVendido;
  acumulador[producto.nombre] = `$ ${totalVentasuni}`;
  return acumulador;
}, {});

// console.log(ventas);
console.log(totalVentas);

let estudiantesUam = [...estudiantes];

// Vamos a sacar los matriculadps u los no matriculados

let resultadoEstudiantes = estudiantesUam
  .map((estudiante) => estudiante.matricula)
  .reduce(
    (acumulador, item) => {
      //Logica
      if (item) {
        acumulador.matricula += 1;
      } else {
        acumulador.noMatriculado += 1;
      }
      return acumulador;
    },
    { matricula: 0, noMatriculado: 0 }
  );

// console.log(estudiantesUam);
// console.log(resultadoEstudiantes);

// Some----evey
// El some te busca las coas y te da un false y true.

let pruebaNumeros = [1, 2, 3, 4, 5, 6, 7];

let resultadosome = pruebaNumeros.some((numero) => numero % 2 === 0);

// console.log(pruebaNumeros);
console.log(resultadosome);

//Every

let pruebaEvery = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let resultadoevery = pruebaEvery.every((numero) => numero % 2 === 0); // Devuelve true o false

// console.log(pruebaEvery);

// Find----findIndex

//const buscaCli = clientes.find((cliente) => cliente.id === 1);

// console.log(clientes);
//console.log(buscaCli); // retorna el elemento que coincide con la busqueda.

// Filter lo que te hace es sacar un array con todas las conicidencias.

//const filterCliente = clientes.filter((cliente) => cliente.id === 1);
//console.log(filterCliente);

//FindIndez--- Nos devuelve la posición

//let posiciocliente = clientes.findIndex((cliente) => cliente.id === 2);
//console.log(posiciocliente); // Esto es la posición en la que ha encontrado con la condicion.// Puede ser util cuando queremos sacar el id y luego sacar el objeto.
// Si te devuelve la posicion, solo es cuestion de poner el indice y te saca lo que estas buscando.

///---------------------includes--------------------

let mascota = ["perro", "gato", "conejo"];

let busquedaMascota = mascota.includes("gato");
console.log(busquedaMascota);
console.log("gabriel".includes("a")); // Puedes verificar caracteres y cadenas de strings.

//Filter mas include. Combinado para hacer u buscador

let clientes = [
  { id: 1, nombre: "bryan" },
  { id: 2, nombre: "Fiorella" },
  { id: 1, nombre: "Gorka" },
  { id: 4, nombre: "Ruth" },
  { id: 5, nombre: "Cabano" },
];

function buscadorFilincli(array, parametro) {
  return array.filter((cliente) => cliente.nombre.includes(parametro));
}

console.log(buscadorFilincli(clientes, "lla")); // Debes usar el nombre correcto de la función

///-------VAMOS A VER EL METODO DE JOIN---------------------
// Unir y generar un string a partir de ka union.

let elementos = ["aire", "Tierra", "Fuego", "Agua"];

let elementosResultado = elementos.join(",");

console.log(elementosResultado);

//Vamos crear para un archivo csv

let csvGenerador = (array, separador = ",") => {
  let headers = Object.keys(array[0]).join(separador);
  let datos = array.map((elemento) => Object.values(elemento).join(separador));
  console.log(headers);
  datos.forEach((elemento) => console.log(elemento));
};

csvGenerador(clientes);

///----------Manipulacion de arreglos con Concat--------------------//

let arra1 = [1, 2, 3, 4, 5, 6];
let array2 = [6, 7, 8, 9, 10];
//El metodo concat une dos arregles y genera un array nuevo
//No modifica los array creados.

let concatenado = arra1.concat(array2);

console.log(arra1);
console.log(array2);
console.log(concatenado);

//¿como podemos saber si es mayor? Con el sort

let arrayDesordenado = [1, 10000, 21, 31, 600];

let arraysortOrdenado = arrayDesordenado.sort((a, b) => b - a);
//La resta muestra que es de menor a mayor.
console.log(arraysortOrdenado);

//Slice crea uno nuevo y corta desde donde quieres.
