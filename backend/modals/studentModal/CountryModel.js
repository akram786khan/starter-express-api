

const mongoose = require("mongoose")
const country = new mongoose.Schema({
    CountryCode: {
        type: String
    },
    CountryName: {
        type: String
    },
    CountrySchool: {
        type: Array
    }
})


module.exports = mongoose.model("country", country)