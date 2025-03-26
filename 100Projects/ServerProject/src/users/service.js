//Quiero usar lo configurado en database para el index.
const { Database } = require("../database/index.js"); // Extraemos los modulos para poder utilizar la conexion a la  base

module.exports = {
  getlibros: async () => {
    try {
      const pool = await Database(); // Obtener el pool de las conexiones
      const result = await pool.query("SELECT * FROM LIBROS"); // Lanzamiento de la consulta
      const datos = result.rows;
      return datos;
    } catch (error) {
      console.log("No se obtiene los detalles", error.message);
      return []; // Retorna array vacio en caso de error.
    }
  },
  getUsers: async (id) => {
    try {
      const pool = await Database(); // Obtener la conexión
      const result = await pool.query("SELECT * FROM USUARIOS WHERE ID = $1", [
        id,
      ]);
      //El problema esta en que postgres no indetificaba la tabla al estar por defecto en la query como minuscula.
      //Da por defecto que el nombre de la tabla este en minusculas.

      return result.rows;
    } catch (error) {
      console.error("Error al obtener el usuario:", error.message);
      return []; // Retornar array vacío en caso de error
    }
  },

  deleteUser: async (id) => {
    try {
      //la conexion o pool
      const pool = await Database();
      const result = await pool.query("DELETE FROM USUARIOS WHERE ID = $1", [
        id,
      ]);
      return result;
    } catch (error) {
      console.error("Error al eliminar el usuario:", error.message);
    }
  },

  insertUsuario: async (data) => {
    try {
      const pool = await Database();
      //Vamos a probar la desestructuracion
      const { id, name, email } = data;
      //Ejecutamos la query
      const result = await pool.query(
        "INSERT INTO USUARIOS (ID,NAME,EMAIL) VALUES ($1, $2,$3)",
        [id, name, email]
      );
      return result.rows;
    } catch (error) {
      console.error("Error al insertar usuario:", error.message);
    }
  },
};
