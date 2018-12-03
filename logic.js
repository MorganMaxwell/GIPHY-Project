//wait for page to load completely before doing anything
$(document).ready(function () {
    //onclick event to start button creation
    $(".CreateButton").on("click", createButton());

    // create a new button with value and label === to what the user input
    // function createButton() {
    //     var userInput = $(".searchBar").val();
    //     var makeButton = $('button');
    //     makeButton.text(userInput);
    //     console.log(userInput);
    //     console.log(makeButton);
    //     // $('buttonBox').append(makeButton);
    // };


    // grab data
    // var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + + "&api_key=&limit=5";

    // $.ajax({ url: queryURL, method: "GET" })
    //     .then(function () {

    //     });
});