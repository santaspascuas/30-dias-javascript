//Aqui ira la autentificación de Jason web Tokens.
//Aqui haremos la autentificación y uso del token de json.
const jwt = require("jsonwebtoken");
//Mi palabra secreta la debo de importar desde el .env
const { Config } = require("../Config/index");

const crearToken = (email) => {
  return jwt.sign({ email }, Config.secretWord, { expiresIn: "1h" });
};

module.exports.Autentificacion = {
  crearToken,
};
