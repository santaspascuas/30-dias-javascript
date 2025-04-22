// La controladora de libros donde gestionamos los datos.
//Haremos el modulo controlado
//Debemos de llamar a la funcion del servicio.

const { ServiceLibros } = require("./servicesLibros");
const { Response } = require("../common/response");

module.exports.ControladorLibro = {
  obtenerLibros: async (request, response) => {
    try {
      const datos = await ServiceLibros.getLibros();

      Response.success(
        response,
        200,
        "Lista de usuarios en formato JSON",
        datos
      );
    } catch (error) {}
  },
  ObtenerLibro: async (request, response) => {
    try {
      const { isbn } = request.params;
      const resultado = await ServiceLibros.getLibrosbyIsbn(isbn);
      Response.success(
        response,
        200,
        "Lista de usuarios en formato JSON",
        resultado
      );
    } catch (error) {
      Response.error(response);
    }
  },

  InsertarLibros: async (request, response) => {
    try {
      const datos = request.body;
      const { isbn, title, author, genre, published_year } = datos;

      if (!isbn || !title || !author || !genre || !published_year) {
        return Response.error(response, new createError.NotAcceptable());
      }
      const resultado = await ServiceLibros.postLibros(datos);
      Response.success(response, 200, "Libro Insertado", resultado);
    } catch (error) {
      Response.error(response);
    }
  },
  EliminarLibros: async (request, response) => {
    try {
      const { id } = request.params;

      const datos = await ServiceLibros.deleteLibrosbyisbn(isbn);

      Response.success(response, 200, "Libro Eliminado", datos.isbn);

      console.log(isbn);
    } catch (error) {
      Response.error(response);
    }
  },
};
