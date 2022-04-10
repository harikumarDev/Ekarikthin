const cookieToken = require("../config/cookie-token");
const User = require("../models/user");
const eventReg = require("../models/eventRegister");

exports.signup = async (req, res) => {
  const { username, password } = req.body;
  if (!(username && password)) {
    return res.status(400).json({
      message: "Please provide username and password",
    });
  }
  try {
    const user = await User.create({
      username,
      password,
    });

    cookieToken(user, res, 201);
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  if (!(username && password)) {
    return res.status(400).json({
      success: false,
      message: "Please provide username and password",
    });
  }

  const user = await User.findOne({ username });
  if (!user) {
    return res.status(400).json({
      success: false,
      message: "Invalid username or password",
    });
  }

  const isValidPassword = await user.isValidPassword(password);
  if (!isValidPassword) {
    return res.status(400).json({
      success: false,
      message: "Invalid username or password",
    });
  }

  cookieToken(user, res);
};

exports.logout = async (req, res) => {
  console.log("heair");
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged out",
  });
};

exports.getRegDetails = async (req, res) => {
  const { tokenId } = req.query;

  if (!tokenId) {
    return res.status(400).json({
      success: false,
      message: "Please provide tokenId",
    });
  }

  try {
    const details = await eventReg.findOne({ tokenId });

    if (!details) {
      return res.status(400).json({
        success: false,
        code: "INVALID_TOKEN",
        message: "Invalid token",
      });
    }

    res.status(200).json({
      success: true,
      details,
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

exports.updatePay = async (req, res) => {
  const { tokenId } = req.query;

  if (!tokenId) {
    return res.status(400).json({
      success: false,
      message: "Please provide tokenId",
    });
  }

  try {
    const details = await eventReg.findOne({ tokenId });

    if (!details) {
      return res.status(400).json({
        success: false,
        code: "INVALID_TOKEN",
        message: "Invalid token",
      });
    }

    if (details.paid) {
      return res.status(400).json({
        success: false,
        message: "Already paid for the token",
      });
    }

    details.paid = true;
    await details.save();

    res.status(200).json({
      success: true,
      message: "Updated successfully",
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

exports.getAllRegistrations = async (req, res) => {
  try {
    const allRegs = await eventReg.find({});
    res.status(200).json({
      success: true,
      allRegs,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
