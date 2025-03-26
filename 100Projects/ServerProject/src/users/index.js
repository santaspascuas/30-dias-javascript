// Aqui necesitamos usar el modulo para empèzar a usar routers
const express = require("express");
const router = express.Router();

//Hemos cambiado para no pasarle directamemte la app
//Con esto manejamos el enrutador con las urls que le pasamos.

//La idea es poder utilizar las consultas en el enrutador.
//Debo de usar el modulo de configuracion y empezar con las consultas dentro de las funciones.

///Nos damos cuenta que si exportas el servcio mucho mejor.

const Service = require("./service");

router
  //La diferencia es que al hacer peticiones asincronas.Necesitas realizar la obtencion de forma asincrona.
  //Me salia una promise que no se resolvia. Lo he solucionado convirtiendo la funcion asincrona
  //He puesti async y usar await
  .get("/libros", async (request, response) => {
    response.json({
      message: "Lista de los libros en formato JSON",
      body: await Service.getlibros(),
    });
  })
  .get("/users/:id", async (request, response) => {
    const { id } = request.params;
    const user = await Service.getUsers(id);
    if (user.length === 0) {
      return response.status(404).json({
        message: `Usuario con ID ${id} no se ecnuentra`,
      });
    }
    // Esto seria para obtener el control del error. Lo que no tendria con el lenght vacio
    //Como no me ha devuelto nada. Pues se manda un mensaje de que no hay nada.
    response.json({
      message: `Usuario con ID ${request.params.id}`,
      body: await Service.getUsers(id),
    });
  })
  .post("/users", async (request, response) => {
    const data = request.body;
    const resultado = await Service.insertUsuario(data);
    console.log(data);
    response.json({
      message: "Usuario creado correctamente",
    });
  })
  .put("/users/:id", (request, response) => {
    //Hacerlo mas tardes.

    response.json({
      message: `Usuario con ID ${request.params.id} actualizado correctamente`,
    });
  })

  .delete("/users/:id", async (request, response) => {
    const { id } = request.params;
    const resultado = await Service.deleteUser(id);
    const { rowcount } = resultado;

    if (rowcount === 0) {
      return response.status(404).json({
        message: `Usuario con ID ${id}nose encuentra`,
      });
    }
    response.json({
      message: `Eliminado el usuario con id ${id}`,
    });
  });

module.exports = router;
