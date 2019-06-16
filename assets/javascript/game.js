// variables for the game

var wins = 0;
var losses = 0;
var remaining = 9;
var usedLetters = [];
var randomLetter = randomLetter;
var letters = "qwertyuiopasdfghjklzxcvbnm";


// generating the computers guess
// generates a random decimal number, from (0.0) to (1.0), and is multiplied by (26), then rounded down to the nearest whole number

randomLetter = letters[Math.floor(Math.random() * letters.length)];
console.log(randomLetter);


// utilizes the random whole number generator above to select a random number from the [letters] array and assigns it to (var randomLetter)

function computerGuess() {
    randomLetter = letters[Math.floor(Math.random() * letters.length)];
    console.log(randomLetter);
}


// document.onkeyup captures the user's input and stores it in (var userGuess)

document.onkeyup = function (event) {
    var userGuess = event.key;
    

// compares the value of the user's guess to the computer's randomly selected letter, if the condition is true; wins are incremented by (1), the usedLetters[] is 
// cleared, and resets the remaining guesses to (9)

    if (userGuess === randomLetter) {
        wins++;
        remaining = 9;
        usedLetters = [];
    }


// compares the user's guess to the computer's randomly selected letter, if the condition is false; remaining guesses are decrimented by (1)

    computerGuess();
    if (userGuess !== randomLetter) {
        remaining--;
    }


// compares the value of the user's guess to the computer's randomly selected letter, if the condition is false; losses are incremented by (1), the usedLetters[] is 
// cleared, and resets the remaining guesses to (9)

    if (remaining == 0) {
        losses++;
        usedLetters = []
        remaining = 9;
    }


// prevents a letter from being duplicated in the usedLetters[]; duplicated guesses will still result in a decrement of remaining guesses by (1), user's incorrect guess
// is pushed to the usedLetters[] and written to the HTML

    if (usedLetters.indexOf(userGuess) >= 0) {

    } else {
        usedLetters.push(userGuess);
        document.getElementById("userGuess").innerHTML = usedLetters;
        console.log(usedLetters);
    }
    

// writes the generated values to the HTML

    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("remaining").innerHTML = remaining;
}
