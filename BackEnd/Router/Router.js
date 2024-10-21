const userModel = require('../Models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Secret_Key = 'vdhdg5455/*-/%$@#!d6e)(+=}{][';
const MessageModel = require('../MessageModel/MessageModel');
const conversationModel = require('../ConversationModel/Converseation');
const { verifyToken } = require('../Auth/ToeknVerifier');


// End Point Url - http://localhost:5002/send-message/:receiver


// Regsiter a new user if user is not registered
const Signup = async (req, res) => {
    try {
        const { name, phone, email, password } = req.body;
        if (!name || !phone || !email || !password) {
            return res.status(400).json({ msg: "all field is require" })
        }
        const userExist = await userModel.findOne({ email: email });

        if (userExist) {
            return res.status(409).json({ msg: "User allready exist" });
        }
        const SortRound = 10;
        const hashPassword = await bcrypt.hash(password, SortRound);
        const newUser = await userModel({ name, phone, email, password: hashPassword });
        if (newUser) {
            await newUser.save();
            return res.status(201).json({ msg: "User Register Successfully" });
        }
    } catch (error) {
        console.error('error from signup user', error);
        return res.status(500).json({ msg: "Internal Srever Error" });
    }
}


// login user and generate token if user is registered
const SignIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ msg: "All field is required" });
        }
        const userRegistered = await userModel.findOne({ email });

        if (!userRegistered) {
            return res.status(409).json({ msg: "user is not registered" });
        }
        const comparePass = await bcrypt.compare(password, userRegistered.password);
        if (!comparePass) {
            return res.status(401).json({ msg: "Invalid creadential" });
        }
        const token = jwt.sign({ email }, Secret_Key, { expiresIn: "7d" });
        userRegistered.token = token;
        return res.status(200).json({ msg: "User Login Successfully", token: token, user:userRegistered });
    } catch (error) {
        console.error('error from signin user', error);
        return res.status(500).json({ msg: "Internal Srever Error" });
    }
}


// get all user
const getUser = async (req, res) => {
    try {
        const user = req.user;
        const getUser = await userModel.find({ _id: { $ne: user._id } }).select({ password: 0, phone: 0 });
        return res.status(200).json({ user: getUser });
    } catch (error) {
        console.error('error from get all user', error);
        return res.status(500).json({ msg: "Internal Srever Error" });
    }
}


// send msg
const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiver } = req.params;
        const sender = req.user._id


        let conversations = await conversationMo-del.findOne({
            participants: { $all: [sender, receiver] },
        })

        if (!conversations) {
            conversations = await conversationModel.create({
                participants: [sender, receiver],
            });
            const newMsg = new MessageModel({
                sender, receiver, message,
            })

            if (newMsg) {
                await newMsg.save();
                conversations.messages.push(newMsg._id);
                await conversations.save();
                return res.status(200).json({ msg: "Message Send" });
            }
        } else {
            const newMsg = new MessageModel({
                sender, receiver, message,
            })

            if (newMsg) {
                await newMsg.save();
                conversations.messages.push(newMsg._id);
                await conversations.save();
                return res.status(200).json({ msg: "Message Send" });
            }
        }
    } catch (error) {
        console.error('error from send message', error);
        return res.status(500).json({ msg: "Internal Srever Error" });
    }
}



//get all meassage 
const getMessage = async (req, res) => {
    try {
        const {id:receiver} = req.params;
        const sender = req.user._id
        const conversations = await conversationModel.findOne({
            participants:{$all: [sender, receiver]},
        }).populate("messages");
        if(!conversations){
            return res.status(201).json({msg:"no conversation found"})
        }
        const message = conversations.messages;
        return res.status(200).json({msg:message})
    } catch (error) {
        console.error('error from get msg', error);
        return res.status(500).json({msg:"Internal server error"});
    }
}
module.exports = { Signup, SignIn, getUser, sendMessage, getMessage }