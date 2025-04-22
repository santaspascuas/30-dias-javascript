//Vamos a trare poder exportar configuraciones

require("dotenv").config();
//Este es necario para poder usar los .env en los modulos.

module.exports.Config = {
  port: process.env.PORT,
  mongoUri: process.env.MONGO_URI,
  mongoDbname: process.env.MONGO_DBNAME,
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
};
