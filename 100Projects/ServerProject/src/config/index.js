require("dotenv").config(); // Para tarer las variables del entorno.

module.exports.Config = {
  port: process.env.PORT,
  pgUser: process.env.PG_USER,
  pgHost: process.env.PG_HOST,
  pgBase: process.env.PG_DATABASE,
  pgPassword: process.env.PG_PASSWORD,
};

// Aqui estan las configuraciones que utilizan modulos de configuraciones
// utuilizan las variables globales de config de puerto en el indice.
