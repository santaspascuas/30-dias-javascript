//Vamos a crear el router de los productos.

const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
  response.json({
    message: "Directorio de owners",
  });
});

module.exports.OwnerProducts = router;
