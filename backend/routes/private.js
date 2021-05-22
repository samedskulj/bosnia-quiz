const express = require("express");
const {
  getPrivateData,
  dobitnikTrofeja,
  pocetakKviza,
} = require("../controllers/private");
const { protect } = require("../middleware/jwtchecker");
const router = express.Router();

router.route("/").get(protect, getPrivateData);
router.route("/pobjeda").post(protect, dobitnikTrofeja);
router.route("/pocetak").post(protect, pocetakKviza);
module.exports = router;
