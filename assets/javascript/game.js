//JavaScript
//Created variables for tracking wins, losses, guesses and computer choices
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
var wins = 0;
var losses = 0;
var guessesLeft = 6;
//randomize guessed letter
var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(computerChoice)
//when keys are pressed by user it will run function 
document.onkeyup = function (event) {
    var userGuess = (event.key);
    if (userGuess == computerChoice) {
        wins++;
        alert("You win!!!!")
       }
    else {
        (losses++, guessesLeft--)
      
    };
    document.getElementById("Wins").innerHTML = "Wins =" + " " +  wins;
    document.getElementById("Losses").innerHTML = "Losses =" + " " +  losses;
    document.getElementById("GuessesLeft").innerHTML = "GuessesLeft =" + " " +  guessesLeft;
}
