import dotenv from 'dotenv';

dotenv.config();

const config = {
    mongoUsername: process.env.MONGODB_USERNAME || '',
    mongoPassword: process.env.MONGODB_PASSWORD || '',
    mongoClusterUrl: process.env.MONGODB_CLUSTER_URL || '',
    mongoDbName: process.env.MONGODB_DB_NAME || 'polling_app',
};


export { config };
