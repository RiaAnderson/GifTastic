// Button fucntion
// Button array
var topics = ["Panda", "Dog", "Guinea Pig", "Penguin", "Dolphin", "Dinosaur", "Bunny", "Flamingo"];
// Function to add additional buttons to array
function displayAnimalGifs (){
    var animal = $(this).attr("data-name");

    // Gif URL
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "EzZE3a9LuH9LBpzzY256irSV5KOIEUWk";

    //AJAX call for specific animal button being clicked
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        //store the array of results in results variable
        var gifDiv = $("<div>");
        var results = response.data;

        //Looping every result item
        for (var i = 0; i < results.length; i++){
            if (result[i].rating !=="r" && results[i].rating !=="pg-13"){
                
                var rating = results[i].rating;
                var p = $("<p>").text("Rating: " + rating);
                var animalImage = $("<img>");
                animalImage.attr("src", results[i].images.fixed_height.url);
                gifDiv.append(p);
                gifDiv.append(animalImage);
                $("#gif-view").prepend(gifDiv);
            }
        }
    });
}

function renderButtons(){
    $("#buttons-view")
}

// Gif parameters
// Function to pause Gif