import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:9000/api', // Adjust this to your backend URL
});

API.interceptors.request.use(
  (config) => {
    // Add authorization token to headers if available in localStorage
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo && userInfo.token) {
      config.headers.Authorization = `Bearer ${userInfo.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const loginUser = async (credentials) => {
    try {
      const response = await API.post('/login', credentials);
      return response.data; // Return data instead of full response object
    } catch (error) {
      throw error.response.data; // Throw error data for better error handling
    }
  };
  
  export const registerUser = async (userData) => {
    try {
      const response = await API.post('/users', userData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };
  
  export const getBooks = async () => {
    try {
      const response = await API.get('/books');
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };
  
  export const addBook = async (bookData) => {
    try {
      const response = await API.post('/books', bookData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };
  
  export const removeBook = async (bookId) => {
    try {
      const response = await API.delete(`/books/${bookId}`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };
  
  export const issueBook = async (transactionData) => {
    try {
      const response = await API.post('/transactions', transactionData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };
  
  export const returnBook = async (transactionData) => {
    try {
      const response = await API.post('/transactions/return', transactionData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };
  
  export const getUserTransactions = async () => {
    try {
      const response = await API.get('/users/transactions');
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };
