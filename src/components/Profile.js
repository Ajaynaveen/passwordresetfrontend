import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const containerStyle = {
  textAlign: 'center',
  backgroundColor: '#f0f0f0',
  padding: '20px',
  borderRadius: '5px',
  boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
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

const linkStyle = {
  textDecoration: 'none',
};

function Profile() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  
  // Function to handle logout
  const handleLogout = () => {
    // Clear the token from local storage
    localStorage.removeItem('token');
    // Navigate to the signup page
    navigate('/signup');
  };

  useEffect(() => {
    const token = localStorage.getItem('token');

    axios
      .get('https://passwordreset-0t0v.onrender.com/profile', {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setUserData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user profile:', error);
      });
  }, []);

  return (
    <div style={containerStyle}>
      <h1>User Profile</h1>
      <p>Name: {userData.fname}</p>
      <p>Email: {userData.email}</p>
      <button style={buttonStyle} onClick={handleLogout}>Logout</button> {/* Logout button */}
      <Link to="/signup" style={linkStyle}>Return to Signup</Link> {/* Link to Signup page */}
    </div>
  );
}

export default Profile;
