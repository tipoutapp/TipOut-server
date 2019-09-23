var express = require('express');
var router = express.Router();
const userController = require('../controllers/user-controller');



/* GET users listing. */
router.get('/:id', userController.getUserById);
router.get('/postid/:id', userController.setSugg);

module.exports = router;
