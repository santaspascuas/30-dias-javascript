const mongoose = require("mongoose");

const nuevoUserSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: [true, "Introduce tu nombre completo"],
      minLenght: [3, "El nombre tiene que ser de mas de 3 caracteres"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Introduce tu email"],
      trim: true,
      lowercase: true,
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/,
        "Introduce un correo electrónico válido",
      ],
    },

    password: {
      type: String,
      required: [true, "Introduce contraseña"],
    },

    cart: {
      type: Array,
      default: [],
    },
    isAdmin: {
      type: Boolean, // CORREGIDO: "boolean" debe ir en mayúscula -> "Boolean"
      default: false,
    },

    orders: {
      type: Array,
      default: [],
    },

    contact: {
      type: Number,
    },

    picture: {
      type: String,
    },
  },
  {
    timestamps: true, // Marca el tiempo de creación y actualización del documento.
  }
);

//Falta exportar el modelo para luego usarlo en el controlador

const nuevoUserModel = mongoose.model("NewUsuarios", nuevoUserSchema);

//Exportamos el modelo

module.exports = nuevoUserModel;
