

let secretWord;
let gameOver = false;

function changeImage(){
let imgEl = document.querySelector("#img-el")
imgEl.src = "/Images/scarecrow.png"
}

function getLetter(letter){
    let word = document.querySelector("#word-el").textContent
    if(word.includes(letter)){
        console.log("The word contains " + letter)
    }else{
        console.log("There is no "+ letter )
    }
}
function startGame(){
    let contents = document.querySelector("#secret-el")
    contents.outerHTML = 
    " <p>let's starts! Guess the word or phrase below!</p>" + '<br>' +
    "<p>_ _ _ _ _ _ _</p"
}
function grabSecret(){
    let secretWord = document.querySelector("#secretWord").value
    console.log(secretWord)
    startGame();
}
