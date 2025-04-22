//Aqui vamos a realizar las tareas de la logica de la base de datos.

const Contacto = require("../models/contactModel.js"); //Modelo de contacto para hacer las operaciones.

const getContactos = async (usuario) => {
  try {
    const contactos = await Contacto.find({ user_id: usuario.id });
    //Me sale array vacio porque no he creado ningun contacto por ahora.
    //Voy a crearlo
    return contactos;
  } catch (error) {
    console.error("Error obteniendo los contactos", error.message);
    return [];
  }
};

const postContactos = async (body, id) => {
  try {
    const { name, email, phone } = body;
    console.log("Entramos en la funcion de post");

    const contacto = await Contacto.create({
      name,
      email,
      phone,
      user_id: id,
    });
    console.log("El contacto creado es ", contacto);
    return contacto;
  } catch (error) {
    console.error("Error al crear el contacto.", error.message);
    return error;
  }
};

const getContactoById = async (id) => {
  try {
    const contacto = await Contacto.findById(id);
    return contacto;
  } catch (error) {
    console.error("Error al buscar el contacto por su id", error.message);
    return error;
  }
};

const updateContactobyID = async (id, body) => {
  try {
    const contacto = await Contacto.findByIdAndUpdate(id, body, { new: true });
    console.log("El contacto ha sido actualizado", contacto);
    return contacto;
  } catch (error) {
    console.error("Error al actualizar el dato", error.message);
    return error;
  }
};

const deleteContactobyID = (id) => {
  try {
    const contacto = Contacto.findByIdAndDelete(id);
    return contacto;
  } catch (error) {
    console.error("Error al actualizar el dato", error.message);
    return error;
  }
};

module.exports.ServiceContactos = {
  getContactos,
  postContactos,
  getContactoById,
  updateContactobyID,
  deleteContactobyID,
};
