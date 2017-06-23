//FS Package to handle read & write
var fs = require("fs");
var keys = require("./keys.js");
// var twitter = require('twitter');
// var spotify = require('spotify');
var request = require('request')

var input = process.argv[2];
var media = "";


//Twitter
var Twitter = require('twitter');

function myTweets() {

    var clientTwitter = new Twitter({

        consumer_key: keys.twitterKeys.consumer_key,
        consumer_secret: keys.twitterKeys.consumer_secret,
        access_token_key: keys.twitterKeys.access_token_key,
        access_token_secret: keys.twitterKeys.access_token_secret
    });

    var params = { screen_name: '@DevelopDesignDo', count: 20 };

    clientTwitter.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (error) throw error;
        for (i = 0; i < tweets.length; i++) {
            console.log("\nPosted on: " + tweets[i].created_at);
            console.log("\tTweet: " + tweets[i].text);
        }

    });
};

//Spotify

function spotifyCall(songSting) {

    var Spotify = require('node-spotify-api');

    var clientSpotify = new Spotify({

        client_ID: keys.spotifyKeys.client_ID,
        client_Secret: keys.spotifyKeys.client_Secret
    });

    const defaultSong = "I saw the sign"
    const defaultArtist = "Ace of Bass"

    if (songSting === undefined) {
        song = defaultSong;
        artist = defaultArtist;
        songSting = defaultArtist + "&" + defaultSong;
    }

    var params = { type: "track", query: songSting };

    clientSpotify.search(params, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        } else {
            console.log(data);
            
        }

    });
};


//OMDB

function OMDB(movie) {

};

// Do What it Says

function doIt() {

};

//Switch Statements 

switch (input) {
    case "my-tweets":
        myTweets();
        break;

    case "spotify-this-song":
        for (i = 3; i < process.argv.length; i++);
        media += process.argv[i];
        spotify(media);
        break;

    case "move-this":
        for (i = 3; i < process.argv.length; i++);
        media += process.argv[i];
        OMDB(media);
        break;

    case "do-what-it-says":
        doIt();
        break;
};
