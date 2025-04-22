// El index de cada "Objeto" es un router.
const express = require("express");

const { ControladorLibro } = require("./controller_Libros");

const router = express.Router(); // Creamos un objeto router.

router
  .get("/libros", ControladorLibro.obtenerLibros)
  .get("/libros/:isbn", ControladorLibro.ObtenerLibro)
  .post("/libros", ControladorLibro.InsertarLibros)
  .delete("/libros/:isbn", ControladorLibro.EliminarLibros);

module.exports.RouterLibro = router;
