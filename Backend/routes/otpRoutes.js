const express = require("express");
const sendOtp = require("../utils/sendOtp");
const otpStore = require("../utils/otpStore");

const router = express.Router();

// Send OTP
router.post("/send-otp", async (req, res) => {
  const { email } = req.body;

  try {
    const otp = await sendOtp(email);
    otpStore[email] = { otp, expiresAt: Date.now() + 5 * 60 * 1000 }; // Valid for 5 minutes

    res.json({ success: true, message: "OTP sent to email" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to send OTP" });
  }
});

// Verify OTP
router.post("/verify-otp", (req, res) => {
  const { email, otp } = req.body;
  const storedOtpData = otpStore[email];

  if (!storedOtpData)
    return res.status(400).json({ success: false, message: "No OTP found for this email." });

  if (Date.now() > storedOtpData.expiresAt) {
    delete otpStore[email];
    return res.status(400).json({ success: false, message: "OTP expired." });
  }

  if (storedOtpData.otp !== otp)
    return res.status(400).json({ success: false, message: "Invalid OTP." });

  delete otpStore[email];
  res.json({ success: true, message: "OTP verified successfully." });
});

module.exports = router;
// i have done send opt and verify otp
