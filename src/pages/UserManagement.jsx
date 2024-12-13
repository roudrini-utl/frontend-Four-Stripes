// src/pages/UserManagement.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../redux/userSlice';

const UserManagement = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleAddUser = () => {
    dispatch(addUser({ id: users.length + 1, name: `User ${users.length + 1}` }));
  };

  const handleRemoveUser = (id) => {
    dispatch(removeUser(id));
  };

  return (
    <div>
      <h1>User Management</h1>
      <button className="btn btn-primary" onClick={handleAddUser}>
        Add User
      </button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} <button onClick={() => handleRemoveUser(user.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;
