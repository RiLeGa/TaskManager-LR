var express = require('express');
const { profile } = require('../controllers/usersController');
const checkToken = require('../middlewares/checkToken');
var router = express.Router();

/* GET users listing. */
router.get('/profile', checkToken, profile);

module.exports = router;
