/*
 * Author: Simon Wang <swang246@ucsc.edu>
 * Created: 01 February
 * License: Public Domain
 */

// Define Variables
myTransport = ["Bus", "skateboard", "car", "rides from friends and family", "bicycle"];

myMainRide = {
                make: "Lexus",
                model: "ES330",
                color: "grey",
                year: 2004,
                age: function() {
                   return 2021 - year;
    }
}

// output
document.writeln("How I Get Around: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
document.writeln("The age of my ", myMainRide.model, "is", myMainRide.age(), "years.");
