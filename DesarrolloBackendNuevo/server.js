// Empezamos a extraer los modulos y a crear el servdiror
const express = require("express");
const app = express();

const path = require("path");
const cookieParser = require("cookie-parser");

//Midelware para el uso de body en el servidor.
app.use(express.json());

//Modulo de configuracion.
const { Config } = require("./src/Config/config.js");

//Modulo de conexion a la base de datos
const conectaDb = require("./src/Db/index.js");
conectaDb();

//Modulo de los routers.

const { RouterUsers } = require("./src/Routers/userRouter.js");
const { RouterProducts } = require("./src/Routers/productRouter.js");
const { OwnerProducts } = require("./src/Routers/ownerRouter.js");

const errorHandler = require("./src/middleware/ErrorHandler.js");

//Plantamos el servidor y las escuchas
app.listen(Config.port, (request, response) => {
  console.log(`Servidor escuchando en el puerto 4200`);
});

//Hay que crear la carpeta public y meter los archivos estaticos dentro.
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

//Uso de las cookies
app.use(cookieParser());
//Añadimos la ruta  y los modulos.
app.use("/users", RouterUsers);
app.use("/products", RouterProducts);
app.use("/owners", OwnerProducts);
//Aplicamos el middlware de errores para las rutas.
app.use(errorHandler);
