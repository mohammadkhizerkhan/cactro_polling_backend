import { Request, Response, NextFunction } from 'express';
import redisClient from '../config/redis';
import { config } from '../config/config';

export const postCache = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { key, value } = req.body;

        if (!key || !value) {
            return res.status(400).json({ message: 'Key and Value are required' });
        }

        const dbSize = await redisClient.dbSize();
        if (dbSize >= config.cacheMaxSize) {
            return res.status(400).json({ message: 'Cache limit reached' });
        }

        await redisClient.setEx(key, config.cacheTTL, value);

        return res.status(200).json({ message: 'Cache set successfully', key, value });
    } catch (error) {
        next(error);
    }
};

export const getCache = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { key } = req.params;
        const value = await redisClient.get(key);

        if (value) {
            return res.status(200).json({ key, value });
        } else {
            return res.status(404).json({ message: 'Key not found' });
        }
    } catch (error) {
        next(error);
    }
};

export const deleteCache = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { key } = req.params;
        const deletedCount = await redisClient.del(key);

        if (deletedCount === 0) {
            return res.status(404).json({ message: 'Key not found' });
        }

        return res.status(200).json({ message: 'Cache deleted successfully', key });
    } catch (error) {
        next(error);
    }
};
