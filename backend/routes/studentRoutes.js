const express = require('express');
const app = express()
const Router = express.Router()
Router.use(express.json())

const { addstudent, getstudent, getstudentfindByid, deletestudent, updatestudent } = require("../controllers/studentController/studentcontroller")
Router.post("/", addstudent)
Router.get("/", getstudent)
Router.get("/:_id", getstudentfindByid);
Router.put("/:_id", updatestudent)
Router.delete("/:_id", deletestudent)

module.exports = Router