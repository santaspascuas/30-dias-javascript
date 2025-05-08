//Vamos a crear el router de los productos.

const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
  response.json({
    message: "Directorio de productso",
  });
});

module.exports.RouterProducts = router;
