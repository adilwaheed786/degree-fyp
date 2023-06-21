import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Authentication/AuthContext';// Import the AuthContext and useAuth components

import './Adminlogin.css';

export const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth(); 

  const handleLogin = (e) => {
    e.preventDefault();

    let isValid = true;

    if (email.trim() === '') {
      setEmailError('This field is required');
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError('Invalid email address');
      isValid = false;
    }

    if (password.trim() === '') {
      setPasswordError('This field is required');
      isValid = false;
    } else if (!validatePassword(password)) {
      setPasswordError('Invalid password');
      isValid = false;
    }

    if (isValid) {
      // Perform authentication check here
      // For example, call an API to verify credentials
      // If the credentials are correct, navigate to the protected route
      if (email === 'admin@gmail.com' && password === '123456') {
       login();
        navigate('/verify-auth');
      } else {
        // Handle incorrect credentials
        // Show error message or perform other actions
        setPasswordError('Invalid email or password');
      }
    }
  };

  const handleEmailFocus = () => {
    setEmailError('');
  };

  const handlePasswordFocus = () => {
    setPasswordError('');
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 5;
  };

  return (
    <div className="OuterContainer">
      <div className="InnerContainer">
        <h1 className="heading">LOGIN</h1>
        <div>
          <input
            placeholder="Email"
            className="form-control UserInput shadow"
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            onFocus={handleEmailFocus}
          />
          {emailError && <span style={{ color: 'red' }}>{emailError}</span>}
        </div>
        <div>
          <input
            placeholder="Password"
            className="form-control UserInput mt-20 shadow"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            onFocus={handlePasswordFocus}
          />
          {passwordError && <span style={{ color: 'red' }}>{passwordError}</span>}
        </div>
        <button className="button mt-20" type="submit" onClick={handleLogin}>
          Log In
        </button>
      </div>
    </div>
  );
};
