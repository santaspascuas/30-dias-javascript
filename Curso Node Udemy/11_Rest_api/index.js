"use strict";

const axios = require("axios"); // Traigo el paque y lo almaceno en mi variable
//axios hace peticiones de caracter asincrono
const fs = require("fs").promises;
const path = require("path");

const main = async () => {
  try {
    let response = await axios.get("https://rickandmortyapi.com/api/character");

    let {
      data: { results },
    } = response;

    let personajes = results.map((personaje) => {
      return {
        id: personaje.id,
        nombre: personaje.name,
        status: personaje.status,
        species: personaje.species,
      };
    });

    //console.log(path.join(__dirname, "data.csv")); // Generas la ruta y el nombre del archivo
    //Ahora necesitas generar el archivo con fs. Fs trabaja con promesas

    //console.log(personajes);

    //const indices = Object.keys(results[0]).join(",");
    //console.log(personajes);

    const headers = Object.keys(personajes[0]).join(","); //Headers
    let datos = personajes
      .map((elementos) => Object.values(elementos).join(","))
      .join("\n");

    let final = `${headers}\n${datos}`;

    //Visualizacion

    console.log(datos);
    console.log(headers);

    await fs.writeFile(path.join(__dirname, "data.csv"), final);
  } catch (error) {
    console.log(error);
  }
};

main();
