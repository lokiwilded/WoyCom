// routes/shipping.js
const express = require('express');
const router = express.Router();
const { createShippingLabel } = require('../controllers/shippingController');

// POST /api/shipping/create-label
router.post('/create-label', createShippingLabel);

module.exports = router;
