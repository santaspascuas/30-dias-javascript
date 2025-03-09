"use strict";

onmessage = function (datos) {
  const data = datos.data; // Recibo el mensaje

  // Mostrar el mensaje recibido
  console.log("Mensaje recibido en el Worker:", data);

  // Responder con diferentes mensajes según el tipo de alerta o lógica
  const mensajes = ["HOLA", "BRYAN", "Rosa", "GUS", "mario"];
  if (data === "ALERTA") {
    const rando = Math.floor(Math.random() * mensajes.length);
    console.log(rando);
    // Si el mensaje recibido es "ALERTA", responde con los mensajes
    this.postMessage(mensajes[rando]);
  }
};
