// Lo primero es que vamos a hacer una conexion. Lo primero es usar los modulos de configuracion y de express
const express = require("express");
//Ahora la configuracion
const { Config } = require("../config/index.js");

//Falta el modulo de postgres del pool
const { Pool } = require("pg");

//Tenemos que hacer una conexion. Primero tendremos una variable de xconexion sera null y luego se iniciara.

var conexion = null;

//Ahora creamos el modulo de la conexion

module.exports.Database = () =>
  //Son promesas que deben de resolverse. planteamos promesas

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
        console.log("Conexion realizada con exito");
      }
      resolve(conexion);
    } catch (error) {
      console.log("Error en la conexión a la base de datos", error);
      reject(error);
    }
  });
