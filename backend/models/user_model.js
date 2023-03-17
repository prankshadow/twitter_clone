const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    userName: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profileImg: {
        type: String,
        default: "http://bit.ly/402IflV"
    },
    date: {
        type: Date,
        default: Date.now
    },
})


module.exports = mongoose.model("UserModel", userSchema); //given the name UserModel in place of userSchema.