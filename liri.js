require("dotenv").config();
var fs = require("fs");
var moment = require('moment');
const keys = require("./keys.js");
const Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var axios = require("axios");

var spotifyTest = process.env.SPOTIFY_ID
// Make it so liri.js can take in one of the following commands:
let command = process.argv[2]
let search = process.argv[3]

switch (command) {
   case "concert-this":  //bands in town
      searchForBandsInTown(search);
      break;
   case "spotify-this-song":  //spotify
      spotifyThisSong(search);
      break;
   case "movie-this":  // OMDB for movies
      movieThis(search);
      break;
   case "do-what-it-says":  //  read commands from a file and excute the commands above
      itSays();
      break;
}
function searchForBandsInTown(artist) {
   var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
   axios.get(queryUrl).then(
      function (response) {
         if (response.data[0].venue != undefined) {
            console.log("Event Veunue: " + response.data[0].venue.name);
            console.log("Event Location: " + response.data[0].venue.city);
            var eventDateTime = moment(response.data[0].datetime);
            console.log("Event Date & Time: " + eventDateTime.format("dddd, MMMM Do YYYY"));
         }
         else {
            console.log("No results found.");
         }
      })
      .catch(function (error) {
         console.log(error);
      });
}
function spotifyThisSong(song) {
   spotify.search({ type: 'track', query: song })
      .then(function (response) {
         if (response.tracks.total === 0) {
            errorConditionForSpotify();
         }
         else {
            console.log("Artist: " + response.tracks.items[0].artists[0].name);
            console.log("Track: " + response.tracks.items[0].name);
            console.log("Preview URL: " + response.tracks.items[0].preview_url);
            console.log("Album: " + response.tracks.items[0].album.name);
         }
      })
      .catch(function (error) {
         console.log(error);
         console.log("No Results found. Showing results for 'The Sign' by Ace of Base");
      });
}
function errorConditionForSpotify() {
   spotify
      .search({ type: 'track', query: 'The Sign' })
      .then(function (response) {
         for (var i = 0; i < response.tracks.items.length; i++) {
            if (response.tracks.items[i].artists[0].name === "Ace of Base") {
               console.log("Artist: " + response.tracks.items[i].artists[0].name);
               console.log("Track: " + response.tracks.items[i].name);
               console.log("Preview URL: " + response.tracks.items[i].preview_url);
               console.log("Album: " + response.tracks.items[i].album.name);
               i = response.tracks.items.length;
            }
         }
      })
      .catch(function (error) {
         console.log(error);
         console.log("No Results found. ");
      });
}

function movieThis(movieName) {
   axios.get("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy")
      .then(
         function (response) {
            //  console.log(response);
            if (movieName !== undefined) {
               console.log("Title: " + response.data.Title);
               console.log("The movie's rating is: " + response.data.imdbRating);
               console.log("Year the movie came out " + response.data.Year);
               console.log("Rotten Tomatos Rating of the Movie: " + response.data.Ratings[1].Value);
               console.log("Where the movie was produced: " + response.data.Country);
            }
            else {
               movieThis("Mr. Nobody");
            }
         })
      .catch(function (error) {
         console.log(error);
         console.log("No Results found. ");
      });
}
///readFile...
function itSays() {
   fs.readFile("random.txt", "utf8", function (err, data) {
      var dataArr = data.split(",");
      spotifyThisSong(dataArr[1])

      if (err) {
         return console.log(err);
      }
   })
};
///writeFile...
fs.appendFile('log.txt', command + ",\n", function (err) {
   if (err) throw err;
});