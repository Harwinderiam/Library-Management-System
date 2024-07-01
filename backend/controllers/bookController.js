import Book from '../models/Book.js';
const books = [
    { id: 1, title: 'Book 1' },
    { id: 2, title: 'Book 2' }
  ];
// Add new book
export const addBook = async (req, res) => {
  const { name, author } = req.body;
  const book = new Book({ name, author });
  await book.save();
  res.status(201).json(book);
};

// Get all books
export const getAllBooks = async (req, res) => {
  //const books = await Book.find({});
  res.json(books);
};

// Remove book
export const removeBook = async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (book) {
    await book.remove();
    res.json({ message: 'Book removed' });
  } else {
    res.status(404);
    throw new Error('Book not found');
  }
};

// Update book availability
export const updateBookAvailability = async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (book) {
    book.available = !book.available;
    await book.save();
    res.json(book);
  } else {
    res.status(404);
    throw new Error('Book not found');
  }
};

