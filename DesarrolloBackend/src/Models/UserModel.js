// VAMOS A USAR MONGOOSE PARA LLEVAR EL MODELO DE MONGODB
const mongoose = require("mongoose");

const nuevoUserSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: [true, "Introduce tu nombre completo"],
      minLength: [3, "El nombre debe tener al menos 3 caracteres"],
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

// Creamos el modelo basado en el schema
const nuevoUserModel = mongoose.model("NewUsuarios", nuevoUserSchema);

// Exportamos el modelo
module.exports = nuevoUserModel;
