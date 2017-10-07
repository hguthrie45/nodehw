var keys = require("./keys");

var Twitter = require("Twitter");

var request = require("request");


var command = process.argv[2]; //e.g. spotify-this-song
var title = process.argv[3]; //e.g. "Merry Christmas"

var Spotify = require("node-spotify-api");

var spotify = new Spotify(keys.spotifyKeys);


// function myTweets() {
  //do sth to get tweets



function spotifyThisSong(songTitle) {

  spotify.search({ type: 'track', query: songTitle, limit: 1 }, function(err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }

      // var artist = ;
      // var title = ;
      // var link = ;
      // var album = ;

      var songs = data.tracks.items;

      for (var i = 0; i < songs.length; i++) {
        console.log(i);
        console.log("artists: " +songs[i].artists.map(getArtistNames));
        console.log("song name: " +songs[i].name);
        console.log("preview song: " +songs[i].preview_url);
        console.log("album: " +songs[i].album.name);
        console.log("-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- - ");
      };
});
  }



  // function movieThis(movieTitle) {
  //   //do sth with movieTitle
  // }


  // // switch (command) {
  // //   case "my-tweets":
  // //     //run myTweets function
  // //     break;
  // //   case "spotify-this-song":
  // //     //run spotifyThis function
  // //     if (title === undefined) {
  // //       title = "The Sign";
  // //     }
  // //     spotifyThisSong(title);
  // //     break;
  // //   // case "movie-this":;
  // //     //run movieThis function
  // //     // break;
  // //   // case "do-what-it-says":
  // //     //GO OVER WRITEFILE AND [READFILE]** CLASS ACTIVITIES
  // // }