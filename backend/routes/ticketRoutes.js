const express = require('express');
const ticketController = require('../controllers/ticketController');
const router = express.Router();  

router.post('/', ticketController.create_ticket);

module.exports = router;
