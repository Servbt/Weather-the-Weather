console.log("testing if hooked up to js");




// this challenge seems to be divided into four main chunks //
// i technically have to style the page too...

// I need to successfully access the weather api and fetch the appropriate data //
// I'm probably going to need json ~
// once I get that I can pass that info (arguements) into other functions to use
// I have to fetch location data
// I also have to fetch weather data based on location...

// if I cant fetch I should probably try and display a message of some kind 

//a submission portion that finds the city your looking for //
// needs to include a submission form


// I also need a button to trigger submission form 
//need to make a function to search the data and find that once the button is clicked

//once that happens I need it to display the chosen city as a button underneath
// once the data is found  I need to make the proper elements 
//once the elements are made I need to set their respective text contents
// after that I have to also assign their proper tags for styling
// and finally I can append them on the page


//a status container that displays the current forecast of a city at the forefront //
//needs to add a header with a respective title 

//need to append the four proper pieces of info with the data that was parsed
// these are temperature, wind speed, humidity levels, and Ultraviolet index
//for UV index i need a way to style it if the number reacches a certain threshold



//and finally a five day forecast that consists of cards that have some basic info attached to them //
//similar to the previous card
// this time it seems to be looping through 5 independent pieces of iterations
//  I SHOULD PROBABLY MAKE RENDERING ALL OF THE DATA ONE FUNCTION (thanks to seths pseudo code)

// i'm gonna have a hard time with this..
//once I find a loop and get the appropriate data through each iteration I have to display that info in 5 cute little divs


var searchBtn = document.getElementById("search-button");
var searchBar = document.getElementById("submission-form");

$(searchBtn).click (function (){

    var city = searchBar.value.trim();
    console.log(city);

    if (searchBar.value) {
        getlocationRepo(city);
    }
});







var getlocationRepo = function (location) {
    var apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=ca15c61b9bcc2642e628c234d0282a55`;

    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                console.log(response);
                response.json().then(function (data) {
                    console.log(data);
                    console.log(data[0].lat);
                    console.log(data[0].lon);
                    var cityLat = data[0].lat;
                    var cityLon = data[0].lon;
                    getweatherRepo(cityLat , cityLon);
                })
            }
        })
}


var getweatherRepo = function (lat , lon) {
    var apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=ca15c61b9bcc2642e628c234d0282a55`;

    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                console.log(response);
                response.json().then(function (data) {
                    console.log(data);
                    console.log(data.current);
                })
            }
        })
}




