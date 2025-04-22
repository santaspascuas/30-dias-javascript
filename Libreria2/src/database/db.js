//El archivo de configuracion
const { Config } = require("../Config/index");
//Falta el modulo de postgres del pool
const { Pool } = require("pg");

//La idea es abrir la conexion. Y poder usarla en las query y cerrar el cluente,

var conexion = null;

module.exports.Database = () =>
  new Promise((resolve, reject) => {
    try {
      if (!conexion) {
        conexion = new Pool({
          user: Config.pgUser,
          host: Config.pgHost,
          database: Config.pgBase,
          password: Config.pgPassword,
          idleTimeoutMillis: 30000,
          connectionTimeoutMillis: 2000,
        });
        console.log("Mensaje de que se ha conectado bien");
      }
      resolve(conexion);
    } catch (error) {
      console.log("No se hizo la conexion a la base de datos", error);
      reject(error);
    }
  });
