import mongoose from 'mongoose';
import { config } from './config';

const connectDB = async () => {
    try {
        await mongoose.connect(config.mongdbUrl);
        console.log('MongoDB connected successfully.');
    } catch (error:any) {
        console.log('MongoDB connection failed:', error.message);
        process.exit(1); // Exit process with failure
    }
};

export default connectDB;
