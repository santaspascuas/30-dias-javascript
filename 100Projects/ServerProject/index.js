const express = require("express");

//Necesitamos el modulo para usar las configuraciones de entorno
const { Config } = require("./src/config/index.js");

//Quiero usar lo configurado en database para el index.
const { Database } = require("./src/database/index.js");

const userRouters = require("./src/users/index.js");

//Creamos la aplicacion
const app = express();
app.use(express.json());

// Montamos el router en /api
app.use("/api", userRouters);

//Ahora queremos elegir el puerto y que escuche
app.listen(Config.port, () => {
  console.log(`Servidor escuchando en http://localhost:${Config.port}`);
});

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
