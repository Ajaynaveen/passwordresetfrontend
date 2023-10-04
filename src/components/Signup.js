import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const containerStyle = {
  textAlign: 'center',
  backgroundColor: '#f0f0f0',
  padding: '20px',
  borderRadius: '5px',
  boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
};
const linkStyle = {
  textDecoration: 'none',
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

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fname: '',
    email: '',
    password: '',
    cpassword: '',
  });

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
      const response = await axios.post(
        'https://passwordreset-0t0v.onrender.com/users',
        formData
      );
      console.log(response, 'res');
      if (response.status === 200) {
        console.log('User registered successfully');
        navigate('/login');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div style={containerStyle}>
      <h1>Create User</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          id="fname"
          name="fname"
          value={formData.fname}
          onChange={handleChange}
          placeholder="First Name"
          style={inputStyle}
          required
        />
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
        <input
          type="password"
          id="cpassword"
          name="cpassword"
          value={formData.cpassword}
          onChange={handleChange}
          placeholder="Confirm Password"
          style={inputStyle}
          required
        />
        <button type="submit" style={buttonStyle}>
          Register
        </button>
      </form>
      <Link to="/login" style={linkStyle}>login</Link> 

    </div>
  );
}

export default SignUp;
