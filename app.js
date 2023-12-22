const { TwitterApi } = require('twitter-api-v2');

require('dotenv').config()

const client = new TwitterApi({
    appKey: process.env.appKey,
    appSecret: process.env.appSecret, 
    accessToken: process.env.accessToken,
    accessSecret: process.env.accessSecret,
    bearerToken: process.env.bearerToken,
});

// user got read and write access
const rwClient = client.readWrite;

const textTweet = async () => {
    try {
      await rwClient.v2.tweet(
          "second tweet has been posted :)");
      console.log("success");
    } catch (error) {
      console.error(error);
    }
};



textTweet()




