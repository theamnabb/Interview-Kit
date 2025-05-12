// Express server setup

let express = require("express");
let app = express();
let mongoose = require("mongoose");
require("dotenv").config();

// connect moogose

mongoose
  .connect(process.env.DBRUL)
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log("error connecting to DB", err);
  });

app.listen(process.env.PORT || 3000, () => {
  console.log("server is running on port");
});
