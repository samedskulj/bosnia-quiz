const express = require("express");
const router = express.Router();
const {
  register,
  login,
  zaboravljenpassword,
  resetpassword,
} = require("../controllers/auth");

router.route("/registracija").post(register);

router.route("/login").post(login);

router.route("/zaboravljenasifra").post(zaboravljenpassword);

router.route("/resetpassword/:resetToken").put(resetpassword);
module.exports = router;
