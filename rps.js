const CPU_WIN = 1;
const PLAYER_WIN = 2;
const DRAW = 0;

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", GameRoundStarted);
paperButton.addEventListener("click", GameRoundStarted);
scissorsButton.addEventListener("click", GameRoundStarted);

const playerScoreText = document.querySelector("#player");
const cpuScoreText = document.querySelector("#cpu");

let playerScore = 0;
let cpuScore = 0;

let winRoundMessage = "You won the round!"
let loseRoundMessage = "You lost the round!"
let drawRoundMessage = "Round drawn!"

let winMessage = "You won the game!"
let loseMessage = "You lost the game!"
let drawMessage = "Game drawn!"

RestartGame();

function GetRandomRange(max)
{
    return Math.floor(Math.random() * max);
}

function GetComputerChoice()
{
    let choiceNum = GetRandomRange(3);

    switch(choiceNum)
    {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function GameRoundStarted(e)
{
    let playerChoice = e.target.getAttribute("id");
    console.log("You picked " + playerChoice);

    let cpuChoice = GetComputerChoice()
    console.log("The computer picked " + cpuChoice); 

    let roundResult = EvaluateRoundWinner(playerChoice, cpuChoice);

    UpdateScore(roundResult);
    CheckForWinner();
}

function EvaluateRoundWinner(player, cpu)
{
    switch(player){
        case "rock":
            if(cpu == "scissors"){
                return PLAYER_WIN;
            } else if(cpu == "paper"){
                return CPU_WIN;
            } else{
                return DRAW;
            }
            break;

        case "paper":
            if(cpu == "rock"){
                return PLAYER_WIN;
            } else if(cpu == "scissors"){
                return CPU_WIN;
            } else{ 
                return DRAW;
            }
            break;

        case "scissors":
            if(cpu == "paper"){
                return PLAYER_WIN;
            } else if(cpu == "rock"){
                return CPU_WIN;
            } else { return DRAW; }
            break;
    }
}

function UpdateScore(result)
{
    switch(result)
    {
        case DRAW:
            console.log(drawRoundMessage);
            break;
        case PLAYER_WIN:
            console.log(winRoundMessage);
            playerScore++;
            break;
        case CPU_WIN:
            console.log(loseRoundMessage);
            cpuScore++;
    }

    playerScoreText.textContent = playerScore.toString();
    cpuScoreText.textContent = cpuScore.toString();
}

function CheckForWinner()
{
    if(playerScore == 5)
    {
        EndGame(PLAYER_WIN);
    }

    if(cpuScore == 5)
    {
        EndGame(CPU_WIN);
    }
}

function EndGame(result)
{
    switch(result)
    {
        case PLAYER_WIN:
            alert(winMessage);
            break;
        
        case CPU_WIN:
            alert(loseMessage)
    }

    RestartGame();
}

function RestartGame()
{
    playerScore = 0;
    cpuScore = 0;

    UpdateScore();
}

/*function GameLoop()
{
    const ROUND_MAX = 5;
    let winMessage = "You won the game!"
    let loseMessage = "You lost the game!"
    let drawMessage = "Game drawn!"

    let winRoundMessage = "You won the round!"
    let loseRoundMessage = "You lost the round!"
    let drawRoundMessage = "Round drawn!"

    let playerScore = 0;
    let cpuScore = 0;

    for(let i = 0; i< ROUND_MAX; i++){
        let result = GameRoundStarted();
    }

    if(playerScore > cpuScore){
        return winMessage;
    } else if(playerScore < cpuScore){
        return loseMessage;
    } else{
        return drawMessage;
    }
}

console.log(GameLoop());*/