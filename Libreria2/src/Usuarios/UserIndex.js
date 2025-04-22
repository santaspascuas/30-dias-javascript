// Extraemos express para poder crear el router
const express = require("express");
const router = express.Router();

const { ControladorUsuario } = require("./controller_user");
//Vamos a probar a utilizar un token y proteger la ruta de los usuarios.
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imp1YW4ucGVyZXpAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDQxMjUwNDAsImV4cCI6MTc0NDEyODY0MH0.t5INBcasE9xYSyPFLXPBQWGmVBUoal35NIjUnWK-CZU

const { verifyToken } = require("../Midelware/index");
router
  .get("/user", ControladorUsuario.ObtenerUsers)
  .get("/user/:id", ControladorUsuario.ObtenerUser)
  .post("/user", ControladorUsuario.InsertarUsuario)
  .delete("/user/:id", ControladorUsuario.EliminarUsuario)
  .get(
    "/protegido",
    verifyToken.verifyToken,
    ControladorUsuario.ObtenerUserProtegido
  );

module.exports.RouterUser = router;
