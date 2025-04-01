require("dotenv").config(); // Para tarer las variables del entorno.

module.exports.Config = {
  port: process.env.PORT,
  pgUser: process.env.PG_USER,
  pgHost: process.env.PG_HOST,
  pgBase: process.env.PG_DATABASE,
  pgPassword: process.env.PG_PASSWORD,
  JWT_SECRET: process.env.JWT_SECRET,
};

//Faltaria configurar la conexion a la base de datos con la información de las conexiones.
//Añadimos al .env las configuraciones de las variables globales para usar.
