// -computer picks random number
// -user guesses letter 
// -calculate if guess matches computer #
// -if guess = psychic letter: user wins
// -if guess != psychic letter: log the letter & decrease # available guesses
// create variable for wins/losses/incorrect guesses/user guess/computer guess

//1 - Check connection to html page
console.log("connected")

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var computerGuess = [];
    var userGuesses = [];


// computer picks letter as soon as page is loaded
window.onload = function() {
    var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	computerGuess.push(compGuess);
	console.log(computerGuess[0]);

// begin game-- user must make a guess **add alert to indicate they should press a letter (A-Z)
    document.onkeyup = function(event) {
        var userGuess = event.key;
        userGuesses.push (userGuess);
        console.log(userGuess);
        console.log (userGuesses);

        if ((userGuess === computerGuess[0]) && (guessesLeft > 0)) {
            wins++;
            guessesLeft = 9;
            userGuesses.length = 0;
            computerGuess.length = 0;
            var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            computerGuess.push(compGuess);
            console.log(computerGuess[0]);
        }
        else if ((userGuess !== computerGuess[0]) && (guessesLeft > 0)) {
            guessesLeft = guessesLeft-1;
        }
        
        else {
            losses++;
            guessesLeft = 9;
            userGuesses.length = 0;
            computerGuess.length = 0;
            var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            computerGuess.push(compGuess);
            console.log(computerGuess[0]);
        }
        
        var html = "<h1>The Psychic Game</h1>" +
                "<h3>Guess what letter I'm thinking of!</h3>" +
                "<p><strong>Wins: </strong>" + wins + "</p>" +
                "<p><strong>Losses: </strong>" + losses + "</p>" +
                "<p><strong>Guesses Remaining: </strong>" + guessesLeft + "</p>" +
                "<p><strong>Your Guesses So Far: </strong>" + userGuesses + "</p>";
        
        document.querySelector("#game").innerHTML = html;
    }
}