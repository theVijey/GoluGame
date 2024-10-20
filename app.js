let buttons = document.querySelectorAll(".boxbutton");
let reset = document.querySelector("#reset");
let turn = true; //PlayerX, PlayerO

let results = document.querySelector(".result");
let newGame = document.querySelector("#new-game");
let newGame2 = document.querySelector("#new-game2");
let mainDisplay = document.querySelector(".start-sec");
let display = document.querySelector(".display");
let gameDisplay = document.querySelector(".game");


mainDisplay.classList.remove("hide");

function startGame(){
    let player1 = document.getElementById('person1').value; //local Var
    if(player1 == ""){
        alert("Where is Player 1");
        return false;
    }

    let player2 = document.getElementById('person2').value; //local Var
    if(player2 == ""){
        alert("Where is Player 2");
        return false;
    }

    document.getElementById('player1').innerText="Player O: " + player1;
    document.getElementById('player2').innerText="Player X: " + player2;

    document.getElementById('playerO').innerText="Player O: " + player1;
    document.getElementById('playerX').innerText="Player X: " + player2;

    mainDisplay.classList.add("hide");
    gameDisplay.classList.remove("game");
}

// -------------------------------------------------------
const winPattern = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () =>{
    turn = true;
    enableButtons();
    display.classList.add("msg");
    gameDisplay.classList.remove("game");
    mainDisplay.classList.add("hide");
}

const gameNew = () =>{
    location.reload();
    display.classList.add("msg");
    gameDisplay.classList.add("game");
    mainDisplay.classList.remove("hide");
}

const gameNew2 = () =>{
    location.reload();
    display.classList.add("msg");
    gameDisplay.classList.add("game");
    mainDisplay.classList.remove("hide");
}

buttons.forEach((box) => {
    box.addEventListener("click", () =>{
        if(turn){
            box.innerText = "O";
            turn = false;
        }
        else{
            box.innerText = "X";
            turn = true;
        }
        box.disabled = true;

        checkWinner();
    })
});

const disableButtons = () =>{
    for(let button of buttons){
        button.disabled = true;
    }
}

const enableButtons = () =>{
    for(let button of buttons){
        button.disabled = false;
        button.innerText = "";
    }
}

const displayWinner = (winner) =>{
    results.innerText =`Congratulations! Winner is ${winner}`;
    display.classList.remove("msg");
    disableButtons();
    gameDisplay.classList.add("game");
}

const checkWinner = () =>{
    for(let pattern of winPattern){
        let pos1 = buttons[pattern[0]].innerText;
        let pos2 = buttons[pattern[1]].innerText;
        let pos3 = buttons[pattern[2]].innerText;

        if(pos1 !="" && pos2 !="" && pos3 !=""){
            if(pos1===pos2 && pos2===pos3){
                displayWinner(pos1);
            }
        }
    }
}

reset.addEventListener("click", resetGame);
newGame.addEventListener("click", gameNew);
newGame2.addEventListener("click", gameNew2);

// mainDisplay.classList.add("hide");
