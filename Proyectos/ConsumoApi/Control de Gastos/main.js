"use strict";

const presupuesto = document.getElementById("texto");
const boton = document.getElementById("boton");
const cruzBoton = document.getElementById("cruz");
const anadirGasto = document.getElementById("anadirGasto");

//fantasma-div
const fantasma = document.querySelector(".fantasma");

//funciones----------

document.addEventListener("DOMContentLoaded", function () {});

const inicios = [];
console.log(inicios);

///Necsito actualizar los valores del inicio

function obtenerPresupuesto() {
  const valor = presupuesto.value;
  const divgenerado = document.querySelector(".informacionPresupuesto");
  if (isNaN(valor) || valor == 0) {
    if (!document.querySelector(".error")) {
      //creariamos un div siempre que no exista. Evitamos duplicados.
      const div = document.createElement("div");
      div.className = "error";
      div.innerHTML = `Error al introducir el valor`;
      div.style.color = "red";
      fantasma.appendChild(div);
    }
  } else {
    if (document.querySelector(".error")) {
      // Esto corrige el error de obtener los datos
      const error = document.querySelector(".error");
      error.remove();
    }
    //Apartir de aqui obtengo valores
    //Activaria el main y quitaria el hidden
    document.querySelector("main").style.display = "block";
    // A los selectores como main solo hace falta menterlos en un query selector a pelo
    document.querySelector(".inicio").style.display = "none"; //Quitamos el hidden
    document.querySelector(".contenidoPresupuesto").style.display = "block"; // Quitamos el hidden

    if (divgenerado) {
      //Sis existe el div== true
      const presupuesto = {
        Presupuesto: valor,
        Disponible: valor,
        Gastado: 0,
      };
      inicios.push(presupuesto);
      //Generamos el div de los presupuestos.
      for (let clave in presupuesto) {
        const crearp = document.createElement("p");
        crearp.innerHTML = `<strong>${clave}:</strong> $${presupuesto[clave]}`;
        crearp.style.color = "blue";
        crearp.id = clave;
        divgenerado.appendChild(crearp);
      }
    }
  }
}

function mostrarGastos() {
  console.log("Te estoy clickeando");
  AbrirEmergente(); // Ahora debemos de poder obtener cosas del formulario
  // const frm = document.getElementById("formulario");

  // const { gasto, cantidad, categorias } = frm.elements; // Obtenemos las referencias por desestructuracion

  // if (gasto.value == "") {
  //   console.log("Estoy vacia");
  // }

  // // gasto.addEventListener("change", function (event) {
  // //   const valor = event.target.value;
  // // });
}
let gastosAnadidos = [];
console.log(gastosAnadidos);

let acumulador = 0;

function anadirGastos() {
  //Aqui tendria que ver si puedo comprobar que envio cosas vacias y unsweet alert
  const frm = document.getElementById("formulario"); // El formulario
  //Desestructuramos los selectores

  const { gasto, cantidad, categorias } = frm.elements;

  if (gasto.value == "" && cantidad.value == "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "El gasto y la cantidad estan vacios",
    });
  } else {
    let gastos = {
      gasto: gasto.value,
      cantidad: cantidad.value,
      categorias: categorias.value,
    };
    let gastoAcumulador = Number(gastos.cantidad);
    acumulador += gastoAcumulador;
    gastosAnadidos.push(gastos); //Añadimos los gastos a la coleccion.
    // Una vez añadido el gasto. Procedemos a crear el div. y Añadir el gasto.

    const claves = Object.keys(gastos);

    const crearDiv = document.createElement("div");
    const crearDiv2 = document.createElement("div");

    crearDiv.className = "Contenido-gasto";
    crearDiv2.className = "Gastos contenedor";

    const anadirGastoDiv = document.querySelector(".formularioGasto");

    for (let i = 0; i < claves.length; i++) {
      const crearP = document.createElement("p");
      crearP.id = claves[i];
      crearP.innerHTML = `<strong>${claves[i]}:</strong> ${gastos[claves[i]]}`;
      crearDiv2.appendChild(crearP);
    }
    crearDiv.appendChild(crearDiv2);
    anadirGastoDiv.appendChild(crearDiv);
    //cerramos la ventana
    CerrarEmergente();

    //cambiamos los valores con desestructuracion
    document.getElementById(
      "Disponible"
    ).innerHTML = `<strong>Disponible:</strong> $${
      inicios[0].Disponible - acumulador
    }`;

    document.getElementById(
      "Gastado"
    ).innerHTML = `<strong>Gastado:</strong> $${acumulador}`;
  }
}

//Escuchas
boton.addEventListener("click", obtenerPresupuesto);
cruzBoton.addEventListener("click", mostrarGastos);
anadirGasto.addEventListener("click", anadirGastos);

//Funcion para visualizar el emergente

function AbrirEmergente() {
  //Seleccionamos el div y le quitamos el hidden
  const ventaEmergente = document.querySelector(".overlay");
  //Al tener el estilo en linea en el html si que puedes usar lo del hidden
  ventaEmergente.style.visibility = "visible";
}

function CerrarEmergente() {
  const ventaEmergente = document.querySelector(".overlay");
  ventaEmergente.style.visibility = "hidden";
}
