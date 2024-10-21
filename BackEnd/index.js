const express = require("express");
const ConnectDB  = require('./DataBase/DataBase');
const router = require('./Controller/Controller');
const cors = require('cors');
const app = express();


const Origin = {
    origin:'http://localhost:5173',
    method:"GET, POST, PUT, DELETE",
    Credential:true
}

app.use(cors(Origin));
app.use(express.json());
app.use('/', router)



const PORT=5002;


ConnectDB().then(() => {
    app.listen((PORT), () => {
        console.log(`App is listen on the port ${PORT}`);
    })
})

