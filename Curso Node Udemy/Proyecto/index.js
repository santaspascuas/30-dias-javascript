//Modulos comunes. Sera mi servidor.
const express = require("express");
const debug = require("debug")("app:main"); //Utiliza un strimg para imprimirlas cosas.
//Se modifica el package.json.

const { Config } = require("./src/config/index.js"); // modulo de las configuiraciones.

const app = express();

app.use(express.json()); // Cnfiguracion para el uso del body con json.

//Nuestra app va a escuchar
app.listen(Config.port, () => {
  debug(`Servidor escuchando en el puerto ${Config.port}`);
});

//Esto seria nuestro servidor levantado. El index principal.
