// routes/userRoutes.js
import express from 'express';
import User from '../models/user.js';
import validateUser from '../middleware/validateMiddleware.js';

const router = express.Router();

// Get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new user
router.post('/',validateUser, async (req, res) => {
  const user = new User({
    username: req.body.username,
    name: req.body.name,
    email: req.body.email,
    contactNumber: req.body.contactNumber,
    password: req.body.password,
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
