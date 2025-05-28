const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config();

const dbConfig = {
    url: process.env.MONGODB_URI || 'mongodb://jona:123123@localhost:27017/?directConnection=true',
};

if (!process.env.MONGODB_URI) {
    console.warn('Warning: MONGO_URI environment variable is not set. Using default MongoDB URI.');
}

const connectDB = async () => {
    try {
        await mongoose.connect(dbConfig.url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};

module.exports = connectDB;