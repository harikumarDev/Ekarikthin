const mongoose = require("mongoose");

const OtpSchema = new mongoose.Schema({
  email: String,
  otp: Number,
  expireTime: Number,
});

module.exports = mongoose.model("Otp", OtpSchema);
