const express = require("express");
const { getOrganisers } = require("../controllers/organiser");

const router = express.Router();

router.route("/").get(getOrganisers);

module.exports = router;
