const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://vsvcommunicationsavishek:4xchnyckNBa18aMc@backendvsv.4voiy.mongodb.net/?retryWrites=true&w=majority&appName=BackendVSV');
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
