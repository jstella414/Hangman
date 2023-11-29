import prompt from "readline-sync";
import wordBank from "./word-bank.js";


const getRandomWord = () => {
    let randomizeWord = Math.floor(Math.random() * wordBank.length - 1);

    return wordBank[randomizeWord]
  }

let randomWord = getRandomWord().split

console.log(randomWord)

////////////////////////

let displayString = [];
const initializeDisplay = (word, letter) =>{

    word.split("").forEach((randomLetter)=>{return letter === randomLetter ? displayString.push(randomLetter) : displayString.push("_");})
    return displayString = displayString.join('');
}

////////////////////////
let newDisplayString = [];

const updateDisplay = (word, letter) =>{
// word.split("").forEach((randomLetter, i) => {
//     if(letter === randomLetter ) displayString.splice(i, 1, letter)})
let i = 0;    
while( i < word.length){
        
        // if(letter == word[i]){}
            displayString.split('');
            displayString.splice(i, 1, letter);
            console.log("its splice")
            displayString.join('');
            console.log("its joined")
        i++
    }


}

   
////////////////////////


const checkGuess = (word, gussedLetter) =>{

}

////
let gameIsOver = false;

const startGame = () => {
    
    let letter = prompt.question("Please guess a letter: ")

    initializeDisplay(randomWord, letter);
    console.log(displayString)
    
    while(randomWord !== displayString){
        letter = prompt.question("Please guess a letter2: ")
        updateDisplay(randomWord, letter);
        console.log(displayString)

    }

    // checkGuess();
    // isGameOver();

}

//////////



const isGameOver = () => {
    randomWord === newDisplayString ? gameIsOver = true: startGame();
}
/////
isGameOver();