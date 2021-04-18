const express = require("express");
const { getPrivateData, dobitnikTrofeja } = require("../controllers/private");
const { protect } = require("../middleware/jwtchecker");
const router = express.Router();

router.route("/").get(protect, getPrivateData);
router.route("/pobjeda").post(dobitnikTrofeja);
module.exports = router;
