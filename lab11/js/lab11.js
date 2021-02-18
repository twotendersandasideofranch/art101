/*
 * Author: Simon Wang <swang246@ucsc.edu>
 * Created: 18 February
 * License: Public Domain
 */

 var challengesEl = $('#challenges');
 var problemsEl = $('#problems');
 var resultsEl = $('#results');

//button time
  var myButton = "<button>Push to Fart</button>";

//adding to section
  challengesEl.append(myButton);
  problemsEl.append(myButton);
  resultsEl.append(myButton);

//click event
  challengesEl.children('button').click(function() {
    challengesEl.toggleClass('special1');
  });


  problemsEl.children('button').click(function() {
    problemsEl.toggleClass('special2');
  });

  resultsEl.children('button').click(function() {
    resultsEl.toggleClass('special3');
  });
