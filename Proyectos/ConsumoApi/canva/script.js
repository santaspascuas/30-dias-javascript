"use strict";

// Deberiamos seleccionar y seleccionar el contexto

const canvas = document.getElementById("canvasid"); // El selector de canva
const figura = canvas.getContext("2d"); // La creación de una figura como una clase de canva

//Necesitamos las coordenadas del mouse cuando el click se mantiene pulsado

let initialX;
let initialY;

//Ahora deberiamos hacer la funcion de dibujar.//

const dibujar = (cursorX, cursorY) => {
  figura.beginPath();
  figura.moveTo(initialX, initialY); // Desde la coordenada de inicios

  console.log(`Las coordenadas de la INICIO:${initialX}
    las corodenadas de la y INICIO ${initialY}`);
  figura.strokeStyle = "green";
  figura.lineWidth = 20;
  figura.lineCap = "round";
  figura.lineJoin = "round";
  figura.lineTo(cursorX, cursorY); // Hasta la direccon de finalizacion.

  console.log(`Las coordenadas de la x:FINAL${cursorX}
    las corodenadas de la y FINAL${cursorY}`);
  figura.stroke();

  //Actualizamos las variables para tener las variables anteriores.
  initialX = cursorX;
  initialY = cursorY;
};

/// Faltaria la funcion o evento que captura los movimientos del raton.+

//funcion que le pasas un evento y te da las coordenadas del mouse
// Al ser una funcion con evento cada vez que hago click me da las coordenas
const mousedown = (event) => {
  initialX = event.offsetX;
  initialY = event.offsetY;
  dibujar(initialX, initialY); // Paso la función de dibujar cada vez que estoy obteniendo los paramtreos
  canvas.addEventListener("mousemove", mouseMoving);
};

const mouseMoving = (event) => {
  dibujar(event.offsetX, event.offsetY);
};

const mouseUp = () => {
  canvas.removeEventListener("mousemove", mouseMoving);
};

canvas.addEventListener("mousedown", mousedown); // Es asi porque hay un evento que recibe ya la funcioon.
