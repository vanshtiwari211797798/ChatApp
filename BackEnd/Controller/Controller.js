const express = require('express');
const router = express.Router();
const {verifyToken} = require('../Auth/ToeknVerifier');
const {Signup,SignIn, getUser, sendMessage, getMessage} = require('../Router/Router');




router.route('/signup').post(Signup)
router.route('/signin').post(SignIn)
router.route('/get-all-user').get(verifyToken, getUser)
router.route('/send-message/:id').post(verifyToken, sendMessage)
router.route('/get-message/:id').get(verifyToken, getMessage)




module.exports = router;