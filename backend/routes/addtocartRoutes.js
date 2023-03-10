const express = require('express');
const router = express.Router();
const { getCartProduct, addCartProduct } = require('../controllers/cartProducts/cartProducts')
router.get('/getCartProduct', getCartProduct)
router.post('/addCartProduct', addCartProduct)
module.exports = router;