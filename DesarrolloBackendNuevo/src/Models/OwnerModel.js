const mongoose = require("mongoose");
const nuevoOwnerSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: [true, "Introduce el nombre, por favor"],
      minLenght: [3, "El nombre tiene que ser de mas de 3 caracteres"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Introduce tu email"],
      trim: true,
      lowercase: true,
      unique: true, // Recomendado si los emails no deben repetirse
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/,
        "Introduce un correo electrónico válido",
      ],
    },
    password: {
      type: String,
      required: [true, "Introduce contraseña"],
    },
    products: {
      type: Array,
      default: [],
    },
    picture: {
      type: String,
    },
    gstin: {
      type: String,
    },
  },
  {
    timestamps: true, // Marca el tiempo de creación y actualización del documento.
  }
);

//Creamos el modelo y luego lo exportamos

//Creamos el modelo y luego lo exportamos.
const nuevoOwnerModel = mongoose.model("NewOwner", nuevoOwnerSchema);

//Exportamos el mdelo

module.exports = nuevoOwnerModel;
