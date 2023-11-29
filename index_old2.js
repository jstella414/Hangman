import prompt from "readline-sync";
import wordBank from "./word-bank.js";


const getRandomWord = () => {
    let randomizeWord = Math.floor(Math.random() * wordBank.length + 1);
    return wordBank[randomizeWord]
  }
  
let randomWord = getRandomWord()
console.log(randomWord)

////////////////////////


  
let displayString = [];
let wordContainsGuessedLetter = false;
let remainingGuesses = 6;
let displayInitiated = false;
let gameIsOver = false;

// function to initialize the game play display it will render underscores for each letter in the word. This function accepts a string as a parameter.
function initializeDisplay(word) {

        if(!displayInitiated){
    word.split("").map((item)=>{return displayString.push("_");}
            //word.split("").map((item)=>{return letter === item ? displayString.push(item) : displayString.push("_");}
        )
        displayString = displayString.join(' ');
        console.log(displayString)
        }
        displayInitiated = true;
    }

    initializeDisplay(randomWord)
    let letter = prompt.question("1 Please guess a letter: ")



    function checkGuess(word, gussedLetter) {
    //CHeck if the word contains the gussed letter
    //Return true or false (Boolean)
for(let i = 0; i < word.length; i++){
    if( word[i] === gussedLetter){
    return wordContainsGuessedLetter = true;
    }
  }
}
  checkGuess(randomWord, letter);

console.log(wordContainsGuessedLetter)

    
////////////////////
    //function to update the display that the user can see
    let updateGuessedWord = [];

function updateDisplay(string) {

    string.split("").map((item)=>{return letter === item ? updateGuessedWord.push(item) : updateGuessedWord.push("_");}
    )
    //replace the underscores in the display with the correct guessed letter if it is in the word.
    updateGuessedWord = updateGuessedWord.join(' ');
    console.log(updateGuessedWord)
   
  }
  

/////////////////////

function updateGuesses(remainingGuesses, isCorrectGuess) {
   if(!isCorrectGuess){
    return remainingGuesses -= 1;
}
console.log(remainingGuesses)
   
    //Decrease remaining guesses if the guess is incorrect
    // Return the updated remaining guesses
  }

  updateGuesses(remainingGuesses, wordContainsGuessedLetter)



  function isGameOver(word, remainingGuesses) {
    return word === updateGuessedWord || remainingGuesses === 0 ? gameIsOver = true : gameIsOver = false;
        
    }
    //CHeck if the word is fully guessed or if remaing gusses are 0
    //Return  true or false

  isGameOver(randomWord, remainingGuesses)

/////////////////////

  //Main game starting loop
function startGame() {
    
    while(!gameIsOver || remainingGuesses !== 0){
        let letter = prompt.question("2 Please guess a letter: ")
        updateDisplay(randomWord)
        console.log(`Remaing guesses ${remainingGuesses}`);
    }



    // if(!gameIsOver || remainingGuesses !== 0){
    //     updateDisplay(randomWord)
    //     console.log(`Remaing guesses ${remainingGuesses}`);
    // }else{
    //     console.log('game is over!')
    // }
    //pick a random word
  
    //Repeat until the game is won or the amount of guesses is equal to zero
     {
      
  
    //   // add logic to check if the letter was already guessed
    //   if (guessedLetters.includes) {
    //     //if true render a message indicating that they have already guessed the letter. Do not update the count.
    //   }
    //   // we can check the guess as well as update display
    //   // we call our methods here
    }
  }

  startGame()
  