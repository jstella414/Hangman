import prompt from "readline-sync";
import wordBank from "./word-bank.js";

console.log('this works. first word is\n\n', wordBank[0])
const letter = prompt.question('Please guess a letter:');

console.log("letter:", letter);


/*



*/
