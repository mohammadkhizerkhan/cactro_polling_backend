import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    try {
        const mongoUri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER_URL}/${process.env.MONGODB_DB_NAME}?retryWrites=true&w=majority`;
        await mongoose.connect(mongoUri);
        console.log('MongoDB connected successfully.');
    } catch (error:any) {
        console.log('MongoDB connection failed:', error.message);
        process.exit(1); // Exit process with failure
    }
};

export default connectDB;
