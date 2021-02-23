/*
 * Author: Simon Wang <swang246@ucsc.edu>
 * Created: 18 February
 * License: Public Domain
 */

 housesArray = [
   {
          title: "Gryffindor",
          text: "Kind of a try hard, but I am not saying whether that is a good or bad thing. Just a thing. That is pretty much it though, Gryffindors are just inherently try hards."
      },
      {
          title: "Hufflepuff",
          text: "You are pretty much a chiller. The chillest of all chillers. Hufflepuffs enjoy kicking it all day, hanging out with friends, and munching on some Chocalate Frogs. You're lucky that the Hufflepuff dorms are right next to the kitchens."
      },
      {
          title: "Ravenclaw",
          text: "Hahaha nerd, but at least you have a dope Gothic aesthetic."
      },
      {
          title: "Slytherin",
          text: "The sickest of all foos. Most likely a shitty person, but an air of coolness that excuses the shitiness."
      },
      {
          title: "Grufflepuff (Gryffindor + Hufflepuff)",
          text: "Try hard stoner."
      },
      {
          title: "Ravendor (Ravenclaw + Gryffindor)",
          text: "Try hard nerd."
      },
      {
          title: "Slyffindor (Slytherin + Gryffindor)",
          text: "Ultimate try hard asshole."
      },
      {
          title: "Ravenpuff (Ravenclaw + Hufflepuff)",
          text: "Nerd stoner."
      },
      {
          title: "Raverin (Ravenclaw + Slytherin)",
          text: "Shitty nerd."
      },
      {
          title: "Slytherpuff (Hufflepuff + Slytherin)",
          text: "Shitty stoner."
       }
  ]

 function sortingHatLength(str) {
   len = str.length;
   mod = len % 4;
   if (mod == 0) {
     return "Gryffindor"
   }
   else if (mod == 1) {
     return "Ravenclaw"
   }
   else if (mod == 2) {
     return "Slytherin"
   }
   else if (mod == 3) {
     return "Hufflepuff"
   }
 }


 function checksum(s) {
   var hash = 0, strlen = s.length, i, c;
   if ( strlen === 0 ) {
     return hash;
   }
   for ( i = 0; i < strlen; i++ ) {
     c = s.charCodeAt( i );
     hash = ((hash << 5) - hash) + c;
     hash = hash & hash;
   }
   return hash;
 };

 function sortingHatHash(str) {
   checksumValue = checksum(str);
   mod = Math.abs(checksumValue) % housesArray.length;
   return housesArray[mod];
 }

   var myButton = document.getElementById("button");
      myButton.addEventListener("click", function() {
   var name = document.getElementById("input").value;
   var houseObj = sortingHatHash(name);

   newText = "<h3>The Sorting Hat has sorted you into " + houseObj.title + "</h3>" +
           "<p>" + houseObj.text + "</p>";
   document.getElementById("output").innerHTML = newText;
 })
