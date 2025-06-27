import React from 'react';
import Dashboard from './components/Dashboard';
import Trading from './components/Trading';
import Leaderboard from './components/Leaderboard';
import CarbonCalculator from './components/CarbonCalculator';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div>
      <h1>AI-Powered Load Forecasting Portal</h1>
      <Dashboard />
      <Trading />
      <Leaderboard />
      <CarbonCalculator />
      <Chatbot />
    </div>
  );
}

export default App;
