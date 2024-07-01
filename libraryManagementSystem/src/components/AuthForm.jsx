import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser, registerUser } from '../services/api'; // Ensure these functions are implemented
import Wrapper from '../assets/Wrappers/AuthForm.js';

const AuthForm = () => {
    const [isRegister, setIsRegister] = useState(false);
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
  
    const handleAuth = async (e) => {
      e.preventDefault();
      setError('');
  
      try {
        if (isRegister) {
          await registerUser({ username, name, email, contactNumber, password });
          navigate('/login');
        } else {
          const { data } = await loginUser({ email, password });
          localStorage.setItem('userInfo', JSON.stringify(data));
          navigate('/');
        }
      } catch (error) {
        setError('Authentication failed. Please try again.');
      }
    };
  
    return (
      <Wrapper.FormContainer>
        <h1>{isRegister ? 'Register' : 'Login'}</h1>
        {error && <Wrapper.Error>{error}</Wrapper.Error>}
        <Wrapper.Form onSubmit={handleAuth}>
          <Wrapper.Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          {isRegister && (
            <>
              <Wrapper.Input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <Wrapper.Input
                type="text"
                placeholder="Contact Number"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                required
              />
            </>
          )}
          <Wrapper.Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Wrapper.Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Wrapper.Button type="submit">
            {isRegister ? 'Register' : 'Login'}
          </Wrapper.Button>
        </Wrapper.Form>
        <Wrapper.ToggleButton onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? 'Already have an account? Login' : 'Need an account? Register'}
        </Wrapper.ToggleButton>
      </Wrapper.FormContainer>
    );
};

export default AuthForm;
