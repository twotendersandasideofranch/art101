/*
 * Author: Simon Wang <swang246@ucsc.edu>
 * Created: 16 February
 * License: Public Domain
 */
     function sortUserName(userName) {
         // // convert to lower case
        var userName = userName.toLowerCase();
        var console.log("userName =", userName);
         // // split string to array
        var nameArray = userName.split('');
        var console.log("nameArray =", nameArray);

         var nameArraySort = nameArray.sort();
         console.log("nameArraySort =", nameArraySort);
         // // join array back to a string
         var nameSorted = nameArraySort.join('');
         console.log("nameSorted =", nameSorted);

         return userName.toLowerCase().split("").sort().join("");
     }

     // sortUserName - a function that takes user input and sorts the letters

     function randomizeName(userName) {
         // convert userName string to an array
         var nameArray = userName.toLowerCase().split("");
         console.log("nameArray =", nameArray);
         // shuffle array with our shuffle function
         var shuffledArray = shuffleArray(nameArray);
         console.log("shuffledArray =", shuffledArray);
         var shuffledString = shuffledArray.join("");
         // shift to Title Case (like a name)
         var newName = toTitleCase(shuffledString);
         // return array to a string
         return newName;
     }

     // trigger event that starts the show
     // find the element
     var submitButton = document.getElementById('submit-button');
     submitButton.addEventListener("click", function() {
         console.log("Submitted");
         // get the element and its value (user's name)
         var userName = document.getElementById('name-field').value;
         // modify the name
         var sortedName = sortUserName(userName);
         // randomize name
         var randomName = randomizeName(userName);
         // get the element output div
         var outputArea = document.getElementById('output');
         // put new value in output
         outputArea.innerText = randomName;
         // make our snide comments
         var snideArea = document.getElementById('snide-comments');
         snideArea.innerHTML = "And oh hey, I fixed your name.<br>Your new one is above.";
     })


 });
