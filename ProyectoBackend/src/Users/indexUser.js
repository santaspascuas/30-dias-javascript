//Planteamos la idea de establecer el router de usuarios.
const express = require("express");
const { CotrollerUsers } = require("./controllerUsers.js");
const validateToken = require("../middleware/validateTokenHandler.js");
const router = express.Router();

router.post("/register", CotrollerUsers.RegistrarUsuario);
router.post("/login", CotrollerUsers.LoginUsuario);
router.get("/current", validateToken, CotrollerUsers.ObtenerCurrent);

module.exports.RouterUsers = router;
