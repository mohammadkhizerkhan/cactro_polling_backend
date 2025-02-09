# Coctro Backend

An API for caching key-value pairs with a configurable TTL and limited max size, built with Node.js, TypeScript, Redis, and deployed on Vercel, using Redis Labs for database hosting.

## Tech Stack

- **Node.js**: JavaScript runtime environment
- **TypeScript**: Typed superset of JavaScript
- **Redis**: In-memory data structure store used as a database
- **Vercel**: Deployment platform
- **Redis Labs**: Redis hosting service

## Features

- Store key-value pairs with a TTL (Time-To-Live).
- Retrieve stored key-value pairs.
- Delete stored key-value pairs.
- Enforced limit on the number of keys that can be stored.
- Error handling with appropriate status codes and messages.

## Project Limitation
- **Max Keys**: Only 10 keys can be stored in the database.
- **TTL (time to live)**: Each key will get invalidated (expired) in 1 minute.
- Both the max keys limit and key invalidation duration can be configured using environment variables.

## Environment Variables

The following environment variables need to be configured:

```bash
REDIS_USER=your_redis_user
REDIS_PASSWORD=your_redis_password
REDIS_HOST=your_redis_host
REDIS_PORT=your_redis_port
CACHE_MAX_SIZE=10
CACHE_TTL=60
```

## Routes

All routes are defined in the `src/routes` module.

### POST /cache
Store a key-value pair.

**Request Body:**
```json
{
  "key": "name",
  "value": "khan"
}
```

**cURL Example:**
```sh
curl --location 'https://coctro-backend.vercel.app/cache' \
--header 'Content-Type: application/json' \
--data '{
    "key": "name",
    "value": "khan"
}'
```

### GET /cache/:key
Retrieve a value by key.

**cURL Example:**
```sh
curl --location 'https://coctro-backend.vercel.app/cache/name'
```

### DELETE /cache/:key
Delete a key-value pair by key.

**cURL Example:**
```sh
curl --location --request DELETE 'https://coctro-backend.vercel.app/cache/name'
```

## Response Structure

### Success Response
For all successful operations:
```json
{
  "message": "success message",
  "key": "name",
  "value": "khan"
}
```

### Error Response
For all errors that occur:
```json
{
  "message": "error description"
}
```

## Running Locally
**Start the redis instance locally**

1. **Install dependencies**:
   ```sh
   npm install
   ```

2. **Define environment variables** in a `.env` file in the root of your project:
   ```sh
   REDIS_USER=your_redis_user
   REDIS_PASSWORD=your_redis_password
   REDIS_HOST=your_redis_host
   REDIS_PORT=your_redis_port
   CACHE_MAX_SIZE=10
   CACHE_TTL=60
   ```

3. **Run the application**:
   ```sh
   npm run start
   ```

## Project Directory Structure

```
/src
├── /config          # Contains environment configuration and redis client setup
│   ├── config.ts
│   └── redis.ts
├── /service     # Controllers for cache operations
│   └── cache.ts
├── /routes          # Express routes for cache API
│   └── cache.ts
├── app.ts           # Express application setup
├── server.ts        # Server setup and listener
/.env                # Environment variables
/package.json        # Project dependencies and scripts
/tsconfig.json       # TypeScript configuration
/vercel.json         # Vercel deployment configuration
```

## Contribution

To contribute to this project, please fork the repository and submit a pull request.