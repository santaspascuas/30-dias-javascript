// Extraemos el modulo de configuracion para mongo
//Vamos a utilizar mongoose porque queremos controlar las inyecciones y hacer nuestro proyecto mas escalable y eficiente

const { Config } = require("../Config/config");
const moongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connection = await moongoose.connect(Config.mongoUri);
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

module.exports = connectDB;
// Esto hace que podamos exportar la funcion y conectarlas.
/*
const { MongoClient } = require("mongodb");

var connection = null; // Se declara la variable de conexión a nulo.
//Esto se hace porque la variable tiene que existir y ser nula para conectarse.

const Database = async () => {
  try {
    //¿Que pasa si ya tienes una conexion?. Deberias comprobar si hay conexion o no

    if (!connection) {
      const client = new MongoClient(Config.mongoUri);
      connection = await client.connect();
    }
    const db = connection.db(Config.mongoDbname);
    console.log("Se ha conectado a la base de datos de mongo");
    console.log(db.databaseName);
    return db;
  } catch (error) {
    console.log("No se ha conectado a la base", error.message);
    throw error;
  }
};

module.exports.Database = Database;
*/
