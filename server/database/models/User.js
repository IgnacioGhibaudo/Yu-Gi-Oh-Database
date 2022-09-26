const mongoose = require('mongoose');

const user = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        required: true,
    },
    favorites: {
        type: [Number],
        default: [], 
    }
},
    {
        timestamps: false,
        versionKey: false,
    })

module.exports = mongoose.model('User', user)