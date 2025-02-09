import express from 'express';
import cors from 'cors';
import { json } from 'body-parser';
import cacheRoutes from './routes/cache';

const app = express();

// Middleware
app.use(cors());
app.use(json());

// Routes
app.use('/cache', cacheRoutes);

// Error handling middleware
app.use((err:any, _req:any, res:any, _next:any) => {
    res.status(err.status || 500).json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
});

export default app;
