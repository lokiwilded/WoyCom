// routes/orders.js
const express = require('express');
const router = express.Router();
const { addOrderItems } = require('../controllers/orderController');

router.post('/', addOrderItems);

module.exports = router;
