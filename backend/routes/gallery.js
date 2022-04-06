const express = require("express");
const { getImages, getHomeImages } = require("../controllers/gallery");

const router = express.Router();

router.route("/").get(getImages);
router.route("/home").get(getHomeImages);

module.exports = router;
