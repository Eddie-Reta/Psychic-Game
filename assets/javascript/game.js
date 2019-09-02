
//Created variables for tracking wins, losses, guesses and computer choices
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
var wins = 0;
var losses = 0;
var guessesLeft = 3;
var guessedLetter = '';
let loss = 8;

//here i randomize letter to be guessed
function randomizeLetter() {
  var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    guessedLetter = computerChoice
   console.log(guessedLetter + "  " + "WOW What a cheater!!!")
};

//when keys are pressed by user it will run function 
document.onkeyup = function (event) {
    //take in the key pressed
   var userGuess = (event.key);

   //check to see if the key pressed is a  letter
   function check() {
    if(userGuess === "a" || userGuess === "b" || userGuess === "c" || userGuess === "d" || userGuess === "e" || userGuess === "f" || userGuess === "g" || 
    userGuess === "h" || userGuess === "i" || userGuess === "j" || userGuess === "k" || userGuess === "l" || userGuess === "m" || userGuess === "n" || userGuess === "o" || 
    userGuess === "p" || userGuess === "q" || userGuess === "r" || userGuess === "s" || userGuess === "t" || userGuess === "u" || userGuess === "v" || userGuess === "w" ||
    userGuess === "x" || userGuess === "y" || userGuess === "z" ){
        return;
    } else {
        alert("press a letter")
    }
};

//here it adds the wins and randomizes a new letter
    if (userGuess === guessedLetter) {
        wins++;
        alert("You win!!!!")
      randomizeLetter();
       }
    else {
     guessesLeft--;
    };
    if (losses === 10) {
        alert("GAME-OVER!!")
        window.location.reload();
    };
    if (guessesLeft === 0) {
        guessesLeft = 3;
        losses++;
    };
    // warn the player they have a few lives left
    function warning() {
        
    if (losses === loss) {
        console.log("oh no");
        loss = 0
        alert("You have 3 Losses left!!");
        
       
    };
    };
    warning();
    check();
    document.getElementById("Wins").innerHTML = "Wins =" + " " +  wins;
    document.getElementById("Losses").innerHTML = "Losses =" + " " +  losses;
    document.getElementById("GuessesLeft").innerHTML = "GuessesLeft =" + " " +  guessesLeft;
};
 

randomizeLetter();
