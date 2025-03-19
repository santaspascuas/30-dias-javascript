//Se encarga de manipular con el crud. Simulando las obtenciones de los datos.
//Por ello debe de tener los datos aqui
let datos = require("./MOCK_DATA.json");

// La idea es usar modulos para realizar los procesos. Por ello vamos a exportar modulos.

module.exports = {
  getUsers: () => datos,
  getUser: (id) => {
    //Aqui vamos a recibir una id.
    let identificador = Number(id);
    let user = datos.filter((persona) => persona.id === identificador);
    return user;
  },
  createUser: (dataUser) => {
    console.log("Datos recibidos", dataUser);
    //La idea seria un objeto que se introduzca en el json creado
    let newUser = {
      id: datos.length + 1,
      ...dataUser,
    };
    console.log("Nuevo usuario creado:", newUser);
    datos.push(newUser);
    //Aqui seria retornar el usuario que se ha creado. Lo ideal para tener en el ciuerpo
    // en el body el usuario creado.
    return newUser;
  },

  putUser: (id, newUser) => {
    let identificador = Number(id);
    let userIndex = datos.findIndex((persona) => persona.id === identificador);
    //Te saca el indice
    datos[userIndex] = { ...datos[userIndex], ...newUser }; // combina los objetos para actualizar lo que se haya cambiado

    return datos[userIndex];
  },
};
