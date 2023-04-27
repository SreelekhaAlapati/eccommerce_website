const redis = require('redis')
const client = redis.createClient({
    password: 'TLRFJ8HGqqkhZxXH8RNZHAKdb7tU04tE',
    socket: {
        host: 'redis-13060.c251.east-us-mz.azure.cloud.redislabs.com',
        port: 13060
    }
});

client.connect();
client.on('connect', () => {
    console.log("Redis client connected")
});

module.exports = client;
