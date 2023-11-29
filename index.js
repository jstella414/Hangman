import prompt from "readline-sync";
import wordBank from "./word-bank.js";
import hangManPics from "./HANGMANPICS.js";

////hangManPics.forEach((pic)=>{console.log("-----\n"), console.log(pic)})


const getRandomWord = () => {
    let randomizeWord = Math.floor(Math.random() * wordBank.length - 1);

    return wordBank[randomizeWord]
  }

  let randomWord = getRandomWord().split('')

console.log(randomWord)


//////////////////////


let displayString = [];

function initializeDisplay() {
    randomWord.forEach((item)=>{displayString.push("_");})
    return displayString
  }
 let dashedWord = initializeDisplay();

  console.log(displayString);
  
  ////////////////////



  let storedLetters = "";
  let storedletter = "";

  const updateDisplay = (word) =>{

    let letter = prompt.question("Guess a letter: ").toLowerCase();
   

    if(storedLetters.includes(letter)){
        console.log(`you have Guessed that letter already!`);
        letterIsCorrect = true;
        checkGuess();
    }else{
        for(let i = 0; i <= word.length; i++){
            if(letter === word[i]) 
                {
                    displayString.splice(i, 1, letter) 
                    letterIsCorrect = true;   
                }
        }
        console.log(displayString.join(' '))
        storedLetters += letter;
        //console.log(`storedletters ${storedLetters}`)
        return storedletter = letter;
    }
    
    
}


////////////////////

let letterIsCorrect = true;
let isGameOver = false;
let guesses = 6;

    const GameOver = () => {
        console.log(`game is over! Word was ${randomWord.join('')}`)
       
    }

    const GameWon = () => {
        console.log("congrats, you have won!")
    }



////////////

const displayHangman = () =>{
    switch (guesses) {
        case 5:
        console.log("----------")
          console.log(hangManPics[0])
          console.log("----------")
          break;
        case 4:
            console.log("----------")
            console.log(hangManPics[1])
            console.log("----------")
          break;
        case 3:
            console.log("----------")
            console.log(hangManPics[2])
            console.log("----------")
          break;
        case 2:
            console.log("----------")
            console.log(hangManPics[3])
            console.log("----------")
          break;
        case 1:
            console.log("----------")
            console.log(hangManPics[4])
            console.log("----------")
          break;
        case 0:
            console.log("----------")
            console.log(hangManPics[5])
            console.log("----------")
          break;
      }
  }


  ////////

function checkGuess() {
    while(guesses > 0){
    
                
                if(randomWord.join('') === displayString.join('')){ 
                    isGameOver = true
                    GameWon();
                    break;
                }
            
                if(letterIsCorrect){
                    letterIsCorrect = false;
                    console.log(`you have ${guesses} Guesses left`);
                    updateDisplay(randomWord)
                   
                }else{
                    storedLetters += storedletter;
                    guesses--;

                    if(guesses === 0){
                        GameOver();
                        break;
                    }

                    displayHangman()
                    console.log(`you have ${guesses} Guesses left`);
                    updateDisplay(randomWord)
                    
                }
            }
            
        }

    checkGuess();
   
    ///if(storedLetters.includes(letter))
       
    //CHeck if the word contains the gussed letter
    //Return true or false (Boolean)

  