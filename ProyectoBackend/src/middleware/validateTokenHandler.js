//Debemos importar el asyncHandler y el jwt
const asyncHandler = require("express-async-handler");
//Extraer el modulo del json
const jwt = require("jsonwebtoken");

//El archivo de configuracion
const { Config } = require("../Config/config");

//Necesitamos el middelware para validar el token.

const validateToken = asyncHandler(async (request, response, next) => {
  console.log("Estoy en el validador");
  let token;
  //La idea es que los encabezados enviados deben ir con el token mas la plabra bearer para poder
  //manejar el protocolo.

  let authHeader =
    request.headers.authorization || request.headers.Authorization;

  if (authHeader && authHeader.startsWith("Bearer")) {
    console.log("Entro en el idf de header");
    token = authHeader.split(" ")[1];
    console.log(token);
    jwt.verify(token, Config.ACCESS_TOKEN_SECRET, (error, decoded) => {
      // Error salta si hay un error y decoded accedes a los datos dentro del token.
      if (error) {
        response.status(401);
        throw new Error("Usuario no esta autorizado");
      }
      request.user = decoded.ConfirmaEmail;
      //Esto lo hacemos para poder tener esta informacion en el router o controaldor.

      //console.log(decoded);
      // Continuamos con el siguiente middleware/controlador
      next(); // Faltaba el next
    });

    if (!token) {
      response.status(401);
      throw new Error("No Hay token proporcionado.");
    }
  } else {
    response.status(401);
    throw new Error("Token no proporcionado o formato incorrecto");
  }
});

module.exports = validateToken;
