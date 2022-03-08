// 1 - require express
const express = require('express');
const path = require('path');


// 2 - create instance
const app = express();

// 5 - require dotenv
require('dotenv').config();

// 6 - connect DB
const connectDB = require('./config/connectDB')
connectDB()

// 8 middleware route
app.use(express.json())



// 9 require cors
const cors = require('cors')
app.use(cors())

// 7 - routes 
app.use('/api/contact',require("./routes/contact")) 



// 3 - create PORT
const PORT = process.env.PORT



// static file public_ser img
app.use(express.static('public\\'))




// 4 - create server
app.listen(PORT, error=>{
    error ? console.error(`Failed to connect sever !!! ${error}`)
    :
    console.log(`Server is running on port ${PORT}`);
})
