// Este sera el indice del users.
const express = require("express");

//Activamos el router

const router = express.Router();

router.route("/").get((request, response) => {
  console.log("Estoy aqui  en el router de los owners");
  response.status(200).json({
    message: "Prueba para ver las rutas de los owners",
  });
});

module.exports.RouterOwner = router;
