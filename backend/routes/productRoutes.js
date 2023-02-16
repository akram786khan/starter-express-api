const express = require('express');
const router = express.Router();
const users = require('../modals/userModal');
router.get('/getProducts', async (req, res) => {
    const data = await users.find();
    res.status(200).json({
        message: data
    })
})
router.post('/addProducts', (req, res) => {
    res.status(200).json({
        message: "add Products"
    })
})
router.put('/updateProducts', (req, res) => {
    res.status(200).json({
        message: "Update Products"
    })
})
router.delete('/deleteProducts', (req, res) => {
    res.status(200).json({
        message: "delete Products"
    })
})
module.exports = router;