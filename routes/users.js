var express = require('express');
const { profile } = require('../controllers/usersController');
var router = express.Router();

/* GET users listing. */
router.get('/', profile);

module.exports = router;
