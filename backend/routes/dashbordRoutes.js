const express = require('express');
const router = express.Router();
const users = require('../modals/studentModal/StudentModel');
router.get('/Dashbord', async (req, res) => {
    const data = await users.find();
    arr = [
        Students = {
            "image": "https://watermark.lovepik.com/photo/20211130/large/lovepik-primary-school-students-study-picture_501212451.jpg",
            "name": "Students",
            "data": data
        },
        Employes = {
            "image": "https://wallpaperaccess.com/full/4322025.jpg",
            "name": "Employes",
            "data": data
        },
        Products = {
            "image": "https://stickybranding.com/wp-content/uploads/2019/11/How-to-name-your-product.jpg",
            "name": "Products",
            "data": data
        }

    ]
    res.status(200).json(arr)
})


module.exports = router;
