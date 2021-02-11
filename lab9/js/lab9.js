/*
 * Author: Simon Wang <swang246@ucsc.edu>
 * Created: 10 February
 * License: Public Domain
 */


 var outputEl = document.getElementById("content");
 var boxes = document.getElementsByClassName("content");

 //creating new element
 var new1El = document.createElement("p");

 //changing attribute of new1El
 new1El.innerText = "You are dumb dumb, give me gum gum";

 //creating new2El
 var new2El = document.createElement("div")

 //changing attrbute of new2El
 new2El.innerHTML = "<button>Push Me To Fart</button>";

 //append
 outputEl.appendChild(new1El);
 outputEl.appendChild(new2El);

 //change css attributes
 new1El.style.color = "blue";
 new2El.style.padding = "20px";
 new2El.style.cursor = "grab";
