import prompt from "readline-sync";
import wordBank from "./word-bank.js";


// console.log('this works. first word is\n', wordBank[0]);
// const letter = prompt.question('Please guess a letter:');

// console.log("letter:", letter);
///Function to get random letter

const getRandomWord = () => {
  let randomizeWord = Math.floor(Math.random() * wordBank.length);
  return wordBank[randomizeWord]
}
let randomWord = getRandomWord()
console.log(randomWord)


let isGameOver = false;




//const letter = prompt.question("Please guess a letter: ");



//console.log(initializeDisplay(randomWord));


let hiddenWord = [] 
let initialStart = true;

///this screws up quakka

let letter = prompt.question("Please guess a letter: ")

const initializeDisplay = () =>{

  if(isGameOver === false && initialStart === true){
      randomWord.split("").map((item)=>{return letter === item ? hiddenWord.push(item) : hiddenWord.push("_");}
    )
  }console.log(hiddenWord.join(' '))
  initialStart = false;
}

initializeDisplay();

const updateDisplay = (word) =>{
    if(isGameOver === false){
    word.map((item)=>{letter === item ? hiddenWord.push(item): hiddenWord.push("_");})
  }
}
///checkguess use a boolan
gity 



///update remaining guesses
///function updateGuesses(remainingGuesses,isCorrect )

const checkIfWon = (word, callBack) =>{
  word === randomWord ? isGameOver = true : callBack(word);
}
checkIfWon(hiddenWord, updateDisplay);

// console.log(Math.floor(Math.random() * wordBank.length));


// const letterCheck = (letter) =>{

// }

/*

getRandomWord: This function selects a random word from the word bank. DONE

initializeDisplay: This function initializes the display that shows the progress of the game.

updateDisplay: This function updates the display after each guess.

checkGuess: This function checks if the guessed letter is in the word.

updateGuesses: This function updates the number of remaining guesses.

isGameOver: This function checks if the game is over.


*/

/*
defult state will have all _ _ _ _ 

1. create a letter check function that takes in the current letter as an argument
2. this function should select random word from wordbank
3. in this function do a if statment, if correct display correct letter
4. if not correct 


get letter add one to the index if correct 
display correct letter
to display correct letter

or

tell player that letter is incorrect
add body part to  hangman

then

if all letters are correct 
message saying you have one the game
then exist the game



 Start of Loop
 Ask user to enter a letter
 Exit loop when ______

 if ( user won ) {
Display success message
} else { // user lost
  Display game over message
  }


*/




/*
OLD STUFF
*/

// const getWord = (word, letter) =>{

//     console.log("JUST  A TEST")
//     console.log( wordBank[word].length)
//     console.log(wordBank[word])
//     console.log(wordBank[word][letter])
//     console.log("END OF TEST")

// }
//getWord();




// for(let letterRandomWord of randomWord){
//     if(letter === letterRandomWord){
//       console.log('you guessed right')
      
//       // if letter correct then reveal correct letter.
//       //take hidden word and change the array to display word
//       ///hiddenWord.push(letterRandomWord.replace(letterRandomWord, letter));
//       console.log(hiddenWord2.join(''))
//     }
//     else{
//        //you are wrong add a body part to hangman
      
//        console.log('you guessed wrong')
//     }
    

//   }

  //replace were the letters are correct



//   const initializeDisplay = (word) =>{

//     let hiddenWord = [];
//     for(let i = 0; i < word.length; i++){

//     hiddenWord.push(word[i].replace(word[i], ' _'));

// }
// return hiddenWord.join('');

// //iterate through word to get letters 
// //replace letters with  _

// }