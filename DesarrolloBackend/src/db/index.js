//Usamos el modulo de configuracion donde estan las configuraciones.

const { Config } = require("../config/config");

//usaremos la plantilla para conectarnos

const mongoose = require("mongoose");

const conectaBD = async () => {
  try {
    const connection = await mongoose.connect(Config.mongoUri);
    console.log(
      "Conexion a la database",
      connection.connection.host,
      connection.connection.name
    );
  } catch (error) {
    console.log("No se ha podido conectar a la base de datos", error.message);
    process.exit(1); //Cierra el proceso sino se conecta.
  }
};

//eXTRAER EL MODILO COMO FUNCION

module.exports = conectaBD;
