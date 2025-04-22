// Planteamos la idea de establecer el ruter de contactos.
const express = require("express");
const { ControllerContactos } = require("./constrollerContactos.js");
const validateToken = require("../middleware/validateTokenHandler.js");
const router = express.Router();

//Vamos a validar el token y ponemos el middleware de validacion para los edponints. Pasamos de publicos a privados.
router.use(validateToken);

router
  .route("/")
  .get(ControllerContactos.ObtenerContactos)
  .post(ControllerContactos.CrearContactos);

router
  .route("/:id")
  .get(ControllerContactos.ObtenerContactosPorId)
  .delete(ControllerContactos.EliminarContactos)
  .put(ControllerContactos.ActualizarContactos);

module.exports.RouterContactos = router;
