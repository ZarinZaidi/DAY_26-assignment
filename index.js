const express = require('express');
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//CORS(cross origin resource sharing) handling middleware to allow requests from any origin
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); //
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

//Import the routes for items
const itemRoutes = require("./routes/items");

//Routes setup
app.use("/items", itemRoutes); //Assigning routes for items

//routes for /
app.get('/', (req, res) => {
    res.json({ message: 'Hello, welcome to Assignment for Day27' });
});

//Middleware to handle 404 errors
app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);//to pass to other middleware
})

//Middleware to handle 500 errors
app.use((req, res, next) => {
    req.status(error.status || 500); //Set response status based on error status received or default to 500 (Internal server error)
    req.json({
        error: {
            message: error.message
        }
    }); //Send JSON response with error message
});

//Exporting the Express app for use in other modules
module.exports = app;