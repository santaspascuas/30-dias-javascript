"use strict";

// La idea seria que obtuviera el texto del boton y que pueda realizar la busqueda y me saque la info con la cual realizar otra buqueda para los billetes

//---------------------Seleccion de botones------------------------------//

const from = document.querySelector("#airport01"); // Tenemos seleccionado el boton
const to = document.querySelector("#airport02"); // Tenemos seleccionado el segundo boton
const suma = document.querySelector("#suma"); //Selector para aumentar el numero de billetes
const cantidad = document.querySelector("#numeroBilletes"); //Numero de billetes
const resta = document.querySelector("#resta"); //Selector para aumentar el numero de billetes
const lista = document.querySelector("#listaResultado");
const lista2 = document.querySelector("#listaResultado2");
const buscar = document.querySelector("#submitSearch");

// Pondriamos a escuchar para luego capturarlo

//quisiera obtener su valor y posiblemente arreglar lo que meta.

from.addEventListener("change", capturaFrom); // LLamamos para obtener el cambio de mayuscula la primera letra
to.addEventListener("change", capturaFrom); // LLamamos para obtener el cambio de mayuscula la primera letra
suma.addEventListener("click", sumaEventos); // Llamamos cuando clickeamos se le resta uno al valor del numero de billetes
resta.addEventListener("click", restaEventos); // Llamamos cuando clickeamos se le resta uno al valor del numero de billetes
buscar.addEventListener("click", buscarVuelos); // LANZAMOS LA PETICIÓN CON LOS EDPOINTS OBTENIDOS.

//Variables globales

const vuelos = new Object();
const baseUrl = "https://booking-com15.p.rapidapi.com/api/v1/flights";

function capturaFrom(evento) {
  // Captamos el evento.
  // Para poder obtener el valor. Usamos evento.target.value
  let aux = evento.target.value.trim(); // Eliminamos espacios en blanco extra
  let resultado = aux.charAt(0).toUpperCase() + aux.slice(1).toLowerCase(); // El metodo slice es para obtener la subcadena desde el indice correspondiente
  //¿cOMO ASIGNAMOS EL VALOR CAMBIADO¿
  evento.target.value = resultado; // Me lo cambia
  const busqueda = evento.target.value;
  fetchFlights(busqueda, evento); //  Aqui hago la llamada a la api con la función.
}
// Las funciones asincronas recogen las variables cuando hacen la llamada

async function fetchFlights(city, evento) {
  try {
    const url = `${baseUrl}/searchDestination?query=${city}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "a71f615801msh994966788375e7dp13c9fajsn3c1cdf6fc4b8",
        "x-rapidapi-host": "booking-com15.p.rapidapi.com",
      },
    };
    const response = await fetch(url, options);
    const result = await response.json(); // Convierte en la respuesta a JSON
    // Aqui estoy obteniendo el json de la llamada
    //Diferenciaremos el evento
    const etiqueta = evento.target.id;
    if (etiqueta === "airport01") {
      //Limpoio el div
      lista.innerHTML = "";
      lista.style.display = "";
      for (const indice of result.data) {
        const span = document.createElement("span");
        const espacio = document.createElement("br");
        const svg = document.createElement("svg");
        if (
          city === indice.countryName ||
          city === indice.cityName ||
          city === indice.regionName
        ) {
          // Aqui creamos los elemetos de svg

          const svgNS = "http://www.w3.org/2000/svg";
          const svg = document.createElementNS(svgNS, "svg");
          svg.setAttribute("width", "20"); // Tamaño del icono
          svg.setAttribute("height", "20");
          svg.setAttribute("viewBox", "0 0 24 24");
          svg.setAttribute("fill", "currentColor");

          const path = document.createElementNS(svgNS, "path");
          path.setAttribute(
            "d",
            "M21 16.5V15L13 10V3.5C13 3.10218 12.8419 2.72064 12.5607 2.43934C12.2794 2.15804 11.8978 2 11.5 2H10.5C10.1022 2 9.72064 2.15804 9.43934 2.43934C9.15804 2.72064 9 3.10218 9 3.5V10L1 15V16.5L9 15L9.5 18L8 19.5V21L11.5 20L15 21V19.5L13.5 18L14 15L21 16.5Z"
          );

          // Agregar el path al SVG
          svg.appendChild(path);

          // Aqui una vez seleccionado debo de poder crear objetos dinamicos
          span.className = indice.code;
          span.id = indice.id;
          span.textContent = indice.name;

          // Agregar SVG dentro del span (antes del texto)
          span.prepend(svg);

          lista.appendChild(span);
        }
        lista.appendChild(espacio);

        //Añadirles escuchas
        span.addEventListener("click", function (event) {
          //seleccionas y  metes en el valuye
          //Seleccionamos l opcion ofecida y la metemos.
          vuelos.ida = event.target.id; // Agreando la seleccion al objeto de hacer la segunda llamada
          from.value = event.target.textContent;
          //Aqui deberiamos ocultar la opcion.
          lista.style.display = "none";
        });
      }
    } else {
      //Limpoio el div
      lista2.innerHTML = "";
      lista2.style.display = "";
      for (const indice of result.data) {
        const span = document.createElement("span");
        const espacio = document.createElement("br");
        if (
          city === indice.countryName ||
          city === indice.cityName ||
          city === indice.regionName
        ) {
          const svgNS = "http://www.w3.org/2000/svg";
          const svg = document.createElementNS(svgNS, "svg");
          svg.setAttribute("width", "20"); // Tamaño del icono
          svg.setAttribute("height", "20");
          svg.setAttribute("viewBox", "0 0 24 24");
          svg.setAttribute("fill", "currentColor");

          const path = document.createElementNS(svgNS, "path");
          path.setAttribute(
            "d",
            "M21 16.5V15L13 10V3.5C13 3.10218 12.8419 2.72064 12.5607 2.43934C12.2794 2.15804 11.8978 2 11.5 2H10.5C10.1022 2 9.72064 2.15804 9.43934 2.43934C9.15804 2.72064 9 3.10218 9 3.5V10L1 15V16.5L9 15L9.5 18L8 19.5V21L11.5 20L15 21V19.5L13.5 18L14 15L21 16.5Z"
          );

          // Agregar el path al SVG
          svg.appendChild(path);

          // Aqui una vez seleccionado debo de poder crear objetos dinamicos
          span.className = indice.code;
          span.textContent = indice.name;

          // Aqui una vez seleccionado debo de poder crear objetos dinamicos
          span.className = indice.code;
          span.id = indice.id;
          span.textContent = indice.name;

          // Agregar SVG dentro del span (antes del texto)
          span.prepend(svg);

          lista2.appendChild(span);
        }
        lista2.appendChild(espacio);

        //Añadirles escuchas
        span.addEventListener("click", function (event) {
          //seleccionas y  metes en el valuye
          //Seleccionamos l opcion ofecida y la metemos.
          to.value = event.target.textContent;
          vuelos.vuelta = event.target.id;
          //Aqui deberiamos ocultar la opcion.
          lista2.style.display = "none";
        });
      }
    }
  } catch (error) {
    // Capturamos y mostramos errores
    console.error("Error en la obtención de datos:", error);
  }
}

/// Accion de pulsa, rellenar y luyego buscar

function buscarVuelos() {
  const fechaIda = document.querySelector("#datepicker");
  const fechaVuelta = document.querySelector("#datepicker1");
  const numeroPasajeros = document.querySelector("#numeroBilletes");
  if (
    fechaIda.value === "" ||
    fechaIda.value === null ||
    fechaVuelta.value === "" ||
    fechaVuelta.value === null
  ) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "No has incluido las fechas!",
    });
    return; // Return porque es igual que un break;
  }

  // Queda limpio para recibir codigo-------------
  vuelos.fechaIda = fechaIda.value;
  vuelos.fechaVuelta = fechaVuelta.value;
  vuelos.pasajeros = numeroPasajeros.textContent;
  console.log(vuelos);

  Swal.fire({
    icon: "success",
    title: "Cargando.....",
    text: "Buscando Vuelos...",
  });
  //LLAMADA A LA SEGUNDA QUERY
  buscarToken(vuelos);
}

async function buscarToken(vuelos) {
  const url = `${baseUrl}/searchFlights?fromId=${vuelos.ida}&toId=${vuelos.vuelta}&departDate=${vuelos.fechaIda}&returnDate=${vuelos.fechaVuelta}&pageNo=1&adults=1&children=0%2C17&sort=BEST&cabinClass=ECONOMY&currency_code=AED`;

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "a71f615801msh994966788375e7dp13c9fajsn3c1cdf6fc4b8",
      "x-rapidapi-host": "booking-com15.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    //Controlamos el error

    const data = result.data;
    const { error = "sin error", flightOffers = [] } = data;

    const { code } = error;
    if (code === "SEARCH_SEARCHFLIGHTS_NO_FLIGHTS_FOUND") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Vuelo no encontrado",
      });
    }

    if (flightOffers.length > 0) {
      Swal.fire({
        icon: "success",
        title: "bien....",
        text: "Vuelos encontrados",
      });
      //console.log(flightOffers);
      infoVuelos(flightOffers);
    }
  } catch (error) {
    console.error(error);
  }
}

async function infoVuelos(flightOffers) {
  //console.log(flightOffers[0].token);
  const url = `${baseUrl}/getFlightDetails?token=${flightOffers[0].token}&currency_code=AED`;

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "a71f615801msh994966788375e7dp13c9fajsn3c1cdf6fc4b8",
      "x-rapidapi-host": "booking-com15.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    // Desestructuracion

    const data = result.data;

    const { travellerPrices = [], segments = [] } = data;

    //Controlo si es mayor y los errores

    if (segments.length > 0) {
      Swal.fire({
        icon: "success",
        title: "bien....",
        text: "Los datos especificos",
      });

      console.log(segments[0]);

      const {
        arrivalAirport,
        arrivalTime,
        departureAirport,
        legs,
        departureTime,
      } = segments[0];

      // Aqui podriamos llamar a los slectores y poner los datos

      const salidaAero = document.querySelector(".departure");
      const llegadaAero = document.querySelector(".arrival");
      const timesalida = document.querySelector(".departureTime");
      const timellegada = document.querySelector(".arrivalTime");

      //Asignacion
      salidaAero.textContent = departureAirport.name;
      llegadaAero.textContent = arrivalAirport.name;
      timesalida.textContent = departureTime;
      timellegada.textContent = arrivalTime;
    }

    //console.log(result);
  } catch (error) {
    console.error(error);
  }
}

//Ahora deberiaamo pulsa el boton eh iniciar ya la de traer los vuelos por divs o tarjetas

///Funciones para el aumento de billetes.
function sumaEventos() {
  // Necesito capturar el contenido de lo que hago
  let inicio = parseInt(cantidad.textContent);
  // En los divs no se puede usar value. Usamos un  textcontent. Y cambiamos a parseint para ser un int.
  // Importante que no hace falta usar un evento en la funcion porque hago otras tareas.

  inicio = inicio + 1;
  cantidad.innerHTML = inicio;
}

function restaEventos() {
  // Necesito capturar el contenido de lo que hago
  let inicio = parseInt(cantidad.textContent);
  // En los divs no se puede usar value. Usamos un  textcontent. Y cambiamos a parseint para ser un int.
  // Importante que no hace falta usar un evento en la funcion porque hago otras tareas.
  if (inicio > 0) {
    inicio = inicio - 1;
    cantidad.innerHTML = inicio;
  }
}
