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
                    staticGIF = result.images.fixed_height_still.url;
                    animateGIF = result.images.fixed_height.url;
                    // put rating in rating variable
                    rating.text("GIF rating: " + (result.rating).toUpperCase());
                    // make source of img the still Gif
                    
                    createGif.attr('data-state', 'still');
                    createGif.attr('data-still', staticGIF);
                    createGif.attr('data-animate', animateGIF);
                    createGif.attr("src", createGif.attr('data-still'));
                    // adding a class to grab when toggling
                    createGif.addClass("gifToggle");
                    // printing to screen
                    $(".responsesBox").append(createGif);
                    $('.responsesBox').append(rating);
                    console.log(createGif);
                };
            });
    };
    function Toggler() {
        var state = $(this).attr('data-state');
        if (state === 'still') {
            $(this).attr('src', $(this).attr('data-animate'));
            $(this).attr('data-state', 'animate');
        }
        else if (state === 'animate') {
            $(this).attr('src', $(this).attr('data-still'));
            $(this).attr('data-state', 'still');
        }
    }
    // onclick to create a button
    $(".CreateButton").on("click", createButton);
    // onclicks on the page, all items that have the class '.buttonClick', run the function GIFGetter();
    $(document).on("click", ".buttonClick", GIFGetter);
    $(document).on("click", ".gifToggle", Toggler);
});