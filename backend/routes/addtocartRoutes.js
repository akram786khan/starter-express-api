const express = require('express');
const router = express.Router();
const { getCartProduct, addCartProduct } = require('../controllers/cartProducts/cartProducts')
const { cartprotect } = require('../middleware/cartAuthMiddleware');
router.get('/getCartProduct', cartprotect, getCartProduct)
router.post('/addCartProduct', cartprotect, addCartProduct)
module.exports = router;