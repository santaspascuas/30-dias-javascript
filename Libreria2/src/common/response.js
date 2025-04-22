//Este sera un modulo estandar de respuestas.
const createError = require("http-errors");
module.exports.Response = {
  success: (
    response,
    status = 200,
    message = "Operación exitosa",
    body = {}
  ) => {
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
