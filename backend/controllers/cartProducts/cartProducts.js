//const db = require('../config');
//db();
const jwt = require("jsonwebtoken")
//const mongodb = require('mongodb');
const cartproduct = require('../../modals/cartProductModal');
const asyncHandler = require('express-async-handler');



const getCartProduct = async (req, res) => {
    let data = await cartproduct.find({});
    console.log("======>", data);
    res.status(200).json(data)
}




const addCartProduct = asyncHandler(async (req, res) => {

    const { title, dis, price, reting, img, color, size, qun } = req.body
    if (!title && !dis && !price && !reting && !img && !color && !size && !qun) {
        res.status(400).json({ message: "Please add all Filed" })
    }

    let data = await cartproduct.create({
        title,
        dis,
        img,
        price,
        reting,
        color,
        size,
        qun,
        User_id: req.user.id
    });
    if (!data) {
        res.status(404).json({ error: "data is not difine" })
    }
    console.log("====>", data);
    res.status(200).json(data)
})

module.exports = {
    getCartProduct, addCartProduct
}