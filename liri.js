// Load the Twitter API
var twitter = require('twitter');
var request = require('request');
var keys = require("./keys");

//new instance of spotify client
var client = new twitter(keys.twitterKeys);
 
//function to grab my tweets
function myTweets() {
	var params = {screen_name: 'Esther28282058'};

	client.get('statuses/user_timeline', params, function(error, tweets, response) {
  		if (!error) {
    		console.log(tweets[0].text);
    		console.log(tweets[1].text);
  		}else {
  			console.log(error);
  		}
	});
}
myTweets();



// //load spotify API
 var spotify = require('node-spotify-api');

// //new instance of spotify client
 var Spotify = require('node-spotify-api');
 
 var spotify = new Spotify({
  id: dead6544b2bf4b3a8ba254ee28dd54b,
  secret: df620ccfcf9f4fe091f458b5b9540815,
});
 //function to grab artist name, song name, preview link, and album..if song not listed defaut to The Sign by Ace of Base	
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});
 

var key = require("./key.js");
var request = require("request");

var nodeArgs = process.argv;


// truthy vs falsey

var command = null;
var movieName = "";

// Get arguments
if ( nodeArgs < 4 ) {

	command = nodeArgs[2]

} else if ( nodeArgs > 3 ) {
	// moviestuff

	for (var i = 2; i < nodeArgs.length; i++) {
		console.log( nodeArgs[i] )

	  if (i > 2 && i < nodeArgs.length) {
	  	console.log( nodeArgs[i] )
	    movieName = movieName + "+" + nodeArgs[i];

	  }

	  else {

	    movieName += nodeArgs[i];

	  }
	}
	command = 'moviethis'
}


/*modify command*/
 if(command) {

	if (command = moviethis){
		// search movie
		moviethis(movieName)
	}
	else if (command = 'spotify') {
		// spotify
		 spotify();
	}
	else if (command = 'twitter') {
		// twitter
		 twitter();
	}
	
};




function moviethis(movieName) {
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";

console.log(queryUrl);

request(queryUrl, function(error, response, body) {
	 if (!error && response.statusCode === 200) {
	 	var movie = JSON.parse(body)

console.log("Release Year: " + movie.Year);
  }
});
}
//     //



 
	