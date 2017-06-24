//FS Package to handle read & write
var fs = require("fs");
var keys = require("./keys.js");
// var twitter = require('twitter');
var Spotify = require('node-spotify-api');
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

function spotifyCall(songString) {

    // var Spotify = require('node-spotify-api');

    var clientSpotify = new Spotify({

        id: keys.spotifyKeys['client_ID'],
        secret: keys.spotifyKeys['client_Secret']
    });

    const defaultSong = "I saw the sign"
    const defaultArtist = "Ace of Bass"

    if (songString === "") {
        // song = defaultSong;
        // artist = defaultArtist;
        songString = defaultArtist + "&" + defaultSong;
    }

    var params = { type: "track", query: songString };

    clientSpotify.search(params, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        } else {
            console.log(data.tracks.items[0].artist.name);
            console.log(data.tracks.items[0].album.name);
            console.log(data.tracks.items[0].name);
            console.log(data.tracks.items[0].preview_url);
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
        spotifyCall(media);
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
