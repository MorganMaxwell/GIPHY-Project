//wait for page to load completely before doing anything
$(document).ready(function () {
    // create a new button with value and label === to what the user input
    function createButton() {
        var userInput = $(".searchBar").val();
        var newButton = $('<button>').append(userInput);
        newButton.attr('id', userInput);
        $('.buttonBox').append(newButton);
    };



    function GIFGetter() {
        // grab data
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + $(this) + "&api_key=8YFcTyyCHtCNjQVi55eFHpokpZSNe5eX&limit=10";

        $.ajax({ url: queryURL, method: "GET" })
            .then(function (response) {
                $('.responsesBox').empty();
                for (var i = 0; i < (response.data).length; i++) {
                    var result = response.data[i].images;
                    var createGif = $('<img>');
                    createGif.attr("src", result.fixed_height.url);
                    $('.responsesBox').append(createGif);
                };
            });
    };
    // onclick to create a button
    $(".CreateButton").on("click", createButton);
    $(".buttonBox").on("click", GIFGetter);
});