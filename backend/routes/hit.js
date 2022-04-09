const express = require("express");
const { hitCount } = require("../controllers/hit");

const router = express.Router();

router.route("/").get(hitCount);

module.exports = router;
