const express = require("express");
const {
  eventRegister,
  getRegistrations,
  sendOrder,
  confirmRegistration,
  getRegistrationById,
  getDetails,
} = require("../controllers/eventRegister");

const router = express.Router();

router.route("/").post(eventRegister).get(getRegistrations);
router.route("/payment").post(sendOrder);
router.route("/payment/verify").post(confirmRegistration);
router.route("/details").post(getDetails);
router.route("/:id").get(getRegistrationById);

module.exports = router;
