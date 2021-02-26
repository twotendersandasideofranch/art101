/*
 * Author: Simon Wang <swang246@ucsc.edu>
 * Created: 18 February
 * License: Public Domain
 */

 var superString= i;
    for (var i = 1; i <= 200; i++) {

    if (i%3==0) {
      console.log ("Fizz");
      superString += i + " - Fizz!<br>";
    }

    else if (i%5==0) {
      console.log ("Buzz");
      superString += i + " - Buzz!<br>";
    }

    else if (i%7==0) {
      console.log ("Boom");
      superString += i + " - Boom!<br>";
    }

    else if (i%2==0) {
      console.log ("Fart");
      superString += i + " - Fart!<br>";
    }

    else {console.log(i)
      superString += i + "<br>";
    }
  };

  $("#output").html(superString);
