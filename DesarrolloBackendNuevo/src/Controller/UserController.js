const asyncHandler = require("express-async-handler");

//Usamos el servicio de usuarios para la base de datos

const { ServiceUsers } = require("../Service/UserService.js");

const bcrypt = require("bcrypt");

//Extraer el modulo del json
const jwt = require("jsonwebtoken");

//Extraemos el modulo de configuracion para la palabra

const { Config } = require("../Config/config.js");

//@desc Insertar usuarios en la base de datos y registrarme
//@route POST /api/users/register
//@access Public

const RegistrarUsuario = asyncHandler(async (request, response) => {
  const { fullname, email, password, contact, picture } = request.body;

  if (!fullname || !email || !password || !contact || !picture) {
    //Creamos el error
    response.status(400);
    throw new Error("Por favor, completa todos los campos");
  }
  // Mediante el servicio, verificcamos el emial si existe en la base de datos.

  //Verificamos el email.
  const emailVerificado = await ServiceUsers.VerificarEmail({
    email: email,
  });
  if (emailVerificado) {
    console.log("He entrado tras la comprobacion del email  verificado");
  }
  //Al no existir deberiamos crearlos
  //Deberiamos hashear la contraseña para no guardarla en texto plano

  const hashPassword = await bcrypt.hash(password, 10);
  request.body.password = hashPassword;

  const usuarioCreado = await ServiceUsers.CrearUsuario(request.body);

  if (usuarioCreado) {
    //Se ha creado el usuario.
    response.status(201).json({
      _id: usuarioCreado.id,
      email: usuarioCreado.email,
      fullname: usuarioCreado.fullname,
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
//@route POST /users/login
//@access Public

const LoginUsuario = asyncHandler(async (request, response) => {
  const { email, password } = request.body;
  if (!email || !password) {
    response.status(400);
    throw new Error("Por favor, completa todos los campos");
  }
  //Comprobamos si el emaul existe en la base de datos.

  const emailComprobado = await ServiceUsers.VerificarEmail({
    email: email,
  });

  if (
    emailComprobado &&
    (await bcrypt.compare(password, emailComprobado.password))
  ) {
    //Juntamos los if para no dar puestas a los malos de que esta malos.
    console.log("He entrado como usuario confirmado");
    //Aqui creamos el token de acceso para el usuario.

    const AccesToken = jwt.sign(
      {
        emailComprobado: {
          id: emailComprobado._id,
          email: emailComprobado.email,
          admin: emailComprobado.isAdmin,
        },
      },
      Config.ACCESS_TOKEN_SECRET,
      { expiresIn: "1h" }
    );

    //Deberiamos enviar la cookie al cliente con el token de acceso.
    response
      .cookie("token", AccesToken, {
        httpOnly: true, // ✔️ evita acceso por JavaScript
        secure: false, // ⚠️ pon true en producción con HTTPS
        sameSite: "Strict",
        maxAge: 24 * 60 * 60 * 1000, // 1 día
      })
      .json({ message: "Login exitoso" });

    response.status(200).json({
      message: "Login de usuario",
      AccesToken,
    });
  } else {
    response.status(400);
    throw new Error("No hay cuenta con ese correo. ");
  }
});

const ObtenerUsuario = asyncHandler(async (request, response) => {
  //Extraemos el token de la cookie para obtener la información delk usuario

  response.status(200).json({
    message: "Obtener el usuario y sus datos",
  });
});

module.exports.ControllerUsers = {
  RegistrarUsuario,
  LoginUsuario,
  ObtenerUsuario,
};
