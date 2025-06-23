import React from 'react';
import Wrapper from '../assets/wrappers/LogoutContainer';
import { useNavigate } from 'react-router-dom';

const LogoutContainer = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove user data or tokens if any
    localStorage.removeItem('loggedInUser');

    // Redirect to landing page ("/")
    navigate('/');
  };

  return (
    <Wrapper>
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </Wrapper>
  );
};

export default LogoutContainer;
