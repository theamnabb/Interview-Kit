const express = require('express');
const { enquiryInsert } = require('../../controllers/web/enquiryController');
const enquiryRouter = express.Router();

// Post routes 
enquiryRouter.post('/insert', enquiryInsert)


module.exports = enquiryRouter;