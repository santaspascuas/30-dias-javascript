//Vamos a establecer un hadler de errores.
//Este middlware salta solo con la ruta determinada en el servidor. Salta en los errores que pega con las ruta.

const { constantes } = require("../common/constantes_errores");
const errorHandler = (error, request, response, next) => {
  const statusCode = response.statusCode ? response.statusCode : 500;

  switch (statusCode) {
    case constantes.ERROR_VALIDACON:
      response.json({
        title: "Error en la validacion",
        message: error.message,
        stackTrace: error.stack,
      });
      break;

    case constantes.ERROR_NO_ENCONTRADO:
      response.json({
        title: "Not Found",
        message: error.message,
        stackTrace: error.stack,
      });
      break;

    case constantes.FORBIDDEN:
      response.json({
        title: "FORBIDDEN",
        message: error.message,
        stackTrace: error.stack,
      });
      break;

    case constantes.UNAUTHORIZED:
      response.json({
        title: "UNAUTHORIZED",
        message: error.message,
        stackTrace: error.stack,
      });
      break;
    case constantes.SERVER_ERROR:
      response.json({
        title: "SERVER_ERROR",
        message: error.message,
        stackTrace: error.stack,
      });
      break;
    default:
      console.log("No error, All good!");
  }

  console.log("Codigo de error:", statusCode);
};

module.exports = errorHandler;
