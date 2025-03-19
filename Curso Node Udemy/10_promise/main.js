"use strict";

/*
const getData = () => {
  return new Promise((resolve, reject) => {});
};
*/

/*
Forma expresiva

const getData =new Promise(()=>{})
    //Las funciones flecha ya tienen por defecto incrustar un return
    // Aqui digamos que obtenemos una promesa.
    // No es una funcion, sino una promesa
*/

//// Primera forma de usar promesas

const getData = (error) =>
  new Promise((resolve, reject) => {
    if (!error) {
      setTimeout(() => {
        resolve({
          nombre: "Bryan cuadrado",
          accion: "Estoy retornando un call back ",
        });
      }, 3000);
    } else {
      reject("No pudimos obtener los datos");
    }
  });

const getData2 = (error) =>
  new Promise((resolve, reject) => {
    if (!error) {
      setTimeout(() => {
        resolve({
          nombre: "Fiorella",
          accion: "Estoy retornando un call back 2 con el nombre de la nenu",
        });
      }, 3000);
    } else {
      reject("No pudimos obtener los datos del callback 2");
    }
  });

console.log("Inicio");
getData(false)
  .then((data) => {
    console.log(data);
    return getData2(true);
  })
  .catch((error) => {
    console.log(error);
  });
console.log("fin");

/// Segunda forma de poder realizar una peticion asincrona con promesa directamente
/// Podemos usar el catch para representar los errores. Solo hace falta un catch para obtener
// el error.

const getinfo2 = (dato) =>
  new Promise((resolve, reject) => {
    if (!dato) {
      setTimeout(() => {
        resolve({
          datos: "Mi segunda funcion asincrona",
          accion: "Crear una segunda funcion",
        });
      }, 2000);
    } else {
      reject("No se pudo obtener los datos");
    }
  });

getinfo2(true)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

//-------------------------ASYNC-----------------AWAIT
// ASYNC DEBE EXISTIR CON AWAIT

const asincronismo = async () => {
  try {
    let resultado = await getData(false);
    let resultado2 = await getData2(true);
    console.log(resultado);
    console.log(resultado2); // Nos falla porque no podemos controlar el error
  } catch (error) {
    console.log(error);
  }
};

asincronismo();
