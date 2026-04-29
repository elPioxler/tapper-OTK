const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();

let users = [
  { id: 1, name: 'Admin Leader', email: 'leader@tapper.com', password: '$2a$10$...', role: 'leader' },
  { id: 2, name: 'Donor', email: 'donor@tapper.com', password: '$2a$10$...', role: 'donor' }
];

router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) return res.status(400).json({ error: 'Faltan campos' });

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = { id: users.length + 1, name, email, password: hashedPassword, role: 'donor' };
  users.push(newUser);

  const token = jwt.sign({ id: newUser.id, role: newUser.role }, process.env.JWT_SECRET, { expiresIn: '24h' });
  res.json({ token, user: { ...newUser, password: undefined } });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);
  if (!user) return res.status(401).json({ error: 'Credenciales inválidas' });

  const token = jwt.sign({ id: user.id, role: user.role, name: user.name }, process.env.JWT_SECRET, { expiresIn: '24h' });
  res.json({ token, user: { ...user, password: undefined } });
});

module.exports = router;
