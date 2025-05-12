const UserEnquiryModel = require("../../models/enquiry.models");

let enquiryInsert = (req, res)=>{
    let {sName, sEmail,sPhone, sMessage} = req.body;
    let enquiry = new UserEnquiryModel({
        name: sName,
        email: sEmail,
        phone: sPhone,
        message: sMessage,
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