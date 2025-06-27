import React from 'react';

const Leaderboard = () => {
  // Sample leaderboard data
  const users = [
    { name: 'User1', score: 150 },
    { name: 'User2', score: 120 },
    { name: 'User3', score: 100 },
  ];

  return (
    <div>
      <h2>Climate Impact Leaderboard</h2>
      <p>Gamified leaderboard showing climate impact scores.</p>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name}: {user.score} points
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
