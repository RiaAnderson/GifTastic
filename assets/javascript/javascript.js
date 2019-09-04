// Button array
var topics = ["Panda", "Dog", "Guinea Pig", "Penguin", "Dolphin", "Dinosaur", "Bunny", "Flamingo"];
// Function to add additional buttons to array
function displayAnimalGifs() {
    var animal = $(this).attr("data-name");

    // Gif URL
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&limit=10&rating=G&api_key=EzZE3a9LuH9LBpzzY256irSV5KOIEUWk";
    //EzZE3a9LuH9LBpzzY256irSV5KOIEUWk

    //AJAX call for specific animal button being clicked
    $.ajax({
            url: queryURL,
            method: "GET"
        })
        .then(function (response) {
            //store the array of results in results variable

            var results = response.data;

            //Looping every result item
            for (var i = 0; i < results.length; i++) {

                var gifDiv = $("<div>");
                var rating = results[i].rating;
                var p = $("<p>").text("Rating: " + rating);
                var animalImage = $("<img>");
                animalImage.attr("src", results[i].images.fixed_height.url);
                gifDiv.append(p);
                gifDiv.append(animalImage);
                $("#gif-view").prepend(gifDiv);

                var state = $(this).attr("data-state");

                if (state === "still") {
                    $(this).attr("src", $(this).attr("data-animate"));
                    $(this).attr("data-state", "animate");
                } else {
                    $(this).attr("src", $(this).attr("data-still"));
                    $(this).attr("data-state", "still");
                }

            }
        });
};
// Function to render animal buttons
function renderButtons() {
    $("#buttons-view").empty();
    for (var i = 0; i < topics.length; i++) {
        var a = $("<button>");
        a.addClass("animal-btn");
        a.attr("data-name", topics[i]);
        a.text(topics[i]);
        $("#buttons-view").append(a);
    }
};

// Function handles when a button has been clicked. 
$("#add-animal").on("click", function (event) {
    event.preventDefault();
    //Adds new button to array
    var animal = $("#animal-imput").val().trim();
    topics.push(animal);
    renderButtons();
});

$(document).on("click", ".animal-btn", displayAnimalGifs);


// Calls the renderButtons function to display the buttons
renderButtons();