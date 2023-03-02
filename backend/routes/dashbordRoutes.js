const express = require('express');
const router = express.Router();
const users = require('../modals/studentModal/StudentModel');
router.get('/Dashbord', async (req, res) => {
    const data = await users.find();
    arr = [
        employes = {
            "image": "https://wallpaperaccess.com/full/4322025.jpg",
            "name": "Employes",
            "data": data
        }
    ]
    res.status(200).json(arr)
})


module.exports = router;
