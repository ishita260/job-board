import React, { useEffect, useState } from 'react';
import './Admin.css';

const Admin = () => {
  const [users, setUsers] = useState([]);

  // Load users from localStorage or initialize with default
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users'));
    if (storedUsers && storedUsers.length > 0) {
      setUsers(storedUsers);
    } else {
      const defaultUsers = [
        { id: 1, name: 'Ishita Jain', email: 'ishitaaa2605@gmail.com', role: 'admin', isDefaultAdmin: true },
        { id: 2, name: 'Ankur Sharma', email: 'ankursharma@gmail.com', role: 'user' },
        { id: 3, name: 'Riya Mehta', email: 'riya34@gmail.com', role: 'user' },
        { id: 4, name: 'Rahul Verma', email: 'rahul@g.com', role: 'user' },
      ];
      setUsers(defaultUsers);
      localStorage.setItem('users', JSON.stringify(defaultUsers));
    }
  }, []);

  // Promote or demote user and persist
  const toggleAdminRole = (id) => {
    const updatedUsers = users.map((user) => {
      if (user.id === id && !user.isDefaultAdmin) {
        const newRole = user.role === 'admin' ? 'user' : 'admin';
        alert(`🔄 ${user.name} is now a ${newRole}`);
        return {
          ...user,
          role: newRole,
        };
      }
      return user;
    });
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  // Remove user and persist
  const removeUser = (id) => {
    const user = users.find(u => u.id === id);
    const updatedUsers = users.filter((user) => user.id !== id);
    alert(`🗑️ ${user.name} has been removed`);
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  return (
    <div className="admin-panel">
      <h1 className="admin-heading">Admin Control Panel 🖥️</h1>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(({ id, name, email, role, isDefaultAdmin }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{email}</td>
              <td>
                <span className={`role ${role}`}>{role}</span>
              </td>
              <td>
                {!isDefaultAdmin && (
                  <button
                    className={`btn ${role === 'admin' ? 'demote' : 'promote'}`}
                    onClick={() => toggleAdminRole(id)}
                  >
                    {role === 'admin' ? 'Remove from Admin' : 'Promote to Admin'}
                  </button>
                )}
                <button className="btn remove" onClick={() => removeUser(id)}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
