const moongoose = require("mongoose");
//Aqui sera ek esquema del modelo para realizar las operaciones CRUD.
//Digamos que Contacto seria la especie de conexion con la cua hariamos el service.

const contactSchema = new moongoose.Schema(
  {
    user_id: {
      type: moongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Usuarios",
    },
    //Añade el usuario al que pertenece el contacto.

    name: {
      type: String,
      required: [true, "Por favor, introduce tu nombre"],
    },
    email: {
      type: String,
      required: [true, "Por favor, introduce tu correo- electronico"],
    },
    phone: {
      type: String,
      required: [true, "Por favor, introduce tu telefono"],
    },
  },
  {
    timestamps: true, // Marca el tiempo de creacion y actualización del contacto.
  }
);

const Contacto = moongoose.model("Contacto", contactSchema);

module.exports = Contacto;
