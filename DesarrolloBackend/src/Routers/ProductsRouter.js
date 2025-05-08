// Este sera el indice del users.
const express = require("express");

//Activamos el router

const router = express.Router();

router.get("/", (request, response) => {
  console.log("Estoy aqui");
  response.status(200).json({
    message: "Prueba para ver las ruta de los productos",
  });
});

module.exports.RouterProducts = router;
