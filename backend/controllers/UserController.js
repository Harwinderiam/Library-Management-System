import User from '../models/User.js';
import generateToken from '../utils/generateToken.js';

// Register new user
/*export const registerUser = async (req, res) => {
  const { username, name, email, contactNumber, password } = req.body;
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  const user = new User({
    username,
    name,
    email,
    contactNumber,
    password,
  });

  await user.save();

  res.status(201).json({
    _id: user._id,
    username: user.username,
    name: user.name,
    email: user.email,
    contactNumber: user.contactNumber,
    isAdmin: user.isAdmin,
    token: generateToken(user._id),
  });
};*/

export const registerUser = async (req, res) => {
    try {
      const { username, name, email, password, contactNumber } = req.body;
      
      // Create a new user instance
      const newUser = new User({
        username,
        name,
        email,
        password,
        contactNumber,
      });
      
      // Save the user to the database
      await newUser.save();
      
      res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
      console.error('Error creating user:', error.message);
      res.status(500).json({ message: 'Server error' });
    }
  };

// Authenticate user & get token
export const authUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      username: user.username,
      name: user.name,
      email: user.email,
      contactNumber: user.contactNumber,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
};

// Get user transactions
export const getUserTransactions = async (req, res) => {
  const transactions = await transactions.find({ user: req.user._id }).populate('book', 'name author');
  res.json(transactions);
};

