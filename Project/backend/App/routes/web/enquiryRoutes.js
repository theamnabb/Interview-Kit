const express = require('express');
const { enquiryInsert, enquiryList ,enquiryDelete} = require('../../controllers/web/enquiryController');
const enquiryRouter = express.Router();

// Post routes 
enquiryRouter.post('/insert', enquiryInsert)

// get routes for view 
enquiryRouter.get('/view', enquiryList)

// delete Routies for delete
enquiryRouter.delete('/delete/:id', enquiryDelete)


module.exports = enquiryRouter;