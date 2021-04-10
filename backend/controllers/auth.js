const Korisnik = require("../models/Korisnici");
const ErrorResponse = require("../utils/errorResponse");
exports.register = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    const korisnik = await Korisnik.create({
      username,
      email,
      password,
    });
    res.status(201).json({
      success: true,
      korisnik,
    });
  } catch (error) {
    next(error);
  }
};
exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ErrorResponse("Molimo Vas ukucajte email i šifru", 400));
  }
  try {
    const user = await Korisnik.findOne({ email }).select("+password");

    if (!user) {
      return next(new ErrorResponse("Pogrešni podaci", 404));
    }

    const poklapaSe = await user.matchPasswords(password);

    if (!poklapaSe) {
      return next(new ErrorResponse("Pogrešni podaci", 401));
    }

    res.status(201).json({
      success: true,
      token: "213sad23ed",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.zaboravljenpassword = (req, res, next) => {
  res.send("Zaboravljen password ruta");
};

exports.resetpassword = (req, res, next) => {
  res.send("Reset passworda ruta");
};
