//Aqui en la organización de los datos es la parte de la conexion.

const { MongoClient } = require("mongodb"); // El mongo cliente
//Sera un cliente que nos ayude a conectar a nuestra base de datos.

//Vamos a utilizar el debuger
const debug = require("debug")("app:module-datbase");

var connection = null; // Se declara la variable de conexión a nulo.
//Esto se hace porque la variable tiene que existir y ser nula para conectarse.

//Archivos de configuracion

const { Config } = require("../config/index");

module.exports.Database = (Collection) =>
  new Promise(async (resolve, reject) => {
    //asdasd
    try {
      //aqui hariamos muchas llamadas y no queremos. QUEREMOS QUE SINO EXISYTE, LA CREE.
      if (!connection) {
        const client = new MongoClient(Config.mongoUri); // Son los parametros para realizar la conexiones.
        connection = await client.connect(); // es una funcion asincrona para poder establecer la conexion.
        debug(`Nueva conexion realizada con mongo Atlas`);
      }
      const db = connection.db(Config.mongoDbname); // Asignamos la conexion tanto si hay como si es nula.
      const collection = db.collection(Collection);
      resolve(collection);
    } catch (error) {
      console.log(error.message);
      reject(error);
    }
    //sdasd
  });

//Mongodb es no relacional. Utiliza json o modulos con los que poder utilizarla
//Utilizamos promesas
