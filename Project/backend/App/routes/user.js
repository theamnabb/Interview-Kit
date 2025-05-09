// Create routes 
const express = require("express");
const router = express.Router();
const UserEnquiryModel = require("../models/enquiry.models");
const { body, validationResult } = require("express-validator");
const { sendEmail } = require("../utils/emailSender");

// POST route for user enquiry
router.post(
  "/enquiry",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("phone").notEmpty().withMessage("Phone number is required"),
    body("message").notEmpty().withMessage("Message is required"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, message } = req.body;

    try {
      // Save the enquiry to the database
      const newEnquiry = new UserEnquiryModel({
        name,
        email,
        phone,
        message,
      });
      await newEnquiry.save();

      // Send confirmation email
      await sendEmail(email, "Enquiry Received", "Thank you for your enquiry!");

      res.status(201).json({ message: "Enquiry submitted successfully!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);