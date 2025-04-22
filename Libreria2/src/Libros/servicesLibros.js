// Aqui iran las funciones o metodos de extraccion de datos de la base de datos.

const { Database } = require("../database/db.js");

const getLibros = async () => {
  //Aqui usaremos para haer las querys con try chact,
  const pool = await Database();
  const client = await pool.connect();
  try {
    //Aqui es el pool y la ejecucion de los datos.
    const resultado = await client.query("SELECT * FROM books");
    return resultado.rows;
  } catch (error) {
    console.error("Error al obtener a los usuarios:", error.message);
    return []; // Devolvemos un array vacío en caso de error
  } finally {
    client.release();
  }
};

const getLibrosbyIsbn = async (isbn) => {
  //Obtenemos la conexion
  const pool = await Database();
  const client = await pool.connect();
  try {
    const libro = await client.query("SELECT * FROM BOOKS WHERE ISBN = $1", [
      isbn,
    ]);
    return libro.rows;
  } catch (error) {
    console.log("Error al obtener el libro por isbn", error.message);
  } finally {
    client.release();
  }
};

const postLibros = async (datos) => {
  //Obtenemos la conexion
  //Desestructuramos los datos obtenidos o enviados.
  const { isbn, title, author, genre, published_year } = datos;
  const pool = await Database();
  const client = await pool.connect();

  try {
    const libroposteado = await client.query(
      "INSERT INTO BOOKS (isbn, title, author, genre, published_year) VALUES ($1,$2,$3,$4,$5)",
      [isbn, title, author, genre, published_year]
    );
    return { isbn, title, author, genre, published_year };
  } catch (error) {
    console.log("Error al obtener el libro por isbn", error.message);
    return error;
  } finally {
    client.release();
  }
};

const deleteLibrosbyisbn = async (isbn) => {
  const pool = await Database();
  const client = await pool.connect();

  try {
    const deleteLibro = client.query("DELETE FROM BOOKS WHERE ISBN = $1", [
      isbn,
    ]);
    return { isbn };
  } catch (error) {
    console.log("Error al eliminar el libro", error.message);
    return error;
  }
};

module.exports.ServiceLibros = {
  getLibros,
  getLibrosbyIsbn,
  postLibros,
  deleteLibrosbyisbn,
};
