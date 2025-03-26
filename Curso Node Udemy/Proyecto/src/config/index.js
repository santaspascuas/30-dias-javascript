require("dotenv").config(); // Para tarer las variables del entorno.

module.exports.Config = {
  port: process.env.PORT, // uso de variable de entornos. El puerto con el paquete dotenv
  mongoUri: process.env.MONGO_URI,
  mongoDbname: process.env.MONGO_DBNAME,
};

// Aqui estan las configuraciones que utilizan modulos de configuraciones
// utuilizan las variables globales de config de puerto en el indice.
