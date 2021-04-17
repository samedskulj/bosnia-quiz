const Korisnik = require("../models/Korisnici");
const ErrorResponse = require("../utils/errorResponse");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.getPrivateData = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await Korisnik.findById(decoded.id);
  res.status(200).json({
    sucess: true,
    data: user.username,
  });
};
