import Transaction from '../models/Transaction.js';
import Book from '../models/Book.js';

// Issue book
export const issueBook = async (req, res) => {
    const { userId, bookId, dueDate } = req.body;
  
    const book = await Book.findById(bookId);
  
    if (book && book.available) {
      const transaction = new Transaction({
        user: userId,
        book: bookId,
        dueDate,
        transactionType: 'borrowed',
      });
  
      book.available = false;
      await book.save();
      await transaction.save();
  
      res.status(201).json(transaction);
    } else {
      res.status(400);
      throw new Error('Book not available');
    }
  };

// Return book
export const returnBook = async (req, res) => {
  const { transactionId } = req.body;

  const transaction = await Transaction.findById(transactionId).populate('book');

  if (transaction && transaction.transactionType === 'borrowed') {
    const book = transaction.book;
    book.available = true;

    const newTransaction = new Transaction({
      user: transaction.user,
      book: transaction.book,
      dueDate: new Date(),
      transactionType: 'returned',
    });

    await book.save();
    await newTransaction.save();

    res.status(201).json(newTransaction);
  } else {
    res.status(400);
    throw new Error('Invalid transaction');
  }
};

