const Twitter = require('twitter');
const dotenv = require('dotenv');
const Sheet = require('./sheet')

dotenv.config();

(async function () {
  // connect to twitter
  const client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,

  });

  // pull next tweet from spreadsheat
  const sheet = new Sheet();
  await sheet.load();
  const quotes = await sheet.readRows();
  const status = quotes[0].quote;

  // send tweet
  client.post('statuses/update', {status},  function(error, tweet, response) {
    if(error) throw error;
    console.log(tweet);  // Tweet body.
  });

  // remove tweet from spreadsheet
  await quotes[0].delete();

  console.log('tweeted', quotes[0].quote);

})();