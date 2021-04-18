require("dotenv").config({ path: "../../.env" });
const crypto = require("crypto");
const mongoose = require("mongoose");
const bycrpt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const KorisniciSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Molimo Vas upišite username "],
  },
  email: {
    type: String,
    required: [true, "Molimo Vas upišite email"],
    unique: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Molimo Vas ukucajte pravilan mail",
    ],
  },
  password: {
    type: String,
    required: [true, "Molimo Vas upišite šifru"],
    minlength: 6,
    select: false,
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
  trofeji: {
    type: Number,
  },
  odigraniKvizovi: {
    type: Number,
  },
});

KorisniciSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bycrpt.genSalt(11);
  this.password = await bycrpt.hash(this.password, salt);
  next();
});

KorisniciSchema.methods.matchPasswords = async function (password) {
  return await bycrpt.compare(password, this.password);
};

KorisniciSchema.methods.getSignedToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

KorisniciSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.resetPasswordExpire = Date.now() + 10 * (60 * 1000);

  return resetToken;
};
const Korisnici = mongoose.model("Korisnici", KorisniciSchema);

module.exports = Korisnici;
