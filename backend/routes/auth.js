// routes/auth.js
const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const { registerUser } = require('../controllers/authController');

// User registration route with validation checks
router.post(
  '/register',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required and should be at least 6 characters').isLength({ min: 6 }),
  ],
  (req, res, next) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  registerUser
);

module.exports = router;
