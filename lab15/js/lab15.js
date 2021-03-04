/*
 * Author: Simon Wang <swang246@ucsc.edu>
 * Created: 4 March
 * License: Public Domain
 */
 $(document).ready(function(){
   $("button").click(function(){
     $.ajax({
         // The URL for the request (from the api docs)
         url: "https://api.nasa.gov/planetary/apod?api_key=1D8e7te4dehHy0t3eq5dWK5oogd5FxtIFcbgo0NF",
         // The data to send (will be converted to a query string)
         data: {
                 // here is where any data required by the api
                 //   goes (check the api docs)
                 id: "c7b85c37-8318-4fef-81e3-c60245f04435",
                 api_key: "1D8e7te4dehHy0t3eq5dWK5oogd5FxtIFcbgo0NF",
               },
         // Whether this is a POST or GET request
         type: "GET",
         // The type of data we expect back
         dataType : "json",
         // What do we do when the api call is successful
         //   all the action goes in here

         success: function(data) {
             // do stuff
             var str = JSON.parse(data);
             document.getElementById("content").innerHTML = str.copyright;
             console.log(data);
         },
         // What we do if the api call fails
         error: function (jqXHR, textStatus, errorThrown) {
             // do stuff
             console.log("Error: frick", textStatus, errorThrown);
         }
       });
    });
 });
