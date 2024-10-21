const mongoose = require('mongoose');
const DBURL = 'mongodb://localhost:27017/ChatApp';


const ConnectDB = async () => {
    try {
        await mongoose.connect(DBURL);
        console.log("Database connected successsfully");
    } catch (error) {
        console.log('error from database connection', error);
        process.exit(0);
    }
}

module.exports =  ConnectDB;