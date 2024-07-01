import React from 'react';
import AdminInterface from '../components/AdminInterface';
import { useAuth } from '../services/authService';

const AdminPage = () => {
  const { isAdmin } = useAuth();

  return (
    <div>
      <h1>Admin Page</h1>
      {isAdmin ? (
        <AdminInterface />
      ) : (
        <p>You do not have permission to access this page.</p>
      )}
    </div>
  );
};

export default AdminPage;
