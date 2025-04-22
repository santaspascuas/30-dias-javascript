//Las utilidades son para funciones que podemos exportar para poder utilizar las cosas.

const bcrypt = require("bcrypt");

const hashearContra = async (contra) => {
  const salt = await bcrypt.genSaltSync(10);
  return bcrypt.hash(contra, salt);
};
const CompareHash = (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};

module.exports.UtilityUser = {
  hashearContra,
  CompareHash,
};
