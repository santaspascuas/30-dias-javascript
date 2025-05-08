//Usamos el modulo de configuraciones

const { Config } = require("../Config/config.js");

//Vamos a usar moongose para conectarnos a la base de datos.

const mongoose = require("mongoose");

const conectaDb = async () => {
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

//Estraemos el modulo

module.exports = conectaDb;
