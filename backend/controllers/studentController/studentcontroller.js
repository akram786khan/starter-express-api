const student = require("../../modals/studentModal/StudentModel")
// const subjects = require("../../model/studentmodel/studentsubmodel")
// const countr = require("../../model/studentmodel/studentcountrymodel")
// const cours = require("../../model/studentmodel/studentcoursemodel")


const getstudent = async (req, res) => {
    const data = await student.find();

    res.status(200).json({ status: true, message: data });

}
const getstudentfindByid = async (req, res) => {
    const data = await student.find({ _id: req.params._id });

    res.status(200).json({ status: true, message: data });

}

const addstudent = async (req, res) => {
    // const {course,country,subname} = req.body
    const { name, country, schoolname, number, coursse, gender, email, subject } = req.body
    //   const countrys = await countr.findOne({})
    // const courses = await cours.findOne({})
    // const subjecting = await subjects.findOne({})
    // JSON.stringify(countrys)
    // JSON.stringify(courses)
    // JSON.stringify(subjecting)
    // console.log(countrys.CountryCode);
    // console.log(courses.course.basiccourse);
    // console.log(countrys.CountrySchool.School[0])
    // console.log(subjecting);

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


}


module.exports = { addstudent, getstudent, getstudentfindByid }