//Vamos a proceder a crear el arouter de usuarios
const express = require("express");

const { ControllerUsers } = require("../Controller/UserController.js");
const router = express.Router();
//Modificamos el controlador

//Tenemos que importar el middleware de validacion de token.

const validateToken = require("../middleware/validateTokenHandler.js");

router
  .post("/register", ControllerUsers.RegistrarUsuario)
  .post("/login", ControllerUsers.LoginUsuario)
  .get("/profile", validateToken, ControllerUsers.ObtenerUsuario);

module.exports.RouterUsers = router;
