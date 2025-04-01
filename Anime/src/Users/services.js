// Aqui se hara las querys de la base de datos. Conectadas con los routers.
//Importamos el modulo de la
const { Database } = require("../database/db.js"); // Ahora podemos usar los modulos.

/*Debemos de crear una capa mas*/
/*Separamos para poder luego obtenerlos con la capa del controlador*/

const getUsers = async () => {
  const pool = await Database(); // Obtener el pool de las conexiones
  const client = await pool.connect(); // Ibtenemos un cluente.
  try {
    const result = await client.query("SELECT * FROM users"); // Lanzamiento de la consulta
    const datos = result.rows;
    return datos;
  } catch (error) {
    console.error("Error al obtener a los usuarios:", error.message);
    return error; // Devolvemos un array vacío en caso de error
  } finally {
    client.release();
  }
};

const getUserById = async (id) => {
  const pool = await Database(); // Obtener el pool de las conexiones
  const client = await pool.connect(); // Ibtenemos un cluente.

  try {
    const result = await client.query("SELECT * FROM USERS WHERE ID = $1", [
      id,
    ]);
    return result.rows;
  } catch (error) {
    console.error("Error al obtener al usuario", error.message);
    return error.message;
  } finally {
    client.release();
  }
};

const postUsuario = async (datos) => {
  const { id, username, email, password } = datos;
  const pool = await Database(); // Establecemos la coenxion.
  const client = await pool.connect(); // Obtenemos la conexion como cliente
  try {
    const result = await client.query(
      "INSERT INTO USERS (ID,USERNAME,EMAIL,PASSWORD) VALUES ($1,$2,$3,$4)",
      [id, username, email, password]
    );
    return { id, username, email }; // Retornamos el ID generado
  } catch (error) {
    console.error("Error al poster al usuario", error.message);
    return error; // Devolvemos un array vacío en caso de error
  } finally {
    client.release();
  }
};

const verificarUsuario = async (datos) => {
  const { email } = datos;
  const pool = await Database();
  const client = await pool.connect();
  try {
    const result = await client.query(
      "SELECT password FROM USERS WHERE email = $1",
      [email]
    );
    return result.rows;
  } catch (error) {
    console.error("Error al hacer la query", error.message);
    return error.message;
  } finally {
  }
};

module.exports.UserService = {
  getUsers,
  getUserById,
  postUsuario,
  verificarUsuario,
};
