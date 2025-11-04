const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

let users = [
  { id: 1, name: "Alice", balance: 1000 },
  { id: 2, name: "Bob", balance: 500 }
];

// GET all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// POST new user
app.post('/api/users', (req, res) => {
  const { name, balance } = req.body;
  const newUser = { id: users.length + 1, name, balance: parseFloat(balance) };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
