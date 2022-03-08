// require mongoose
const mongoose = require('mongoose');

// connectDB
const connectDB = async () => {
    try {
        // step 1
        await mongoose.connect(process.env.DB_URI)
        console.log("Database connected ...")
        //step 2
    } catch (error) {
        console.log('Database is not connected !!!',error);
    }

}

module.exports = connectDB;