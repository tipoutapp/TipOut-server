var express = require('express');
var router = express.Router();
let debug = require('debug')('dev::');
const business_controller = require('../controllers/business-controller');

router.get('/id/:id', business_controller.getBusinessById);
router.post("/id/:id", business_controller.update);
router.get("/findids/", business_controller.getArrayIds);



module.exports = router;