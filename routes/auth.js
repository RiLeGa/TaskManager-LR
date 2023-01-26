const express = require('express');
const router = express.Router();

const {changePassword,checked,login,register,sendToken,verifyToken} = require('../controllers/authController')

/* /api/auth */

router
    .post('/register', register)
    .post('/login', login)
    .get('/checked', checked)
    .post('/sendToken', sendToken)
    .route('/resetPassword')
        .get(verifyToken)
        .post(changePassword)

module.exports = router;
