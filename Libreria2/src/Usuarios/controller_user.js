const { ServiceUser } = require("./ServiceUser");
const { Response } = require("../common/response");

module.exports.ControladorUsuario = {
  ObtenerUsers: async (request, response) => {
    try {
      const datos = await ServiceUser.getUsers();
      if (datos.length != 0) {
        return Response.success(
          response,
          200,
          "Lista de usuarios en formato JSON",
          datos
        );
      }
    } catch (error) {
      Response.error(error);
    }
  },
  ObtenerUser: async (request, response) => {
    try {
      const { id } = request.params;
      const datos = await ServiceUser.getUserbyid(id);
      Response.success(
        response,
        200,
        `Lista de usuarios solicitado en formato Json ${id}`,
        datos
      );
    } catch (error) {
      Response.error(error);
    }
  },

  InsertarUsuario: async (request, response) => {
    try {
      const datos = request.body;
      const { id, name, nickname, email, phone } = datos;

      if ((!id, !name || !nickname || !email || !phone)) {
        return Response.error(response, new createError.NotAcceptable());
      }
      const resultado = await ServiceUser.postUsuario(datos);
      //Aqui seria bueno tener el hash de la contraseña
      //El inicio de json web token
      //Meterlos en la cookie

      Response.success(response, 200, "Usuario Insertado", resultado);
    } catch (error) {
      Response.error(response);
    }
  },

  EliminarUsuario: async (request, response) => {
    try {
      const { id } = request.params;
      const datos = await ServiceUser.deleteUser(id);
      Response.success(response, 200, "Libro Eliminado", datos.id);
    } catch (error) {
      Response.error(response);
    }
  },

  IniciarLoginUser: (request, response) => {
    try {
      //Aqui deberia de recibir el username y la contraseña.
    } catch (error) {
      Response.error(response);
    }
  },

  //Prueba protegido
  ObtenerUserProtegido: (request, response) => {
    try {
      Response.success(response, 200, "Ruta protegida");
    } catch (error) {
      Response.error(error);
    }
  },
};
