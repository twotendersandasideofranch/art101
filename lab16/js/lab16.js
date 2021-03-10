/*
 * Author: Simon Wang <swang246@ucsc.edu>
 * Created: 18 February
 * License: Public Domain
 */

 // Using the core $.ajax() method
 $.ajax({
     // The URL for the request (from the api docs)
     url: "https://xkcd.com/1560/info.0.json",
     // The data to send (will be converted to a query string)
     data: {
       "month": "8",
       "num": "1560",
       "link": "",
       "year": "2015",
       "news": "",
       "safe_title": "Bubblegum",
       "transcript": "",
       "alt": "I came here to chew bubblegum and say no more than eighteen words... and I'm all out of",
       "img": "//imgs.xkcd.com/comics/bubblegum.png",
       "title": "Bubblegum",
       "day": "5"
     },
     // Whether this is a POST or GET request
     type: "GET",
     // The type of data we expect back
     dataType : "jsonp",
     // What do we do when the api call is successful
     //   all the action goes in here
     success: function(data) {
         // do stuff
         console.log(data);
     },
     // What we do if the api call fails
     error: function (jqXHR, textStatus, errorThrown) {
         // do stuff
         console.log("Error:", textStatus, errorThrown);
     }
  })
