const express = require('express');
const { verifyToken, checkRole } = require('../middleware/auth');
const router = express.Router();

let users = [
  { id: 1, name: 'Leader', role: 'leader', email: 'leader@tapper.com' },
  { id: 2, name: 'Registration', role: 'registration', email: 'reg@tapper.com' }
];

router.get('/', verifyToken, checkRole(['leader']), (req, res) => res.json(users));

router.post('/', verifyToken, checkRole(['leader']), (req, res) => {
  const newUser = { id: users.length + 1, ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
});

module.exports = router;
