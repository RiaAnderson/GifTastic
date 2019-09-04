// Button array
var topics = ["Panda", "Dog", "Guinea Pig", "Penguin", "Dolphin", "Dinosaur", "Bunny", "Flamingo"];
// Function to add additional buttons to array
function displayAnimalGifs (){
    var animal = $(this).attr("data-name");

    // Gif URL
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&limit=10&rating=G&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";
    //EzZE3a9LuH9LBpzzY256irSV5KOIEUWk

    //AJAX call for specific animal button being clicked
    $.ajax({
        url: queryURL,
        method: "GET"
    })
      .then(function(response){
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
           
        }
    });
};
// Function to render animla buttons
function renderButtons(){
    $("#buttons-view").empty();
    for (var i = 0; i <topics.length;i++){
        var a = $("<button>");
        a.addClass("animal-btn");
        a.attr("data-name", topics[i]);
        a.text(topics[i]);
        $("#buttons-view").append(a);
    }
};

$("#add-animal").on("click", function(event){
    event.preventDefault();
    var animal = $("#animal-imput").val().trim();
        topics.push(animal);
        renderButtons();
});

$(document).on("click", ".animal-btn", displayAnimalGifs);
// Gif parameters
// Function to pause Gif

renderButtons();