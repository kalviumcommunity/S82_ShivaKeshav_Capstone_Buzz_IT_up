const nodemailer = require("nodemailer");
const otpGenerator = require("otp-generator");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
    user: "goudshivakeshav@gmail.com", // Your email
    pass: "thwk qcmk xwot mlli", // App-specific password
  },
});

