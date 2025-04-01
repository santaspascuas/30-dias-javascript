//Vamos a controlar lo devuyelto por el servicio.
//exportamos el modulo para hacer un mejor control
//Aqui retornamos los resultados obtenidos en el servicio. Es en controlador donde vamos a verificar que los datos estan bien
//Sera en controlador donde haremos las verificaciones de try catch
const { UserService } = require("./services");
const { Response } = require("../common/response");
/* Como hay vecese que queremos errores determinados.Traeremos un modulo para crear el error*/
const createError = require("http-errors");
const bcrypt = require("bcrypt");

const { Utilitis } = require("./utils");
const { Autentificacion } = require("./auth");
module.exports.UsuarioControlador = {
  getUsuarios: async (request, response) => {
    try {
      const result = await UserService.getUsers();
      /*Vamos a añadir la estructura de respuesta*/
      Response.success(
        response,
        200,
        "Lista de Usuarios en nuevo formato",
        result
      );
    } catch (error) {
      Response.error(response);
      //No sabemos que error sera. asique dejamos los campos vacios y se rellenan automaticamente.
    }
  },
  getUsuario: async (request, response) => {
    try {
      const { id } = request.params;
      const result = await UserService.getUserById(id); //Sino encuentra al usuario te da un array vacio.
      if (result.length === 0) {
        return Response.error(response, new createError.NotFound());
        /*Necesitas hacer return para dejar de ejecutar los response*/
      } else {
        /*Respuesta*/
        Response.success(
          response,
          200,
          `Informacion del usuario: ${id}`,
          result
        );
      }
    } catch (error) {
      Response.error(response);
    }
  },
  crearUsuario: async (request, response) => {
    try {
      const datos = request.body;
      const { username, email, password } = datos;

      if (!username || !email || !password) {
        return Response.error(response, new createError.NotAcceptable());
      }

      const hash = await Utilitis.hashearContra(password);
      console.log(hash);
      /*Guardamos el hash en la base de datos la contraseña hasheada*/
      datos.password = hash;
      const resultado = await UserService.postUsuario(datos);
      console.log("resultado", resultado);
      if (resultado.message) {
        return Response.error(response, new createError.BadRequest());
      }
      /*Aqui haremos el token del usuario*/

      const crearToken = Autentificacion.crearToken(email);
      //Ahora seria añadirlo al mensaje:
      resultado.token = crearToken;
      console.log(resultado);
      Response.success(
        response,
        201,
        "Usuario insertado en la base de datos",
        resultado
      );
    } catch (error) {
      Response.error(response);
    }
  },
  confirmarUsuario: async (request, response) => {
    try {
      //necesitamos la informacion.
      const datos = request.body;
      const { password, email } = datos;
      const result = await UserService.verificarUsuario(datos);

      if (result.length != 0) {
        confirmacionHash = await Utilitis.CompareHash(
          password,
          result[0].password
        );
        console.log(confirmacionHash);
        if (password === result[0].password || confirmacionHash) {
          /*Generamos el token tambien*/
          const token = Autentificacion.crearToken(email);

          return Response.success(
            response,
            200,
            "Usuario confirmado en la base de datos y contraseña correcta. Entra en la aplicacion",
            { message: token }
          );
        } else {
          return Response.error(response, new createError.NotFound());
        }
        /* que pasa si la contraseña esta hasheada.*/
      }

      if (result.length === 0) {
        return Response.error(response, new createError.NotFound());
      }
    } catch (error) {
      Response.error(response);
    }
  },
};
