require("dotenv").config();

const express = require("express");

const app = express();

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server je proradio na portu ${process.env.PORT}`);
});
