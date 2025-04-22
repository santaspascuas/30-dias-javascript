const { ServiceLogin } = require("./ServiceLogin");
const { Response } = require("../common/response");
const { UtilityUser } = require("../Usuarios/Utilitis");
const { Autentificacion } = require("../Usuarios/autentificacionUser");

module.exports.ControladorLogin = {
  Loguearse: async (request, response) => {
    const { nickname, contraseña } = request.body;
    // Habria que ver si el nickname existe y nos trae la contraseña
    const datos = await ServiceLogin.getPassword(nickname);
    if (!datos) {
      return Response.error(response);
    }
    //comparamos las contarseñas

    const Compara = await UtilityUser.CompareHash(contraseña, datos.password);

    if (Compara) {
      // Una vez se comprueba la información, iniciamos sessión y pasamos el token
      const email = await ServiceLogin.getEmail(nickname);
      const token = Autentificacion.crearToken(email.email);
      //Aqui respondemos con el token creado y el inicio.
      //Podemos probar a guardarlo en el local Storage.

      return Response.success(response, 200, "Bienvenidos al sistema", {
        nickname,
        email: email.email,
        token,
      });
    }
    if (!Compara) {
      return Response.error(response);
    }
  },
};
