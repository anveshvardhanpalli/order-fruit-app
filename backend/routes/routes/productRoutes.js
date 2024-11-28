const express = require('express');
const router = express.Router();

// Mock product data (can be replaced with database integration later)
const products = [
  { id: 1, name: 'Carrot', price: 2.5 },
  { id: 2, name: 'Apple', price: 3.0 },
];

router.get('/', (req, res) => {
  res.json(products);
});

module.exports = router;
