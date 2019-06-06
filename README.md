Overview

-LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back data.



-LIRI searches Spotify for songs, Bands in Town for concerts, and OMDB for movies.



-Liri can take in one of the following commands:

    "concert-this"
    "spotify-this-song"
    "movie-this"
    "do-what-it-says"



-What Each Command Does

 node liri.js concert-this "artist/band name here"
 This will search the Bands in Town Artist Events API for an artist and render the following information about each event to the terminal:


* Name of the venue
* Venue location
* Date of the Event (use moment to format this as "MM/DD/YYYY")

![Concert This](concert-this.jpg?raw=true "Concert This")

![Concert This Result](concer-this-result.jpg?raw=true "Concert This Result")



node liri.js spotify-this-song 'song name here'




This will show the following information about the song in your terminal/bash window


* Artist(s)
* The song's name
* A preview link of the song from Spotify
* The album that the song is from


![Spotify This](spotify-this.jpg?raw=true "Spotify This")

If no song is provided then your program will default to "The Sign" by Ace of Base.


![Spotify This AOB](spotify-this-ace.jpg?raw=true "Spotify This AOB")


node liri.js movie-this 'movie name here'


This will output the following information to your terminal/bash window:

   * Title of the movie.
   * Year the movie came out.
   * IMDB Rating of the movie.
   * Rotten Tomatoes Rating of the movie.
   * Country where the movie was produced.
   * Language of the movie.
   * Plot of the movie.
   * Actors in the movie.


![Movie This](movie-this.jpg?raw=true "Movie This")



If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

![Movie This Blank](movie-this-nobody.jpg?raw=true "Movie This Blank")
![Movie This Blank cont.](movie-this-nobody2.jpg?raw=true "Movie This Blank cont.")

node liri.js do-what-it-says


Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.


It will run spotify-this-song for "I Want it That Way," as follows the text in random.txt.

![Do what it says](do-what-it-says.jpg?raw=true "Do what it says")



* Screenshots are also in the repository under liri.docx
