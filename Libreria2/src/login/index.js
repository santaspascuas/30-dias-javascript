//Aqui vamos a realizar el router para login

const express = require("express");
const router = express.Router();

//El controlador del login

const { ControladorLogin } = require("./controlerLogin");

router.post("/login", ControladorLogin.Loguearse);

module.exports.RouterLogin = router;
