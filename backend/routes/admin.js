const express = require("express");
const {
  signup,
  login,
  logout,
  getRegDetails,
  updatePay,
} = require("../controllers/admin");
const { isLoggedIn } = require("../middlewares/user");

const router = express.Router();

router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/details").get(isLoggedIn, getRegDetails);
router.route("/pay").get(isLoggedIn, updatePay);

module.exports = router;
