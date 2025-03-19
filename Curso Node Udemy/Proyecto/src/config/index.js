require("dotenv").config();

module.exports.Config = {
  port: process.env.PORT,
};

// Aqui estan las configuraciones que utilizan modulos de configuraciones
// utuilizan las variables globales de config de puerto en el indice.
