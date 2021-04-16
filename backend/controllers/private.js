const Korisnik = require("../models/Korisnici");
const ErrorResponse = require("../utils/errorResponse");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.getPrivateData = async (req, res, next) => {
  const token = jwt.verify(req.params.signedToken, process.env.JWT_SECRET);
  const user = await Korisnik.findById(token.id);
  res.status(200).json({
    sucess: true,
    data: user.username,
  });
};
