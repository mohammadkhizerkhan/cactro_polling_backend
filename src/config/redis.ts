import { createClient } from 'redis';
import { config } from './config';

const redisUrl = `redis://${config.redisUser}:${config.redisPassword}@${config.redisHost}:${config.redisPort}`;
const redisClient = createClient({ url: redisUrl });

(async () => {
    try {
        await redisClient.connect();
        console.log('Connected to Redis');
    } catch (err) {
        console.error('Error connecting to Redis', err);
    }
})();

redisClient.on('error', (err) => {
    console.error('Redis error', err);
});

export default redisClient;
