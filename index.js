console.log("Welcome to tic tac toe game console");
let click = new Audio("click sound.wav");
let winner = new Audio("winner.mp3");
let bgmusic = new Audio("background-music.mp3");
let reset = document.getElementById("reset");
let gameover = false;
let turn = "X";


// function to change the turn
const changeTurn = () => {
    return turn === "X" ? "O" : "X";
}

// winning logic
const checkWin = () => {
    let boxText = document.getElementsByClassName('character');
    
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    wins.forEach(e => {
        if ((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[1]].innerText === boxText[e[2]].innerText) && (boxText[e[0]].innerText !== "")) {
            document.querySelector(".info").innerText = boxText[e[0]].innerText + " won";
            gameover =true;
            document.getElementById("winningGif").style.width = "150px";
            winner.play();

            // reseting the game
        }
    })
}

// game logic
// bgmusic.play();
let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach((element) => {
    let boxText = element.querySelector(".character");
    element.addEventListener("click", () => {
        if (boxText.innerText === "") {
            boxText.innerText = turn;
            turn = changeTurn();
            click.play();
            checkWin();
            console.log("button clicked");
            if(!gameover)
            {
                document.getElementsByClassName("info")[0].innerHTML = "Turns for " + turn;

            }
        }
    })
})


// adding eventlistener to reset button
let boxe = document.getElementsByClassName("box");
reset.addEventListener('click', ()=>{

    Array.from(boxe).forEach((element) =>{
        element.innerText ="";
    })
    turn = "X";
    gameover = false;
    document.getElementsByClassName("info")[0].innerHTML = "Turns for " + turn;
    document.getElementById("winningGif").style.width = "0px";
})