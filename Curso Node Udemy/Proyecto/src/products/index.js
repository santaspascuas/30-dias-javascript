const express = require("express");

//Vamos a establcer las rutas independientemente de la aplicaicon.
//¿A que se refiere con esto?
const router = express.Router();

//Voy a hacer el archivo exportable

module.exports.ProductsApi = (app) => {
  //le pasamos lo que va a tener que controlar en la ruta
  router
    .get("/", (request, response) => {}) // Las rutas y luego las controlaremos
    //Digamos que es como si yo. Una persona va a la ruta
    //Http:/localhost:3000/api/products/
    .get("/:id", (request, response) => {})
    //Digamos que es como si yo. Una persona va a la ruta
    //Http:/localhost:3000/api/products/23
    .post("/", (request, response) => {});
  //Digamos que es como si yo. Una persona va a la ruta
  //Http:/localhost:3000/api/products/
  //La cosa es que ahora debemos agregar nuestri archivo de configuracion de router a nyestro servidor princiapl

  app.use("/api/products", router);
};
