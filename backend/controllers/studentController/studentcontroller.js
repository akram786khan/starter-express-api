const student = require("../../modals/studentModal/StudentModel")
const country = require("../../modals/studentModal/CountryModel");
const course = require("../../modals/studentModal/CourseModel")
// const subjects = require("../../model/studentmodel/studentsubmodel")
// const countr = require("../../model/studentmodel/studentcountrymodel")
// const cours = require("../../model/studentmodel/studentcoursemodel")
const asyncHandler = require('express-async-handler')

const getstudent = asyncHandler(async (req, res) => {
    const data = await student.find();
    res.status(200).json({ status: true, message: data });

})
const updatestudent = asyncHandler(async (req, res) => {
    const fintId = await student.findById(req.params._id);
    if (!fintId) {
        res.status(400).json({ message: 'student Not Found' });

    }
    const UpdateStudent = await student.findByIdAndUpdate(req.params._id, req.body, {
        new: true
    })
    console.log("===> UpdateStudent", UpdateStudent);
    res.status(200).json({ message: `Update Student data ${req.params._id}` });

})
const deletestudent = asyncHandler(async (req, res) => {
    const fintId = await student.findById(req.params._id);
    if (!fintId) {
        res.status(400).json({ message: "student Not Found" })

    }
    await fintId.remove();
    res.status(200).json({ message: `delete student data ${req.params._id}` });

})
const getstudentfindByid = asyncHandler(async (req, res) => {
    const data = await student.find({ _id: req.params._id });

    res.status(200).json({ status: true, message: data });

})

const addstudent = asyncHandler(async (req, res) => {
    // const {course,country,subname} = req.body
    const { name, country, schoolname, number, coursse, gender, email, subject } = req.body


    if (!name || !country || !schoolname || !number || !coursse || !gender || !email || !subject) {
        res.status(400).json({ error: "please add all filds" })
    }

    const data = await student.create({
        name,
        country,
        schoolname,
        number,
        coursse,
        gender,
        email,
        subject,
    })
    if (data) {
        res.status(201).json({
            status: true,
            name,
            country,
            schoolname,
            number,
            coursse,
            gender,
            email,
            subject,
        })
    } else {
        res.status(400).json({ error: "Invalid Students Data" })
    }


})

const getCountry = asyncHandler(async (req, res) => {
    const data = await country.find();
    if (data) {
        res.status(400).json({ status: false, message: "data not found" })
    }
    res.status(200).json({ status: true, message: data });

})

const getCountryfindByid = asyncHandler(async (req, res) => {
    const data = await country.find({ _id: req.params._id });

    res.status(200).json({ status: true, message: data });

})

const addCountry = asyncHandler(async (req, res) => {
    // const {course,country,subname} = req.body
    const { CountryCode, CountryName, CountrySchool } = req.body


    if (!CountryCode || !CountryName || !CountrySchool) {
        res.status(400).json({ error: "please add all filds" })
    }

    const data = await country.create({

        CountryCode,
        CountryName,
        CountrySchool,
    })
    if (data) {
        res.status(201).json({
            status: true,
            _id: data._id,
            CountryCode,
            CountryName,
            CountrySchool,
        })
    } else {
        res.status(400).json({ error: "Invalid Country Data" })
    }


})

const getCourse = asyncHandler(async (req, res) => {
    const data = await course.find();
    res.status(200).json({ status: true, message: data });

})
const getCoursefindByid = asyncHandler(async (req, res) => {
    const data = await course.find({ _id: req.params._id });

    res.status(200).json({ status: true, message: data });

})
const addCourse = asyncHandler(async (req, res) => {
    // const {course,country,subname} = req.body
    const { course } = req.body


    if (!course) {
        res.status(400).json({ error: "please add all filds" })
    }

    const data = await course.create({
        course
    })
    if (data) {
        res.status(201).json({
            status: true,
            course
        })
    } else {
        res.status(400).json({ error: "Invalid Course Data" })
    }


})

module.exports = {
    addstudent,
    getstudent,
    getstudentfindByid,
    updatestudent,
    deletestudent,
    getCountry,
    getCountryfindByid,
    addCountry, getCourse,
    getCoursefindByid,
    addCourse
}