const Korisnik = require("../models/Korisnici");

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
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res
      .status(400)
      .json({ success: false, error: "Molimo Vas upišite podatke" });
  }
  try {
    const user = await Korisnik.findOne({ email }).select("+password");
    if (!user) {
      res.status(404).json({ success: false, error: "Pogrešni podaci" });
    }
    const poklapaSe = await user.matchPasswords(password);

    if (!poklapaSe) {
      res.status(404).json({ success: false, error: "Pogrešni podaci" });
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
