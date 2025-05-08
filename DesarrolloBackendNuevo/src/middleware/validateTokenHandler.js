//Debemos importar el asyncHandler y el jwt
const asyncHandler = require("express-async-handler");
//Extraer el modulo del json
const jwt = require("jsonwebtoken");

//El archivo de configuraciones.
const { Config } = require("../Config/config");

//Necesitamos el middelware para validar el token obtenido

const validateToken = asyncHandler(async (request, response, next) => {
  console.log("Estoy en el validador");

  //La idea es poder acceder con el token obtenido del login o de las cookies.

  let token;

  //Primero sera obtener por los headers
  let authHeader =
    request.headers.authorization || request.headers.Authorization;

  if (authHeader && authHeader.startsWith("Bearer")) {
    console.log("Entro aqui con el header desde postman");
    token = authHeader.split(" ")[1];
    console.log(token);
    jwt.verify(token, Config.ACCESS_TOKEN_SECRET, (error, decoded) => {
      //Salta un error sino es correcto el token
      if (error) {
        response.status(401);
        throw new Error("Usuario no esta autorizado");
      }

      request.user = decoded.emailComprobado; // guarda en el requets para luego poder usarlo
      //en otras rutas.

      console.log(decoded.emailComprobado);

      next();
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
