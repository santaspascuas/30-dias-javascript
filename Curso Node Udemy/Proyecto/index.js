//Modulos comunes. Sera mi servidor.
const express = require("express");
const debug = require("debug")("app:main"); //Utiliza un strimg para imprimirlas cosas.
//Se modifica el package.json.

const { Config } = require("./src/config/index.js"); // modulo de las configuiraciones.

//Modulo de rutas para el routers
const { ProductsApi } = require("./src/products/index.js");

const app = express();

ProductsApi(app); // Le paso la app al archivo de rutas.

app.use(express.json()); // Cnfiguracion para el uso del body con json.
//Recibir datos en el cuerpo.

//Nuestra app va a escuchar
app.listen(Config.port, () => {
  // Taigo la configuracion.

  debug(`Servidor escuchando en el puerto ${Config.port}`);
});

//Esto seria nuestro servidor levantado. El index principal.
