// Vamos a gestionar la conexion a la base de datos.
const { Pool } = require("pg"); // Extraemos el modulo para postgress
const { Config } = require("../config/index"); // Traemos el modulo de configuracion para usa el .env

var conexion = null; // Variable para almacenar la conexion.

module.exports.Database = () =>
  // Una promesa es una operacion que toma su tiempo en ejecutarse.

  new Promise((resolve, reject) => {
    //Esto devuelve una promesa y debemos de tratarla
    try {
      if (!conexion) {
        //Aqui sera la conexion nueva
        conexion = new Pool({
          user: Config.pgUser,
          host: Config.pgHost,
          database: Config.pgBase,
          password: Config.pgPassword,
          idleTimeoutMillis: 30000,
          connectionTimeoutMillis: 2000,
        });
        console.log("Conexion realizada con exito");
      }

      resolve(conexion);
    } catch (error) {
      console.log(error.message);
      reject(error);
    }
  });

// Esta sera la variable de conexion con postgres SQL
