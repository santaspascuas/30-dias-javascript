"use strict";
const texto = document.getElementById("mensaje");

// Abro el worker
const worker = new Worker("worker2nuevo.js");

worker.addEventListener("message", cambioestado);

// Enviar alerta cada 20 segundos al Worker
setInterval(() => {
  worker.postMessage("ALERTA");
}, 20000);

function cambioestado(msg) {
  // Mostrar los datos recibidos del Worker
  console.log(msg.data);
  // Si deseas actualizar el DOM con el mensaje recibido, por ejemplo:
  texto.textContent = msg.data; // Mostrar los mensajes recibidos
}
