import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Admin from './pages/Admin'; // Import the AdminPage component
import Navbar from './components/Navbar'; // Assuming you have a Navbar component
import AdminInterface from './components/AdminInterface';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
};

export default App;


