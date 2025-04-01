const createError = require("http-errors");

module.exports.Response = {
  success: (response, status = 200, message = "ok", body = {}) => {
    //Establecemos los valores genericos que vamos a recibir.
    response.status(status).json({
      message,
      body,
    });
  },
  error: (response, error = null) => {
    const { statusCode, message } = error
      ? error
      : new createError.InternalServerError();
    response.status(statusCode).json({ message });
  },
};

/* AHORA VAMOS A IMPLEMENTAR ESTE MODULO DE RESPUESTAS EN NUESTRO CONTROLADOR.*/
