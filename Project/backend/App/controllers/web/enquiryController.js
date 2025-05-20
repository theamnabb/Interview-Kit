const UserEnquiryModel = require("../../models/enquiry.models");

let enquiryInsert = (req, res) => {
  let { name, email, phone, message } = req.body;
  let enquiry = new UserEnquiryModel({ name, email, phone, message });

  enquiry
    .save()
    .then((result) => {
      // console.log("Enquiry Inserted", result);
      res.status(201).json({ message: "Enquiry Inserted", enquiry: result });
    })
    .catch((err) => {
      console.log("Error inserting enquiry", err);
      res.status(500).json({ error: "Failed to insert enquiry" });
    });
};

let enquiryList = async (req, res) => {
  let enquiry = await UserEnquiryModel.find();
  res.send({ status: 1, enquiryList: enquiry });
};

// For Delete

let enquiryDelete = async (req, res) => {
  let enquiryId = req.params.id;
  let enquiry = await UserEnquiryModel.deleteOne({ _id: enquiryId });
  if (enquiry.deletedCount > 0) {
    res.send({ status: 1, message: "Enquiry Deleted" });
  }
};

module.exports = { enquiryInsert, enquiryList, enquiryDelete };
