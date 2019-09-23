var express = require('express');
var router = express.Router();
let debug = require('debug')('dev::');
const data_controller = require('../controllers/data-managment');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TipOut API' });
});

router.get('/populate', data_controller.populate);



module.exports = router;
