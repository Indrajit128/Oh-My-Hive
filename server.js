const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000;

// Middleware to serve static files from 'public' folder
app.use(express.static('public'));

// Middleware to parse JSON request bodies
app.use(express.json());

// MongoDB connection setup (replace <connection_string> with your MongoDB URI)
mongoose.connect('mongodb://localhost:27017/mydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully!'))
.catch((err) => console.error('MongoDB connection error:', err));

// New endpoint /api/users
app.get('/api/users', (req, res) => {
  res.json([{ id: 1, name: "Indrajit" }]);
});

// Existing endpoint /api/trading
app.get('/api/trading', (req, res) => {
  res.json({ message: 'Trading API working!' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
