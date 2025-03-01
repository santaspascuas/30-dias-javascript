"strict use";

// Creamos el objeto de XMLHTTPREQUEST
let xhr = new XMLHttpRequest(); // iNICIAMOS EL OBJETO DE REQUETS

// Configuramos la peticion

xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1"); // La funcion open esta para realizar la peticion.

//Enviamos la solicitu
xhr.send(); // Enviamos la peticion.

//Funcion exito

function exito() {
  const data = JSON.parse(this.responseText);
  console.log("Respuesta recibida:", data);
}

function error() {
  console.log("error en la solicitud");
}

xhr.onload = exito; // MUESTRA MENSJAES CUANDO TENEMOS RESPUESTA.

xhr.onerror = error;
// Queremos ver la respuesta

///Convertirlo a fetch

fetch("https://jsonplaceholder.typicode.com/todos/")
  .then((respuesta) => respuesta.json()) // El fomato en json.
  .then((resultado) => console.log(resultado)); // Lo obtenido lo printeamos

// Tambien podemos utilizar await

async function obtenerDatos() {
  try {
    const respuesta = await fetch(
      "https://jsonplaceholder.typicode.com/todos/"
    );

    const datos = await respuesta.json();
    console.log("Datos recibidos:", datos);
  } catch (error) {
    console.log("Hay un error", error.message);
  }
}

// Hay que lanzar la funcion

obtenerDatos();
