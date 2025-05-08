// Vamos a usar moongose como plantilla para hacer el esquema
const mongoose = require("mongoose");

const nuevoProductsSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: [true, "La imagen del producto es obligatoria"],
    },
    name: {
      type: String,
      required: [true, "El nombre del producto es obligatorio"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "El precio del producto es obligatorio"],
      min: [0, "El precio no puede ser negativo"],
    },
    discount: {
      type: Number,
      default: 0,
      min: [0, "El descuento no puede ser negativo"],
      max: [100, "El descuento no puede ser mayor al 100%"],
    },
    bgColor: {
      type: String,
      default: "#ffffff",
    },
    panelColor: {
      type: String,
      default: "#f5f5f5",
    },
    textColor: {
      type: String,
      default: "#000000",
    },
  },
  {
    timestamps: true, // Marca el tiempo de creación y actualización del documento.
  }
);

// Ahora creamo el modelo y lo exportamos

const nuevoProductsModel = mongoose.model("newProducts", nuevoProductsSchema);

module.exports = nuevoProductsModel;
