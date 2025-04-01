// Importar los módulos
const express = require("express");
const { Response } = require("../common/response");
const createError = require("http-errors");

const router = express.Router();

// Captura rutas no encontradas
router.all("*", (req, res) => {
  Response.error(res, createError(404, "Ruta no encontrada"));
});

module.exports = router;
