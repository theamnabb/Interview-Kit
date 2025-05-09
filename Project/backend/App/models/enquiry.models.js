let mongoose = require("mongoose");

let userEnquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
},{timestamps: true});

// Use in model 

const UserEnquiryModel = mongoose.model("UserEnquiry", userEnquirySchema);

module.exports = UserEnquiryModel;


// Using Thsi model and schema in my routes now 
