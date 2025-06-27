const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Sample endpoint for load forecasting
app.get('/api/load-forecast', (req, res) => {
  // Placeholder response
  res.json({ forecast: 'Load forecast data will be here' });
});

// Sample endpoint for peer-to-peer trading
app.get('/api/trading', (req, res) => {
  res.json({ message: 'Trading system API endpoint' });
});

// Sample endpoint for climate impact analysis
app.get('/api/climate-impact', (req, res) => {
  res.json({ leaderboard: [] });
});

// Sample endpoint for carbon footprint calculation
app.post('/api/carbon-footprint', (req, res) => {
  const { energyUsed } = req.body;
  // Simple calculation: 0.92 kg CO2 per kWh
  const footprint = energyUsed * 0.92;
  res.json({ carbonFootprint: footprint });
});

// Sample endpoint for chatbot interaction
app.post('/api/chatbot', (req, res) => {
  const { message } = req.body;
  // Placeholder chatbot response
  res.json({ reply: 'This is a placeholder chatbot response.' });
});

app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});
