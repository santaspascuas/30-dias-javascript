//Vamos a utilizar asynchandler par manejar los errores

const asyncHandler = require("express-async-handler");

const RegistrarUsuario = asyncHandler(async (request, response) => {
  response.status(200).json({
    message: "Registrar un usuario",
  });
});

module.exports.ControllerUser = {
  RegistrarUsuario,
};
