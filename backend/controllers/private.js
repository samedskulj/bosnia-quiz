const Korisnik = require("../models/Korisnici");
const ErrorResponse = require("../utils/errorResponse");
const jwt = require("jsonwebtoken");
const { use } = require("../routes/private");
require("dotenv").config();

exports.getPrivateData = async (req, res, next) => {
  res.status(200).json({
    sucess: true,
    ime: req.user.username,
    trofeji: req.user.trofeji,
    email: req.user.email,
    odigraniKvizovi: req.user.odigraniKvizovi,
  });
};
exports.dobitnikTrofeja = async (req, res, next) => {
  const { trofeji } = req.body;

  try {
    req.user.trofeji += trofeji;
    await req.user.save();
    res.status(200).json({
      sucess: true,
      data: "Čestitamo, dobili ste trofej",
    });
  } catch (error) {
    next(error);
  }
};
exports.pocetakKviza = async (req, res, next) => {
  try {
    req.user.odigraniKvizovi += 1;
    await req.user.save();
    res.status(200).json({
      sucess: true,
      data: "Kviz je započeo",
    });
  } catch (error) {
    next(error);
  }
};
