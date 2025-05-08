//Empezar a extraer las cosas.
const express = require("express");
const app = express(); // Objeto para el uso de express

//Extraemos modulos para su uso
const cookieParser = require("cookie-parser");
const path = require("path");

//La configuracion
const { Config } = require("./src/config/config.js");

//Traemos los routers
const { RouterUsers } = require("./src/Routers/UserRouter.js");
const { RouterProducts } = require("./src/Routers/ProductsRouter.js");
const { RouterOwner } = require("./src/Routers/OwnerRouters.js");

//Modulo de conexion a la base de datos
const conectaBD = require("./src/db/index");
conectaBD();

//Necesitamos el midelware para obtener el cuerpo
app.use(express.json());
//Para poder leer los datos desde un formulario de html. En estado true.

app.use(express.urlencoded({ extended: true }));
//Deja pasar el middleware de las cookies para luego leerlas en las oeticiones.

app.use(cookieParser);
//Esto le dice al servidor de poder leer archivos estaticops.

app.use(express.static(path.join(__dirname, "public")));
//Permite mezclar htm con javascript.

app.set("view engine", "ejs");

//Plantamos el servidor y las escuchas
app.listen(Config.port, (request, response) => {
  console.log(`Servidor escuchando en el puerto ${Config.port}`);
});

app.get("/", (req, res) => {
  res.send("Servidor funcionando correctamente 🚀");
});
