import dotenv from 'dotenv';

dotenv.config();

export const config = {
  mongdbUrl: process.env.MONGODB_URL || 'mongodb://localhost:27017/pollingapp',
  mongodbPassword: process.env.MONGODB_PASSWORD || '',
};