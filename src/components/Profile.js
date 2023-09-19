import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const token = localStorage.getItem('token'); // Retrieve the token from local storage

    axios
      .get('https://passwordreset-0t0v.onrender.com/profile', {
        headers: {
          Authorization: `${token}`, 
        },
      })
      .then((response) => {
        console.log(response.data)
        setUserData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user profile:', error);
      });
  }, []);

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {userData.fname}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
};

export default Profile;
