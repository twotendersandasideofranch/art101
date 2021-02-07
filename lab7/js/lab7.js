/*
 * Author: Simon Wang <swang246@ucsc.edu>
 * Created: 04 February
 * License: Public Domain
 */

 // sortUserName
function sortUserName () {
    var userName = window.prompt("Hello there, provide your name for an uprgrade.");
    console.log("userName =", userName);

    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);

    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);

    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);

    return nameSorted;
}


//output
document.writeln("Here is your new and improved name: ",
    sortUserName(), "</br>");
