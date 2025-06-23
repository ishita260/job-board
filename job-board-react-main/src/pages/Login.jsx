import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import bgImage from '../assets/images/NA_October_10.jpg'; // ✅ Correct path

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      localStorage.setItem('user', JSON.stringify({ email }));
      alert('Login successful!');
      navigate('/dashboard');
    } else {
      alert('Please fill in both fields');
    }
  };

  return (
    <>
      {/* Background Image with blur */}
      <div
        className="login-background"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      ></div>

      {/* Login Form Container */}
      <div className="login-page">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="logo-container">
            <span className="logo-circle">J</span>
            <h2 className="logo-text">Jobify</h2>
          </div>

          <h3 className="login-title">Login</h3>

          <label>Email</label>
          <input
            type="email"
            value={email}
            placeholder="john@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <div className="password-field">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="show-btn"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>

          <div className="button-group">
            <button type="submit" className="btn-submit">
              Submit
            </button>
            <button
              type="button"
              className="btn-explore"
              onClick={() => navigate('/dashboard')}
            >
              Explore the App
            </button>
          </div>

          <p className="register-link">
            Not a member yet? <a href="/register">Register</a>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
