// Usaremos el modelo para hacer las consultas a la base de datos.

const userModel = require("../Models/UserModels.js");

const VerificarEmail = async (info) => {
  try {
    //Nota mental
    //Le estoy diciendo a mongodb que busque esto por el campo y le paso el campo
    // email: "lo buscado"
    const datos = await userModel.findOne(info);
    return datos;
  } catch (error) {
    console.error("Error obteniendo el usuario y el email.", error.message);
    return null;
  }
};

const CrearUsuario = async (body) => {
  try {
    const { fullname, email, password, contact, picture } = body;
    const UsuarioCreado = await userModel.create({
      fullname,
      email,
      password,
      contact,
      picture,
    });
    console.log("El contacto creado es ", UsuarioCreado);
    return UsuarioCreado;
  } catch (error) {
    console.error("Error al crear el usuario", error.message);
    return null;
  }
};

const verificarEmail = async () => {};

module.exports.ServiceUsers = {
  VerificarEmail,
  CrearUsuario,
};
