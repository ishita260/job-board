import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'; // Import CSS for styles and background image

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    const userExists = existingUsers.find(user => user.email === email);
    if (userExists) {
      alert('User already exists! Please login.');
      return;
    }

    const newUser = { email, password, role: 'user' }; // default role
    const updatedUsers = [...existingUsers, newUser];
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    alert('Registration successful!');
    navigate('/login');
  };

  return (
    <div className="register-page">
      <div className="register-bg" />
      <div className="form-container">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Register</button>
        </form>
        <p>
          Already a user? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;

