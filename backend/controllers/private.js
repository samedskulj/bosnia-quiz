const Korisnik = require("../models/Korisnici");
const ErrorResponse = require("../utils/errorResponse");
const jwt = require("jsonwebtoken");
const { use } = require("../routes/private");
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
    ime: user.username,
    trofeji: user.trofeji,
    email: user.email,
    odigraniKvizovi: user.odigraniKvizovi,
  });
};
exports.dobitnikTrofeja = async (req, res, next) => {
  const { trofeji } = req.body;
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await Korisnik.findById(decoded.id);
    user.trofeji += trofeji;
    await user.save();
    res.status(200).json({
      sucess: true,
      data: "Čestitamo, dobili ste trofej",
    });
  } catch (error) {
    next(error);
  }
};
exports.pocetakKviza = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await Korisnik.findById(decoded.id);
    user.odigraniKvizovi += 1;
    await user.save();
    res.status(200).json({
      sucess: true,
      data: "Kviz je započeo",
    });
  } catch (error) {
    next(error);
  }
};
