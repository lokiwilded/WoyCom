// controllers/authController.js
const User = require('../models/User');

// @desc    Register a new user
// @route   POST /api/users/register
// @access  Public
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  console.log('Received data:', req.body); // Add this line to debug

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400).json({ message: 'User already exists' });
    return;
  }

  const user = new User({
    name,
    email,
    password, // You should hash the password in a real app
  });

  const createdUser = await user.save();
  res.status(201).json(createdUser);
};

module.exports = { registerUser };
