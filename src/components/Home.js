import React from 'react';
import NavBar from './Navbar';

const containerStyle = {
  textAlign: 'center',
  backgroundColor: '#f0f0f0',
  padding: '20px',
};

const headingStyle = {
  color: '#333',
  fontSize: '24px',
  marginBottom: '10px',
};

const paragraphStyle = {
  color: '#666',
  fontSize: '18px',
};

const Home = () => {
  return (
    <div style={containerStyle}>
      <NavBar />
      <h2 style={headingStyle}>Welcome to the React Application</h2>
      <p style={paragraphStyle}>
        This application allows users to log in and reset their password.
      </p>
    </div>
  );
};

export default Home;
