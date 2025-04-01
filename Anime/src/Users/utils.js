//Sera un archivo con modulos de funciones utiles "";
// vamos a hacer aqui el hash de contarseñas
//imporamos el modulo

const bcrypt = require("bcrypt");
//Insertamos en la funcion.
/*Deberiamos meter la contraseña hasheada*/

const hashearContra = async (contra) => {
  const salt = await bcrypt.genSaltSync(10);
  return bcrypt.hash(contra, salt);
};

const CompareHash = (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};

module.exports.Utilitis = {
  hashearContra,
  CompareHash,
};
