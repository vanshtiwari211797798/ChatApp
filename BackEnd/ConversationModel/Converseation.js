const mongoose = require('mongoose');
const User = require('../Models/userModel');
const Message = require('../MessageModel/MessageModel');


const conversationSchema = new mongoose.Schema({
    participants:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:User
        },
    ],
    messages:[{type:mongoose.Schema.Types.ObjectId, ref:Message}]
})

const conversationModel = new mongoose.model('conversations',conversationSchema);
module.exports = conversationModel;