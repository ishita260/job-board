import React, { useEffect, useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);

    // Simulate current logged-in user — update this logic as per your auth context
    const loggedInUser = storedUsers.find((u) => u.id === 1); // You can change the ID based on your login flow
    setCurrentUser(loggedInUser);
  }, []);

  const admins = users.filter((user) => user.role === 'admin');
  const regularUsers = users.filter((user) => user.role === 'user');

  return (
    <div className="profile-container">
      {currentUser && (
        <div className="profile-header">
          <h2>Welcome, {currentUser.name} 👋</h2>
          <p> Here are your profiles....</p>
          
        </div>
      )}

      <div className="user-lists">
        <div className="user-section">
          <h3>Admin List</h3>
          <ul>
            {admins.map((admin) => (
              <li key={admin.id}>
                <strong>{admin.name}</strong> - {admin.email}
              </li>
            ))}
          </ul>
        </div>

        <div className="user-section">
          <h3>User List</h3>
          <ul>
            {regularUsers.map((user) => (
              <li key={user.id}>
                <strong>{user.name}</strong> - {user.email}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
