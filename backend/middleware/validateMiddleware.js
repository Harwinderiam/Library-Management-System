// Example middleware to validate incoming user data
import { body, validationResult } from 'express-validator';

 const validateUser = [
  body('username').trim().isLength({ min: 1 }).escape(),
  body('name').trim().isLength({ min: 1 }).escape(),
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  body('contactNumber').optional().isMobilePhone().escape(),
  
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];
export default validateUser;