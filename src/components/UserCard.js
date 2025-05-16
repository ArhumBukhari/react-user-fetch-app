import React from 'react';

function UserCard({ name, email }) {
  return (
    <div style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

export default UserCard;
