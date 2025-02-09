import dotenv from 'dotenv';

dotenv.config();

export const config = {
    redisHost: process.env.REDIS_HOST || '127.0.0.1',
    redisPort: process.env.REDIS_PORT || 6379,
    cacheMaxSize: Number(process.env.CACHE_MAX_SIZE) || 10,
    cacheTTL: Number(process.env.CACHE_TTL) || 60,
    redisUser: process.env.REDIS_USER || '',
  redisPassword: process.env.REDIS_PASSWORD || '',
};