const express = require("express");

//Extraemos las variales de entorno
const { Config } = require("./src/config/index.js");

//Exportamos el rooter de anime

//Creamos la aplicacion
const app = express();
app.use(express.json());

// Usar el router
//app.use("/info", Router);

app.listen(Config.port, () => {
  console.log(`Servidor escuchando en http://localhost:${Config.port}`);
});

/*
Aqui el problema esta en que ya tengo el html. Sin embargo, parece ser que el css no se carga.
Hay que decirle al servidor que leea los achivos estatiticos con use
*/
//Configuramos el sevidor para lectura de ficheros estaticis
//app.use(express.static(__dirname + "/public"));
