

let secretWord;
let wordArray;
let answer;
let spaces
let gameOver = true
let limbCount = 9
let contents
let attemptsLeft = 8
let solved = false

function changeImage(){
let imgEl = document.querySelector("#img-el")
imgEl.src = "/Images/scarecrow.png"
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

/* this function takes in the word and places it into an array
for easier searching and presentation. */
function secretToArray(){
    wordArray = [secretWord.length];
    for( let i = 0; i < secretWord.length; i++ ){
        wordArray[i] = secretWord[i]
    }
}

function displaySelectedLetters(letter){

    for(let i = 0; i <wordArray.length; i++){
        if(wordArray[i] === letter){
            answer[i] = letter
        }
    }
        console.log(answer)
        /* This makes a tag with an text content */
    let answerString = "<p> "
    for(let i = 0; i < answer.length; i++){
    answerString += answer[i] + " "
    }
    answerString += "</p>"

    console.log("Answer String" + answerString)  
    
    return answerString
}

function getLetter(element){
    
    let letter = document.getElementById(element).textContent
    changeButtonColor(element,secretWord.includes(letter))

    if(secretWord.includes(letter)){
        console.log("The word contains " + letter)
    }else{
        console.log("There is no "+ letter )
    }
    
    contents.innerHTML = displaySelectedLetters(letter)
     checkGameStatus()
     console.log("Attempts left" +attemptsLeft + "Solved" + solved)
}
function startGame(){
    contents = document.querySelector("#secret-el")
    contents.innerHTML = 
    " <p>let's starts! Guess the word or phrase below!</p class='test' id='new-el'>" + '<br>' + spaces
    
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
        decreaseAttemptRemaining()
    }
}
/* Changes the display of the letter buttons to unset from none
This allows the keys to be hidden until tha game starts */
function displayBoard(){
    let contents = document.querySelector("#letter-el")
    contents.className = "show"
}
function checkGameStatus(){
if(attemptsLeft <= 0){
    gameOver = true
}
for(let i = 0; i < answer.length; i++){
    if(!answer.includes(" _ ")){
        solved = true;
    }
}
}
function decreaseAttemptRemaining(){
    attemptsLeft --
}
