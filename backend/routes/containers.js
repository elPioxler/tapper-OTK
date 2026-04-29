const express = require('express');
const { verifyToken } = require('../middleware/auth');
const router = express.Router();

let containers = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  container_number: i + 1,
  status: ['disponible', 'en_uso', 'dañado'][i % 3],
  condition: ['bueno', 'regular', 'malo'][i % 3]
}));

router.get('/', verifyToken, (req, res) => res.json(containers));

module.exports = router;
