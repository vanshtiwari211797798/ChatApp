const jwt = require('jsonwebtoken');
const userModel = require('../Models/userModel');
const Secret_Key = 'vdhdg5455/*-/%$@#!d6e)(+=}{][';

const verifyToken =async (req, res, next) => {
    try {
        const token = req.header('Authorization');
        if(!token){
            return res.status(400).json({msg:"Unauthorized access, token not be provided"});
        }
        const jwtToken = token.replace('Bearer', '').trim();
        const isVerified = jwt.verify(jwtToken, Secret_Key);

        if(isVerified){
            const user = await userModel.findOne({email:isVerified.email}).select({password:0,phone:0})
            req.user = user;
            next();
           
        }
    } catch (error) {
        console.error('error from verify token', error);
        return res.status(500).json({msg:"Internal server error"});
    }
}

module.exports = {verifyToken}