const nodemailer = require("nodemailer");

const posaljiEmail = (options) => {
  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVIS,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOpcije = {
    from: process.env.EMAIL_FROM,
    to: options.to,
    subject: options.subject,
    html: options.text,
  };

  transporter.sendMail(mailOpcije, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
};

module.exports = posaljiEmail;
