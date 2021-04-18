const Korisnik = require("../models/Korisnici");
const ErrorResponse = require("../utils/errorResponse");
const posaljiEmail = require("../utils/pošaljiEmail");
const crypto = require("crypto");
exports.register = async (req, res, next) => {
  const { username, email, password, trofeji } = req.body;
  try {
    const korisnik = await Korisnik.create({
      username,
      email,
      password,
      trofeji,
    });
    sendToken(korisnik, 201, res);
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

    sendToken(user, 201, res);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.zaboravljenpassword = async (req, res, next) => {
  const { email } = req.body;
  try {
    const korisnik = await Korisnik.findOne({ email });
    if (!korisnik) {
      return next(new ErrorResponse("Email se ne može poslati!", 404));
    }
    const resetToken = korisnik.getResetPasswordToken();

    await korisnik.save();

    const resetUrl = `http://localhost:3000/passwordreset/${resetToken}`;

    const poruka = `<h1>Ukoliko želite resetovati šifru</h1>
    <p>Molimo Vas posjetite link, ispod</p>
    <a href=${resetUrl} clicktracking=off>${resetUrl}</a>`;
    try {
      await posaljiEmail({
        to: korisnik.email,
        subject: "Password Reset",
        text: poruka,
      });

      res.status(200).json({
        success: true,
        data: "Email Sent",
      });
    } catch (error) {
      korisnik.resetPasswordToken = undefined;
      korisnik.resetPasswordExpire = undefined;

      await korisnik.save();

      return next(new ErrorResponse("Email se nije mogao poslati", 500));
    }
  } catch (error) {
    next(error);
  }
};

exports.resetpassword = async (req, res, next) => {
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.resetToken)
    .digest("hex");
  try {
    const user = await Korisnik.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });
    if (!user) {
      return next(new ErrorResponse("Pogrešno resetovanje", 400));
    }
    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    res.status(201).json({
      success: true,
      data: "Šifra uspješno promjenuta",
      token: user.getSignedToken(),
    });
  } catch (error) {
    next(error);
  }
};

const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken();
  res.status(statusCode).json({ sucess: true, token });
};
