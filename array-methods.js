var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
// var outputEl = document.getElementById("planets");

/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/

var el = document.getElementById("planets");

planets.forEach(function(item) {
  var newPlanetString = item;
  console.log("newPlanetString: ", newPlanetString);
    // item.innerHTML = getElementById("planets");
    el.innerHTML += newPlanetString + " ";
});

// Use the map method to create a new array where the first letter of each planet is capitalized

var capitalLetters = planets.map(function(capital) {
  return capital.charAt(0).toUpperCase() + capital.slice(1);
});
console.log("capitalLetters: ", capitalLetters);

// Use the filter method to create a new array that contains planets with the letter 'e'

var filtered = planets.filter(function(e) {
  return e.charAt() === "e";
});
// return filtered;
console.log("filtered: ", filtered);

// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];
