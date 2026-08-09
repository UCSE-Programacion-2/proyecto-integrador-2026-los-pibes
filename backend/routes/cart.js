const express = require('express');

const router = express.Router();
const { getCart, addItem, removeItem } = require('../controllers/cartController');
const protect = require('../middlewares/auth');

router.get('/', protect, getCart);
router.post('/items', protect, addItem);
router.delete('/items/:productId', protect, removeItem);

module.exports = router;