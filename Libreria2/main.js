//Aqui sera nuestro servidor principal.
const express = require("express");
//Extraemos el modulo de configuracion

const { Config } = require("./src/Config/index");

const { RouterLibro } = require("./src/Libros/LibrosIndex");

const { RouterUser } = require("./src/Usuarios/UserIndex");

const { RouterLogin } = require("./src/login/index");

const cookieParser = require("cookie-parser");

//Express  debes de crear un objeto
const app = express();

//Configuramos para usar cookies
app.use(cookieParser());

//Se me olvida que el objeto app debe de usar cuerpos.
app.use(express.json());

//Utilizamos el router aqui.
app.use("/ApiLibros", RouterLibro);
app.use("/ApiUser", RouterUser);
app.use("/ApiUser", RouterLogin);

app.listen(Config.port, () => {
  console.log(`Mi servidor esta escuchando en el puerto ${Config.port}`);
});
