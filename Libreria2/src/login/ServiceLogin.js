//Aqui vamos a poner el manejador de consultas del usuario.

const { Database } = require("../database/db.js");

const getPassword = async (nickname) => {
  const pool = await Database();
  const client = await pool.connect();

  try {
    const resultado = await client.query(
      "SELECT PASSWORD FROM USERS WHERE NICKNAME = $1",
      [nickname]
    );
    return resultado.rows[0];
  } catch (error) {
    console.error("Error el usuario no existe.", error.message);
    return error;
  } finally {
    client.release();
  }
};

const getEmail = async (nickname) => {
  const pool = await Database();
  const client = await pool.connect();

  try {
    const resultado = await client.query(
      "SELECT EMAIL FROM USERS WHERE NICKNAME = $1",
      [nickname]
    );
    return resultado.rows[0];
  } catch (error) {
    console.error("Error el usuario no existe.", error.message);
    return error;
  } finally {
    client.release();
  }
};

module.exports.ServiceLogin = {
  getPassword,
  getEmail,
};
