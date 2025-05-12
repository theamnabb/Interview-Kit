const UserEnquiryModel = require("../../models/enquiry.models");

let enquiryInsert = (req, res)=>{
    let {name, email,phone, message} = req.body;
    let enquiry = new UserEnquiryModel({
        name,
        email,
        phone,
        message
    });
    enquiry.save()
    .then((result)=>{
        console.log("Enquiry Inserted", result);
    })
    .catch((err)=>{
        console.log("Error inserting enquiry", err);
    })
    res.send("Enquiry Inserted");
}

module.exports = {enquiryInsert}