const asyncHandler = require("express-async-handler");

const { ServiceContactos } = require("./ServiceContactos.js");

//Aqui sera la direccion de la base de datos. Aqui haremos las respuestas porque es el controlador.
//Probamos la nueva version de Youtube para el controlador.

//@desc Obtener todos los contactos
//@route GET /api/contactos
//@access Privado
const ObtenerContactos = asyncHandler(async (request, response) => {
  //Aqui iran las llamas del servicio de la base de datos.
  //Como hemos restringuido las rutas mediante el acceso por token.
  //Vamos a verificar si obtenemos la info

  console.log("Obtenemos los datos del filtro de acceso");
  console.log(request.user);

  const datos = await ServiceContactos.getContactos(request.user);
  console.log(datos);
  response.status(200).json({
    message: "Prueba",
    datos,
  });
});

//@desc Crear un contacto
//@route POST /api/contactos
//@access Privado
const CrearContactos = asyncHandler(async (request, response) => {
  console.log(" El request body es", request.body);

  console.log("Obtenemos los datos del filtro de acceso");
  console.log(request.user);

  const { name, email, phone } = request.body;
  //Establecemos las condiciones para la validacion de los datos.

  if (!name || !email || !phone) {
    response.status(400);
    throw new Error("Por favor, completa todos los campos");
  }

  const datos = await ServiceContactos.postContactos(
    request.body,
    request.user.id
  );
  console.log("El dato creado y retornado", datos);

  response.status(200).json({
    datos,
    message: "Prueba de creacion de contacto",
  });
});

//@desc Actualizar un contacto con el ID
//@route PUT /api/contactos/:id
//@access privado
const ActualizarContactos = asyncHandler(async (request, response) => {
  const id = request.params.id;
  const body = request.body;

  //Primero deberia verificar si existe el contacto con ese id.
  const contacto = await ServiceContactos.getContactoById(id);

  if (!contacto) {
    response.status(400);
    throw new Error("Este contacto no existe en la base de datos");
  }

  if (!body) {
    response.status(400);
    throw new Error("El body no se puede enviar vacio");
  }

  if (contacto && body) {
    const datos = await ServiceContactos.updateContactobyID(id, body);
    console.log("El dato actualizado y retornado", datos);
    response.status(200).json({
      datos,
      message: `Prueba de actualizacion del contactos enviado por el body ${id}`,
    });
  }
});

//@desc Eliminar el contacto con el ID
//@route DELETE /api/contactos/:id
//@access Privado
const EliminarContactos = asyncHandler(async (request, response) => {
  const id = request.params.id;

  //Primero deberia verificar si existe el contacto con ese id.
  const contacto = await ServiceContactos.getContactoById(id);

  if (!contacto) {
    response.status(400);
    throw new Error("Este contacto no existe en la base de datos");
  }

  /// Aqui llamamos al servicio de la eliminacion

  const datos = await ServiceContactos.deleteContactobyID(id);

  response.status(200).json({
    datos,
    message: `Prueba de eliminacion  del contactos enviado por el body ${id}`,
  });
});

//@desc Obtener el contacto con el ID
//@route GET /api/contactos/:id
//@access Public
const ObtenerContactosPorId = asyncHandler(async (request, response) => {
  const id = request.params.id;
  //Aqui lo llamo al servicio de la base

  const datos = await ServiceContactos.getContactoById(id);

  if (!datos) {
    //Generamos el codifo 400 de error para mandar al cluente.
    response.status(400);
    throw new Error("No se ha encontrado el contacto con ese ID ");
  }

  response.status(200).json({
    datos,
    message: `Prueba de obtencion   del contactos enviado por el body ${id}`,
  });
});

module.exports.ControllerContactos = {
  ObtenerContactos,
  CrearContactos,
  ActualizarContactos,
  EliminarContactos,
  ObtenerContactosPorId,
};
