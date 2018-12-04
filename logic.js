//wait for page to load completely before doing anything
$(document).ready(function () {
    // create a new button with value and label === to what the user input
    function createButton() {
        var userInput = $(".searchBar").val().trim();
        var newButton = $('<button>').append(userInput);
        newButton.attr('id', userInput);
        newButton.addClass("buttonClick")
        $('.buttonBox').append(newButton);
    };
    function GIFGetter() {
        // the id of the item clicked = what we search GIPHY for
        var searchTerm = $(this).attr('id');
        // grab data
        $('.responsesBox').empty();
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=8YFcTyyCHtCNjQVi55eFHpokpZSNe5eX&limit=10";

        $.ajax({ url: queryURL, method: "GET" })
            .then(function (response) {
                console.log(response)

                for (var i = 0; i < (response.data).length; i++) {
                    // making it a bit quicker to get data out of response
                    var result = response.data[i];
                    // variables to make HTML elements
                    var createGif = $("<img>");
                    var rating = $("<p>");
                    // filling in variables with data to use for toggling onclick
                    static = true;
                    staticGifSRC = result.images.fixed_height.url;
                    animateGifSRC = result.images.fixed_height_still.url;
                    // put rating in rating variable
                    rating.text("GIF rating: " + (result.rating).toUpperCase());
                    // make source of img the still Gif
                    createGif.attr("src", result.images.fixed_height_still.url);
                    // adding a class to grab when toggling
                    createGif.addClass("gifToggle");
                    // printing to screen
                    $(".responsesBox").append(createGif);
                    $('.responsesBox').append(rating);
                };
            });
    };
    function Toggler() {
        if (static) {
            $(this).attr('src', animateGifSRC);
            static = false;
        }
        else if (!static) {
            $(this).attr('src', staticGifSRC);
            static = true;
        };
    };
    // onclick to create a button
    $(".CreateButton").on("click", createButton);
    // onclicks on the page, all items that have the class '.buttonClick', run the function GIFGetter();
    $(document).on("click", ".buttonClick", GIFGetter);
    $(document).on("click", ".gifToggle", Toggler);
});