const moongoose = require("mongoose");
//Aqui sera ek esquema del modelo para realizar las operaciones CRUD.
//Digamos que Contacto seria la especie de conexion con la cua hariamos el service.

const userSchema = new moongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please addthe user name"],
    },
    email: {
      type: String,
      required: [true, "Please addthe user email adress"],
      unique: [true, "Email address already taken"],
    },
    password: {
      type: String,
      required: [true, "Please add the user password"],
    },
  },
  {
    timestamps: true, // Marca el tiempo de creacion y actualización del contacto.
  }
);

const userModel = moongoose.model("Usuario", userSchema);

module.exports = userModel;
