const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("GET funcionando en /users");
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.send("POST funcionando en /users");
});

module.exports = {
  RouterUsers: router,
};
