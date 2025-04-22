//Aqui estara el fichero o modulo de configuracion
require("dotenv").config();

module.exports.Config = {
  port: process.env.PORT,
  pgUser: process.env.PG_USER,
  pgHost: process.env.PG_HOST,
  pgBase: process.env.PG_DATABASE,
  pgPassword: process.env.PG_PASSWORD,
  secretWord: process.env.JWT_SECRET,
};

//Hay que añadir la conexion a la base de datos//
