const express = require("express");
const jwt = require("jsonwebtoken");
const { Response } = require("../common/response");

module.exports.verifyToken = {
  verifyToken: (request, response, next) => {
    const token = request.headers["authorization"];
    console.log({ token });

    if (!token) {
      console.log("Token si añadirlo");
      return Response.error(response);
    }
    console.log({ token });

    next();
  },
};
