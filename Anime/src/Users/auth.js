//Aqui haremos la autentificación y uso del token de json.
const jwt = require("jsonwebtoken");
//Mi palabra secreta la debo de importar desde el .env
const { Config } = require("../config/index");

const crearToken = (email) => {
  return jwt.sign({ email }, Config.JWT_SECRET, { expiresIn: "1h" });
};

module.exports.Autentificacion = {
  crearToken,
};
