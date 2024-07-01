import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema(
    {
      username: { type: String, required: true, unique: true },
      name: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      contactNumber: { type: String },
      password: { type: String, required: true },
      isAdmin: { type: Boolean, default: false },
    },
    {
      timestamps: true,
    }
);
  

// Password encryption
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (err) {
    return next(err);
  }
});

// Check if the model already exists before defining it
const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;

