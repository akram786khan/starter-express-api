const express = require('express');
const app = express()
const Router = express.Router()
Router.use(express.json())

const { addstudent, getstudent, getstudentfindByid } = require("../controllers/studentController/studentcontroller")
Router.post("/", addstudent)
Router.get("/", getstudent)
Router.get("/:_id", getstudentfindByid)
module.exports = Router