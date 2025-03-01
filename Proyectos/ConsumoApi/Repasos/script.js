"use strict";
//Local storage

localStorage.setItem("Mi perrita", "Kira");
let kira = localStorage.getItem("Mi perrita"); // Solo vale con contenido
localStorage.removeItem("Mi perrita");
localStorage.setItem("Mi perrita", "Kira");
console.log(localStorage);

for (const indices in localStorage) {
  console.log(indices);
}

//Localizacion

if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(function (position) {
    ///
    console.log(position.coords);

    //
  });
}
