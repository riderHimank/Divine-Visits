const express = require('express');
const registerController = require('../controllers/registerController');
const router = express.Router();  

router.post('/signup', registerController.user_create_post);
router.post('/signin', registerController.user_signin);

module.exports = router;
