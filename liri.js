//FS Package to handle read & write
var fs = require("fs");
var keys = require("./keys.js");
// var twitter = require('twitter');
// var spotify = require('spotify');
var request = require('request')

var input = process.argv[2];
var media; 


//Twitter
var Twitter = require('twitter');

function myTweets() {

};

var client = new Twitter({

  consumer_key: keys.twitterKeys.consumer_key,
  consumer_secret: keys.twitterKeys.consumer_secret,
  access_token_key: keys.twitterKeys.access_token_key,
  access_token_secret: keys.twitterKeys.access_token_secret
});
 
var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log();
  }
});



//Spotify

var spotify = require('spotify');

function spotify(song) {
};
 
spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 
    // Do something with 'data' 
});



//OMDB

function OMDB(movie) {

};

// Do What it Says

function doIt() {

};

//Switch Statements 

switch(input) {
	case "my-tweets":
		myTweets();
		break;

	case "spotify-this-song":
		spotify();
		break;

	case "move-this":
		OMDB();
		break;

	case "do-what-it-says":
		doIt();
		break;
};
