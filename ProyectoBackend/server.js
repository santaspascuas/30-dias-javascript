//Aqui sera el servidor principal donde arrancaremos el servidor.
const express = require("express");

//Traemos el modulo de la configuracion

const { Config } = require("./src/Config/config.js");
//Traemos el router
const { RouterContactos } = require("./src/Contactos/index.js");
const { RouterUsers } = require("./src/Users/indexUser.js");
const errorHandler = require("./src/middleware/errorHandler.js");

const connectDB = require("./src/db/index.js");
connectDB();
const app = express();

//Middleare para recibir el body en formato JSON.
app.use(express.json());

app.listen(Config.port, () => {
  console.log(`Servidor escuchando en el puerto ${Config.port}`);
});

//Probamos el primer Router de Contactos.
app.use("/api/contactos", RouterContactos);
app.use("/api/users", RouterUsers);
//Aplicamos el middleware de error para cualquiera de las rutas.
app.use(errorHandler);
