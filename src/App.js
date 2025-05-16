import React, { useEffect, useState } from 'react';
import UserCard from './components/UserCard';
import { fetchUsers } from './services/api';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getUsers = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchUsers();
      setUsers(data);
    } catch (err) {
      setError('Something went wrong.');
    }

    setLoading(false);
  };

  useEffect(() => {
    getUsers();
  }, []);

  let loadingMessage = null;
  let errorMessage = null;

  if (loading) {
    loadingMessage = <p>Loading...</p>;
  }

  if (error) {
    errorMessage = <p>{error}</p>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>User List</h1>
      {loadingMessage}
      {errorMessage}
      <p>Total Users: {users.length}</p>
      <button onClick={getUsers}>Refresh</button>
      {users.map((user) => (
        <UserCard key={user.id} name={user.name} email={user.email} />
      ))}
    </div>
  );
}

export default App;
