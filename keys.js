console.log('this is loaded');

exports.twitter = {
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
};

exports.spotifyKeys = {
//  id : process.env.SPOTIFY_ID
  //secret: process.env.SPOTIFY_SECRET

  id:"a774997bd45b48b39b0e2f64b594ce42",
  secret: "0be4bc6402af48b2a5ba0a4931c0a1a4"
};
