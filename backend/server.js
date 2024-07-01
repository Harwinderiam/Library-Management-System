// server.js
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bookRoutes from './routes/bookRoutes.js';
import userRoutes from './routes/userRoutes.js';
import morgan from 'morgan'; 
import cors from 'cors';
dotenv.config();

  

const app = express();
app.use(morgan('dev'));
app.use(express.json()); // Body parser middleware
app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from this origin
    methods: ['GET', 'POST'], // Allow only specified methods
    allowedHeaders: ['Content-Type'], // Allow only specified headers
  }));
  app.post('/api/users', (req, res) => {
    const { username, email, password } = req.body;
  
    // Basic validation
    if (!username || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }
  
    // Further validation logic can go here (e.g., checking email format, password strength, etc.)
  
    // Simulate user creation
    const newUser = { id: 1, username, email };
  
    res.status(201).json({ message: 'User registered successfully', user: newUser });
  });
  
// Routes
app.use('/api/books', bookRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 9000;
try {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(PORT, () => {
      console.log(`server running on PORT ${PORT}...`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }