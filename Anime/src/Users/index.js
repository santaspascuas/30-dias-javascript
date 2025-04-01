// Importar los modulos
const express = require("express");
//crear o exportar el router

const router = express.Router();

//Usamos el controlador.

const { UsuarioControlador } = require("./controller");

router
  .get("/users", UsuarioControlador.getUsuarios) //
  .get("/users/:id", UsuarioControlador.getUsuario)
  .post("/registro", UsuarioControlador.crearUsuario)
  .post("/login", UsuarioControlador.confirmarUsuario);

//Estos seran los enrutadores de los usuarios.
module.exports = router;
