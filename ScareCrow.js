

let secretWord;
let wordArray;
let answer;
let spaces
let gameOver = true
let limbCount = 9

function changeImage(){
let imgEl = document.querySelector("#img-el")
imgEl.src = "/Images/scarecrow.png"
}

function getLetter(element){
    let letter = document.getElementById(element).innerText
    if(secretWord.includes(letter)){
        console.log("The word contains " + letter)
    }else{
        console.log("There is no "+ letter )
    }
    changeButtonColor(element,secretWord.includes(letter));
    displaySelectedLetters(letter)
}

function startGame(){
    let contents = document.querySelector("#secret-el")
    contents.outerHTML = 
    " <p>let's starts! Guess the word or phrase below!</p>" + '<br>' + spaces
    displayBoard()
    gameOver = false;
}

/* This function grabs the user input and assigns the value
to the "Secretword variable and then starts the game and displays the board." */
function grabSecret(){
    secretWord = document.querySelector("#secretWord").value.toUpperCase()
    console.log(secretWord)
    secretToArray();
    wordCreator();
    startGame();
}

/* This function makes the buttons either green on grey to assit
in the identification of which buttons were pressed already */
function changeButtonColor(element,status){
    if(status){
        document.getElementById(element).className = "green_button" 
    }else{
        document.getElementById(element).className = "grey_button"
    }
}

/* Changes the display of the letter buttons to unset from none
This allows the keys to be hidden until tha game starts */
function displayBoard(){
    let contents = document.querySelector("#letter-el")
    contents.className = "show"
}

function secretToArray(){
    wordArray = [secretWord.length];
   
    for( let i = 0; i < secretWord.length; i++ ){
        wordArray[i] = secretWord[i]
    }
}
/* th==This function creates a string in html format to be used to display
the number of letters in the word or phrase. */
function wordCreator(){
    spaces = "<p>";
    answer = [wordArray.length]
    for(let i = 0; i < wordArray.length; i++){
        if(wordArray[i] === " "){
            spaces += " &nbsp "
            answer[i] = " &nbsp"
        }else{
            spaces += " _ "
            answer[i] = " _ "
        }
    }
    spaces += "</p>"
    console.log("word creator output" + spaces)
    console.log("Answer Array output: " + answer)
    return spaces
}
function displaySelectedLetters(letter){
    for(let i = 0; i <wordArray.length; i++){
        if(wordArray[i] === letter){
            answer[i] = letter
        }
    }
        console.log(answer)
}