var redis = require("redis");

var redisClient = redis.createClient(6379, "106.10.50.11");

redisClient.on("error", function(err) {
  console.log("Redis error: " + err);
});

module.exports = redisClient;
