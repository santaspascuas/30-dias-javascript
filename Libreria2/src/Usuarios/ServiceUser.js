//Aqui vamos a poner el manejador de consultas del usuario.

const { Database } = require("../database/db.js");

const getUsers = async () => {
  const pool = await Database();
  const client = await pool.connect();
  try {
    console.log("Entro aqui en el servicio de la base de datos 1");
    const resultado = await client.query("SELECT * FROM users");
    return resultado.rows;
  } catch (error) {
    console.error("Error en la obtencion de los usuarios", error.message);
    return error;
  } finally {
    client.release();
  }
};

const getUserbyid = async (id) => {
  //Obtenemos la conexion
  const pool = await Database();
  const client = await pool.connect();
  try {
    console.log("Entro aqui en el servicio de la base de datos 2");
    const user = await client.query("SELECT * FROM users WHERE ID = $1", [id]);
    return user.rows;
  } catch (error) {
    console.log("Error al obtener el libro por isbn", error.message);
  } finally {
    client.release();
  }
};

const postUsuario = async (datos) => {
  //Obtenemos la conexion

  const { id, name, nickname, email, phone } = datos;
  const pool = await Database();
  const client = await pool.connect();
  try {
    console.log("Entro aqui en el servicio de la base de datos 3");
    const user = await client.query(
      "INSERT INTO users ( id, name, nickname, email, phone) VALUES ($1,$2,$3,$4,$5)",
      [id, name, nickname, email, phone]
    );

    return { id, name, nickname, email, phone };
  } catch (error) {
    console.log("Error al insertar el usuario", error.message);
  } finally {
    client.release();
  }
};

const deleteUser = async (id) => {
  const pool = await Database();
  const client = await pool.connect();
  try {
    const deleteLibro = client.query("DELETE FROM users WHERE ID = $1", [id]);
    return { id };
  } catch (error) {
    console.log("Error al eliminar un usuario", error.message);
    return error;
  }
};

const loginUser = async () => {
  const pool = await Database();
  const client = await pool.connect();
};

module.exports.ServiceUser = {
  getUsers,
  getUserbyid,
  postUsuario,
  deleteUser,
};
