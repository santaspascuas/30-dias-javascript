"use strict";

//Selector

const contenedor = document.getElementById("caja");

//Uso de funciones

//1---Mensaje de bienvenida con sweet alert
document.addEventListener("DOMContentLoaded", function () {
  Swal.fire({
    title: "Carga del html completa!. Prueba 7",
    icon: "success",
    draggable: true,
  });
});

//1 Funcion de printear array

function PrintearArray(array) {
  const enunciado = document.createElement("h2");
  enunciado.textContent = "Ejercicio1";

  const lista = document.createElement("ul");
  for (let i = 0; i < array.length; i++) {
    let li = document.createElement("li");
    li.textContent = `Lista creada de forma dinamica ---->${array[i]}`;
    li.id = `id${i}`;

    lista.appendChild(li);
  }
  //faltaria unir al contenedor
  //enunciado
  contenedor.appendChild(enunciado);

  //-----
  contenedor.appendChild(lista);
}
let nuevo = ["Ponemos", "Fisica", "o", "Quimica"];
PrintearArray(nuevo);

//2

function crearfecha() {
  const salida = document.getElementById("ej2");
  let fecha = new Date();
  let dia = fecha.getDate().toString().padStart(2, "0");
  let mes = fecha.getMonth().toString().padStart(2, "0");
  let anio = fecha.getFullYear();
  let hora = fecha.getHours();
  let minute = fecha.getMinutes();
  const formatop = `${dia}/${mes}/${anio}  ${hora}: ${minute}`;
  salida.textContent = formatop;
}

crearfecha();
let numero = [1, 2, 3, 4, 5];
const arrayreves = (array) => {
  let reves = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reves.push(array[i]);
  }
  return reves;
};

console.log(arrayreves(numero));

/// 3------------------------------------

function sumaArrays(inicio, fin) {
  let suma = 0;
  for (let i = inicio; i < fin; i++) {
    suma += i;
  }
  return suma;
}
let resultado = sumaArrays(5, 10);
console.log(resultado);

///4-----------

function cuentaPares(numero) {
  let contarPares = 0;
  let contarImpares = 0;
  for (let i = 0; i < numero; i++) {
    if (i % 2 === 0) {
      contarPares++;
    } else {
      contarImpares++;
    }
  }
  return `El numero de pares: ${contarPares} y el numero de impares :${contarImpares}`;
}

console.log(cuentaPares(70));

function userIdGenerator() {
  const datos = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  let limite = 7;

  let id = [];
  let random = 0;
  let bandera = 0;

  for (let i = 0; i < limite; i++) {
    bandera = i;
    random = Math.floor(Math.random() * datos.length);
    if (bandera < 3) {
      id.push(datos[random]);
    } else {
      random = Math.floor(Math.random() * numeros.length); // Índice válido para `numeros`
      id.push(numeros[random]);
    }
  }

  return id;
}

const datos = userIdGenerator();

console.log(datos);

function generarIdlvl3(longitud, repetido) {
  const datos = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  let id = "";
  let array = [];
  let random = 0;
  let bandera = 0;
  for (let i = 0; i < repetido; i++) {
    id = " ";
    console.log("Las filas");
    for (let j = 0; j < longitud; j++) {
      if (j < 3) {
        let random = Math.floor(Math.random() * datos.length);
        id += datos[random];
      } else {
        let random = Math.floor(Math.random() * numeros.length);
        id += numeros[random];
      }
    }
    array.push(id);
  }
  return array;
}

const arrayDatos = generarIdlvl3(5, 3);

console.log(arrayDatos);

function mezclaArray(array) {
  for (let i = 0; i < array.length; i++) {
    //Genero el random.
    let random = Math.floor(Math.random() * array.length);
    //eSTABA SOBREESCRIBIENDO
    if (i != random) {
      let aux = array[i];
      array[i] = array[random];
      array[random] = aux;
    }
    return array;
  }
}

console.log(mezclaArray(nuevo));
