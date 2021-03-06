const jwt = require("jsonwebtoken");
const Korisnik = require("../models/Korisnici");
const ErrorResponse = require("../utils/errorResponse");
require("dotenv").config();
exports.protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(new ErrorResponse("Nemate pristup ovoj ruti", 401));
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await Korisnik.findById(decoded.id);

    if (!user) {
      return next(new ErrorResponse("Nije pronadjen taj korisnik", 404));
    }
    req.user = user;
    next();
  } catch (error) {
    return next(new ErrorResponse("Nije autorizovano", 401));
  }
};
