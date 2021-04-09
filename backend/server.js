require("dotenv").config();

const express = require("express");
const connectBazu = require("./config/db");

connectBazu();

const app = express();

app.use(express.json());

app.use("/api/auth", require("./routes/auth"));

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server je proradio na portu ${process.env.PORT}`);
});
