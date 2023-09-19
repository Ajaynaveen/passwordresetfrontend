import React, { useState } from 'react';
import axios from 'axios';
import {  useParams,useNavigate } from 'react-router-dom'; 

function ResetPassword() {
    const navigate=useNavigate();
  const { token } = useParams();

  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: '',
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
    const { newPassword, confirmPassword } = formData;
    if (newPassword !== confirmPassword) {
        alert('Passwords do not match. Please make sure both fields have the same value.');
        return;
      }
      

    try {
      const response = await axios.post(`https://passwordreset-0t0v.onrender.com/reset-password/${token}`, {
        newPassword,
      });

      if (response.status === 200) {
        console.log('Password reset successfully');
        navigate('/login')
       
      }
    } catch (error) {
      console.error('Error resetting password:', error);
     
    }
  };

  return (
    <div>
      <h1>Reset Password</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="newPassword">New Password:</label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
}

export default ResetPassword;
