require("dotenv").config();
var Spotify = require("node-spotify-api");
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

var axios = require("axios");

//moment package
var moment = require("moment");

//fs 
var fs = require("fs");


// Takes command
var command = process.argv[2];
var input = process.argv[3]

// Command  constructor
function commandCall(command, input) {
  switch (command) {
    case 'concert-this':
      //insert concert function here
      console.log('concert-this');
      concertInput(input);
      break;
    case 'spotify-this-song':
      //insert music function here
      console.log('spotify-this-song');
      spotifyInput(input);
      break;
    case 'movie-this':
      //insert movie function here
      movieInput(input);
      break;
    case 'do-what-it-says':
      //insert do what it says function here
      console.log('do-what-it-says')
      asISay(input);
      break;
    default:
      console.log("Liri doesn't recognize that command");
  }
}


//movie function
function movieInput(input) {
  if (input === undefined) {
    input = "Mr. Nobody";
  }
  var queryUrl = 'http://www.omdbapi.com/?t=' + input + '&y=&plot=full&tomatoes=true&apikey=trilogy'
  axios.get(queryUrl).then(function (response) {
    //console.log(response.data)

    var movie = response.data;
    console.log("--------------------------------------------------");
    console.log("Title: " + movie.Title);
    console.log("Year: " + movie.Year);
    console.log("IMDB Rating: " + movie.Ratings[0].Value);
    console.log("Rotten Tomatoes Rating: " + movie.Ratings[1].Value);
    console.log("Country: " + movie.Country);
    console.log("Language: " + movie.Language);
    console.log("Plot: " + movie.Plot);
    console.log("Actors: " + movie.Actors);
    console.log("--------------------------------------------------");
  })
}


//concert-this function
function concertInput(input) {
  var queryUrl = "https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp"
  axios.get(queryUrl).then(function (response) {
    //console.log(response.data)
    var concert = response.data;
    console.log("--------------------------------------------------");
    console.log("Venue: " + concert[0].venue.name);
    console.log("Country: " + concert[0].venue.country);
    console.log("Date: " + moment(concert[0].datetime).format("MM/DD/YYYY"));
    console.log("--------------------------------------------------");
  })
}

var nameArtists = function(artist) {
  return artist.name;
};

//spotify-this-song function
var spotifyInput = function (input) {
  if (input === undefined) {
    input = "The Sign by Ace of Base";
  }
  spotify.search({ type: 'track', query: input }, function (err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    var song = data.tracks.items;

    //console.log(song);
    for (var i = 0; i < song.length; i++) {
      console.log("--------------------------------------------------");
      console.log("Artist: " + song[i].artists.map(nameArtists));
      console.log("Song: " + song[i].name);
      console.log("Preview Song: " + song[i].preview_url);
      console.log("Album: " + song[i].album.name);
      console.log("--------------------------------------------------");
    }
  });

};
//pulling random text file and calling on spotify-this-song function
function asISay() {
  fs.readFile('random.txt', "utf8", function (err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    var commandSub = data.split(',');

    spotifyInput(commandSub[1]);
  });
}

commandCall(command, input)