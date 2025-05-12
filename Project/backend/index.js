// Express server setup

let express = require("express");
let app = express();
let mongoose = require("mongoose");
const enquirRouter = require("./App/routes/web/enquiryRoutes");
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

// Middleware
app.use(express.json());

// Routes
app.use('api/website/enquiry',enquirRouter);



app.listen(process.env.PORT || 3000, () => {
  console.log("server is running on port");
});
