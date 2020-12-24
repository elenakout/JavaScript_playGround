const Twitter = require('twitter');
const dotenv = require('dotenv');

dotenv.config();

// connect to twitter
const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,

});

// pull next tweet from spreadsheat

// send tweet
client.post('statuses/update', {status: 'Merry Christmas!!'},  function(error, tweet, response) {
  if(error) throw error;
  console.log(tweet);  // Tweet body.
  console.log(response);  // Raw response object.
});

// client.post('statuses/update', {status: 'Merry Christmas'})
//   .then(function (tweet) {
//     console.log(tweet);
//   })
//   .catch(function (error) {
//     throw error;
//   })




// remove tweet from spreadsheet