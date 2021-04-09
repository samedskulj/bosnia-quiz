const mongoose = require("mongoose");
const bycrpt = require("bcryptjs");

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
  resetPasswordToke: String,
  resetPasswordExpire: Date,
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
const Korisnici = mongoose.model("Korisnici", KorisniciSchema);

module.exports = Korisnici;
