// AQUI HAREMOS LA LLAMADA AL MODEL DE USUARIO. Y haremos las invocaciones.

const userModel = require("../models/userModel.js");

//Aqui hariamos una exportacion de datos con el modelo. Consulta a la base de datos.

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
    const { username, email, password } = body;
    const usuarioCreado = await userModel.create({
      username,
      email,
      password,
    });
    console.log("El contacto creado es ", usuarioCreado);
    return usuarioCreado;
  } catch (error) {
    console.error("Error al crar el usuario", error.message);
    return null;
  }
};

module.exports.ServiceUsers = {
  VerificarEmail,
  CrearUsuario,
};
