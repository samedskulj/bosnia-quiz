const express = require("express");
const { getPrivateData } = require("../controllers/private");
const { protect } = require("../middleware/jwtchecker");
const router = express.Router();

router.route("/:signedToken").get(protect, getPrivateData);

module.exports = router;
