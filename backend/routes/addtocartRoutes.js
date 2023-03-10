const express = require('express');
const router = express.Router();
const { getCartProduct, addCartProduct } = require('../controllers/cartProducts/cartProducts')
const { protect } = require('../middleware/authMiddleware');
router.get('/getCartProduct', protect, getCartProduct)
router.post('/addCartProduct', protect, addCartProduct)
module.exports = router;