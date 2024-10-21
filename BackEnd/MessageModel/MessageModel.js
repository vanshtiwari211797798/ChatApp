const mongoose = require('mongoose');



const MessageSchema = new mongoose.Schema({
    sender:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        require:true
    },
    receiver:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        require:true
    },
    message:{
        type:String,
        require:true
    }
    
})

const MessageModel = new mongoose.model('messages',MessageSchema);
module.exports = MessageModel