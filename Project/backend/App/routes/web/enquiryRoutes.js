const express = require('express');
const { enquiryInsert, enquiryList } = require('../../controllers/web/enquiryController');
const enquiryRouter = express.Router();

// Post routes 
enquiryRouter.post('/insert', enquiryInsert)

// Post routes for view 
enquiryRouter.get('/view', enquiryList)


module.exports = enquiryRouter;