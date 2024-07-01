import mongoose from 'mongoose';

const transactionSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
    dueDate: { type: Date, required: true },
    transactionType: { type: String, required: true, enum: ['borrowed', 'returned'] },
  },
  {
    timestamps: true,
  }
);

const Transaction = mongoose.model('Transaction', transactionSchema);

export default Transaction;
