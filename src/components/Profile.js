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
  
 
  const handleLogout = () => {
    
    localStorage.removeItem('token');
   
    navigate('/signup');
  };

  useEffect(() => {
    const token = localStorage.getItem('token');

    axios
      .get('https://backend-reset.onrender.com/profile', {
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
      <button style={buttonStyle} onClick={handleLogout}>Logout</button> 
      <Link to="/signup" style={linkStyle}>Return to Signup</Link> 
    </div>
  );
}

export default Profile;
