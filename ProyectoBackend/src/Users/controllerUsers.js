const asyncHandler = require("express-async-handler");

//Usamos el servicio de usuario para la base de datos.

const { ServiceUsers } = require("./ServiceUsers");

const bcrypt = require("bcrypt");

//Extraer el modulo del json
const jwt = require("jsonwebtoken");

//El archivo de configuracion
const { Config } = require("../Config/config");

//@desc Insertar usuarios en la base de datos y registrarme
//@route POST /api/users/register
//@access Public
const RegistrarUsuario = asyncHandler(async (request, response) => {
  const { username, email, password } = request.body;

  if (!username || !email || !password) {
    //Aqui falta el username y debemos de crear el error.
    response.status(400);
    throw new Error("Por favor, completa todos los campos");
  }
  //Aqui lo primero es ver si nuestro email que es unico esta en la base de datos.
  //Saber si podemos crear el usuario.//Probarmos limpiar el email

  const emailLimpio = email.trim().toLowerCase();

  //Antes estaba pasandole:
  // "emaillimpio : "el email". Me estaba buscando el campo emaillimpio y ese no existe.
  const VerificarEmail = await ServiceUsers.VerificarEmail({
    email: emailLimpio,
  });
  console.log("Verificacion del email", VerificarEmail);

  if (VerificarEmail) {
    response.status(400);
    throw new Error("Usuario ya creado y resgitrado");
  }

  //Ahora vamos a encriptar la contraseña para el usuario.
  //Utilizamos la encriptación de bcrypt.
  const hashPassword = await bcrypt.hash(password, 10);
  //Cambio la contraseña a la hasheada
  request.body.password = hashPassword;

  const usercreate = await ServiceUsers.CrearUsuario(request.body);

  if (usercreate) {
    //Si se ha creado el usuario.
    response.status(201).json({
      _id: usercreate.id,
      email: usercreate.email,
    });
  } else {
    response.status(400);
    throw new Error("Los datos del usuario no son validos");
  }

  response.status(200).json({
    message: "Registrar un usuario",
  });
});
//@desc Comprobar mi usuario y poder entrar en la aplicación.
//@route POST /api/users/login
//@access Public
const LoginUsuario = asyncHandler(async (request, response) => {
  //Para loguearte primero deberias verificar tu correo y tu contraseña
  //Lo mandarias por post y deberias verificar que estan ambas cosas

  const { email, password } = request.body;

  if (!email || !password) {
    //Aqui falta el username y debemos de crear el error.
    response.status(400);
    throw new Error("Por favor, completa todos los campos");
  }

  //Confirmar primero que esta el email.

  const ConfirmaEmail = await ServiceUsers.VerificarEmail({ email: email });

  if (
    ConfirmaEmail &&
    (await bcrypt.compare(password, ConfirmaEmail.password))
  ) {
    //Juntamos en if porque no queremos darle pistas a los malos de que esta mal y poder acceder
    const AccesToken = jwt.sign(
      {
        ConfirmaEmail: {
          username: ConfirmaEmail.username,
          email: ConfirmaEmail.email,
          id: ConfirmaEmail.id,
        },
      },
      Config.ACCESS_TOKEN_SECRET,
      { expiresIn: "1h" }
    );
    response.status(200).json({
      message: "Login correcto",
      AccesToken,
    });
  } else {
    response.status(400);
    throw new Error("No hay cuenta con ese correo. ");
  }
});

//@desc Obtener la información del usuario activo en ese momento.
//@route GET /api/users/current
//@access Private
const ObtenerCurrent = asyncHandler(async (request, response) => {
  //El middelware ha filtrado para poder tener acceso con token y encima puedo tener
  //La info de quien se metio
  console.log("Obtenemos los datos del filtro de acceso");
  console.log(request.user);
  response.status(200).json({
    message: "Obtener el current.",
  });
});

module.exports.CotrollerUsers = {
  RegistrarUsuario,
  LoginUsuario,
  ObtenerCurrent,
};
