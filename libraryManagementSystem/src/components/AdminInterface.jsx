import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  form {
    display: grid;
    gap: 1rem;
  }

  label {
    font-size: 1.2rem;
  }

  input, select {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    padding: 0.5rem 1rem;
    background-color: #333;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #555;
    }
  }
`;

const AdminInterface = () => {
  const [issueBookData, setIssueBookData] = useState({
    userId: '',
    bookId: '',
  });

  const [returnBookData, setReturnBookData] = useState({
    userId: '',
    bookId: '',
  });

  const [addBookData, setAddBookData] = useState({
    name: '',
    author: '',
    availability: true,
  });

  const [removeBookData, setRemoveBookData] = useState('');

  const handleIssueBook = (e) => {
    e.preventDefault();
    // Handle issue book functionality here
    console.log('Issue Book Data:', issueBookData);
  };

  const handleReturnBook = (e) => {
    e.preventDefault();
    // Handle return book functionality here
    console.log('Return Book Data:', returnBookData);
  };

  const handleAddBook = (e) => {
    e.preventDefault();
    // Handle add book functionality here
    console.log('Add Book Data:', addBookData);
  };

  const handleRemoveBook = (e) => {
    e.preventDefault();
    // Handle remove book functionality here
    console.log('Remove Book ID:', removeBookData);
  };

  return (
    <Wrapper>
      <h2>Admin User Operations</h2>

      <div>
        <h3>Issue Book</h3>
        <form onSubmit={handleIssueBook}>
          <label htmlFor="userId">User ID:</label>
          <input
            type="text"
            id="userId"
            value={issueBookData.userId}
            onChange={(e) => setIssueBookData({ ...issueBookData, userId: e.target.value })}
            required
          />
          <label htmlFor="bookId">Book ID:</label>
          <input
            type="text"
            id="bookId"
            value={issueBookData.bookId}
            onChange={(e) => setIssueBookData({ ...issueBookData, bookId: e.target.value })}
            required
          />
          <button type="submit">Issue Book</button>
        </form>
      </div>

      <div>
        <h3>Return Book</h3>
        <form onSubmit={handleReturnBook}>
          <label htmlFor="userId">User ID:</label>
          <input
            type="text"
            id="userId"
            value={returnBookData.userId}
            onChange={(e) => setReturnBookData({ ...returnBookData, userId: e.target.value })}
            required
          />
          <label htmlFor="bookId">Book ID:</label>
          <input
            type="text"
            id="bookId"
            value={returnBookData.bookId}
            onChange={(e) => setReturnBookData({ ...returnBookData, bookId: e.target.value })}
            required
          />
          <button type="submit">Return Book</button>
        </form>
      </div>

      <div>
        <h3>Add New Book</h3>
        <form onSubmit={handleAddBook}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={addBookData.name}
            onChange={(e) => setAddBookData({ ...addBookData, name: e.target.value })}
            required
          />
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={addBookData.author}
            onChange={(e) => setAddBookData({ ...addBookData, author: e.target.value })}
            required
          />
          <label htmlFor="availability">Availability:</label>
          <select
            id="availability"
            value={addBookData.availability}
            onChange={(e) => setAddBookData({ ...addBookData, availability: e.target.value })}
            required
          >
            <option value={true}>Available</option>
            <option value={false}>Not Available</option>
          </select>
          <button type="submit">Add Book</button>
        </form>
      </div>

      <div>
        <h3>Remove Book</h3>
        <form onSubmit={handleRemoveBook}>
          <label htmlFor="bookId">Book ID:</label>
          <input
            type="text"
            id="bookId"
            value={removeBookData}
            onChange={(e) => setRemoveBookData(e.target.value)}
            required
          />
          <button type="submit">Remove Book</button>
        </form>
      </div>
    </Wrapper>
  );
};

export default AdminInterface;
