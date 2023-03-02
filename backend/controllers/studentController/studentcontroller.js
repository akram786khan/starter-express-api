const student = require("../../modals/studentModal/StudentModel")
// const subjects = require("../../model/studentmodel/studentsubmodel")
// const countr = require("../../model/studentmodel/studentcountrymodel")
// const cours = require("../../model/studentmodel/studentcoursemodel")


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


module.exports = { addstudent, }