import express from 'express';
import cors from 'cors';
import { json } from 'body-parser';
import connectDB from './config/mongodb';
import userRoutes from './routes/user';
import questionRoutes from './routes/question';

const app = express();
connectDB();

// Middleware
app.use(cors());
app.use(json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/questions', questionRoutes);

// Error handling middleware
app.use((err:any, _req:any, res:any, _next:any) => {
    res.status(err.status || 500).json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
});

export default app;
