/*
 * Author: Simon Wang <swang246@ucsc.edu>
 * Created: 08 February
 * License: Public Domain
 */

function firstThing(test) {
    console.log(test + ": Disco sucks.");
}

function secondThing(test) {
    console.log(test + ": Primus sucks.<br>");
}

function thirdThing(test) {
    console.log(test + ": You don't suck.<br>");
}

firstThing("TEST 1");
secondThing("TEST 1");
thirdThing("TEST 1");

//test 2 - consecutive
setTimeout(function() {
    firstThing("TEST 2");
}, 0);
setTimeout(function() {
    secondThing("TEST 2");
}, 0);
setTimeout(function() {
    thirdThing("TEST 2");
}, 0);

//test 3 - randomish
setTimeout(function() {
    firstThing("TEST 3");
}, 3000);
setTimeout(function() {
    secondThing("TEST 3");
}, 1000);
setTimeout(function() {
    thirdThing("TEST 3");
}, 2000);
