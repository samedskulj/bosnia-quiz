const express = require("express");
const {
  getPrivateData,
  dobitnikTrofeja,
  pocetakKviza,
} = require("../controllers/private");
const { protect } = require("../middleware/jwtchecker");
const router = express.Router();

router.route("/").get(protect, getPrivateData);
router.route("/pobjeda").post(dobitnikTrofeja);
router.route("/pocetak").post(pocetakKviza);
module.exports = router;
