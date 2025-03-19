const express = require("express");

//Vamos a hacer uso del servicio creado dentro del modulo de src.
// Ahora podemo utilizar las funciones que estan dentro del modulo.
const Service = require("./src/service.js");

//Hay que inicializarla
const app = express();
const puerto = 3000;

app.use(express.json()); // Permite recibir JSON en el body
//Esto es necesario para poder recvibir en el json en el cuerpo del post.

//Si se hacen peticiones get
app.get("/", (request, response) => {
  let id = request.params.id; //Obtengo los params de las request
  console.log(id);

  response.status(201).json({
    message: "Lista de los usuarios en formato Json",
    body: Service.getUsers(),
  });
});
// Ahora queremos probar a agregar usuarios mediante Post.
app.post("/", (request, response) => {
  let { body: newUser } = request;
  let usuarioCreado = Service.createUser(newUser);
  console.log(usuarioCreado);
  response.json({
    message: "Usuario creado", // Nos devuelve el usuario creado con retorno.
    body: usuarioCreado,
  });
});
/*
-----Establecemos un nuevo enpoint con su ruta especifica para recibir y sacar lo que quiero
*/
app.get("/:id", (request, response) => {
  //Obtengo los params de las request
  //Vamos a aplicar desestructuracion

  let {
    params: { id },
  } = request;
  let user = Service.getUser(id);
  response.json({
    message: `Usuario ${id}`,
    body: user,
  });
});

/*
-----Establecemos un nuevo enpoint con su ruta especifica para recibir y sacar lo que quiero
*/
app.put("/:id", (request, response) => {
  //coges tu cuerpo
  let {
    params: { id },
    body: newUser,
  } = request;

  let updatedUser = Service.putUser(id, newUser);

  response.json({
    message: `Usuario actualizado correctamente con el id:${id}`,
    body: updatedUser,
  });
});

/*
-----Establecemos un nuevo enpoint con su ruta especifica para recibir y sacar lo que quiero
*/

app.delete("/:id", (request, response) => {});

//El servidor escucha y devuelve un callback
app.listen(puerto, () => {
  console.log(`Servidor esuchando en http://localhost:${puerto}`);
});

//Los datos se guardan al vuelo.
