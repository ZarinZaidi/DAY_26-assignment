const express = require('express');
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//CORS(cross origin resource sharing) handling middleware to allow requests from any origin
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); //Allow requests from any origin
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    ); //Allow specified headers in requests
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, DELETE, GET'); //Allow specified HTTP methods
        return res.status(200).json({}); //respond with an empty json object for options request
    }
    next(); //move on to the next middleware
});

//routes for /
app.get('/', (req, res) => {
    res.json({ message: 'Hello, welcome to API 2nd session' });
});

//Exporting the Express app for use in other modules
module.exports = app;