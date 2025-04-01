const express = require("express");

//Extraemos las variales de entorno
const { Config } = require("./src/config/index.js");

//Exportamos el rooter de anime
const userRouters = require("./src/Users/index.js");
const indexRoutes = require("./src/index/index.js");

//Quiero usar lo configurado en database para el index.
const { Database } = require("./src/database/db.js");

//Creamos la aplicacion
const app = express();
app.use(express.json());

app.listen(Config.port, () => {
  console.log(`Servidor escuchando en http://localhost:${Config.port}`);
});

// Usar el router

app.use("/api", userRouters);
app.use("/api", indexRoutes);

/*
Aqui el problema esta en que ya tengo el html. Sin embargo, parece ser que el css no se carga.
Hay que decirle al servidor que leea los achivos estatiticos con use
*/
//Configuramos el sevidor para lectura de ficheros estaticis
//app.use(express.static(__dirname + "/public"));

//Las conexiones usan promesas. Para resollver promesas usas await.

async function main() {
  try {
    const pool = await Database(); // Obtenemos el pool de conexiones
    const result = await pool.query("SELECT NOW()"); // Consulta de prueba
    console.log("Hora actual en PostgreSQL:", result.rows[0].now);
  } catch (error) {
    console.error("Error al conectar a PostgreSQL:", error);
  }
}

main();
