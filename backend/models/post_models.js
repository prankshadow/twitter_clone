const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel'
    },
    description: {
        type: String,
        required: true
    },
    likes:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'UserModel'
        }
    ],
    image: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('PostModel', postSchema); //Renamed postSchema to Post Model.