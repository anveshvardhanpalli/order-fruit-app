const express = require('express');
const router = express.Router();

let orders = [];

router.post('/', (req, res) => {
  const order = { ...req.body, id: Date.now(), status: 'Pending' };
  orders.push(order);
  res.status(201).json(order);
});

router.get('/:id', (req, res) => {
  const order = orders.find(o => o.id == req.params.id);
  if (order) {
    res.json(order);
  } else {
    res.status(404).json({ error: 'Order not found' });
  }
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const order = orders.find(o => o.id == id);

  if (order) {
    order.status = status;
    res.json(order);
  } else {
    res.status(404).json({ error: 'Order not found' });
  }
});

module.exports = router;
