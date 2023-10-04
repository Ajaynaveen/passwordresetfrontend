import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const containerStyle = {
  textAlign: 'center',
  backgroundColor: '#f0f0f0',
  padding: '20px',
  borderRadius: '5px',
  boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const inputStyle = {
  margin: '10px',
  padding: '5px',
  borderRadius: '3px',
  border: '1px solid #ccc',
  width: '100%',
};

const buttonStyle = {
  marginTop: '10px',
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '3px',
  cursor: 'pointer',
};

const errorStyle = {
  color: 'red',
  marginTop: '10px',
};

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://passwordreset-0t0v.onrender.com/login', formData);
      if (response.status === 200) {
        console.log('Login successful');
        console.log(response.data);
        localStorage.setItem('token', response.data); // Store the token in local storage

        navigate('/profile');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Invalid email or password. Please try again.'); // Set the error message
    }
  };

  return (
    <div style={containerStyle}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          style={inputStyle}
          required
        />
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          style={inputStyle}
          required
        />
        <button type="submit" style={buttonStyle}>
          Login
        </button>
        {errorMessage && <p style={errorStyle}>{errorMessage}</p>} {/* Display error message */}
      </form>
      <Link to="/forgetpassword">Forgot Password?</Link>
    </div>
  );
}

export default Login;
