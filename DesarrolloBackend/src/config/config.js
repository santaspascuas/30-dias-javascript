//Aqui sera el modulo para las configuraciones.
require("dotenv").config();

module.exports.Config = {
  port: process.env.PORT,
  mongoUri: process.env.MONGO_URI,
  mongoDbname: process.env.MONGO_DBNAME,
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
};
