const CPU_ROUND_WIN = 1;
const PLAYER_ROUND_WIN = 2;
const DRAW = 0;

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

function EvaluateWinner(player, cpu)
{
    switch(player){
        case "rock":
            if(cpu == "scissors"){
                return PLAYER_ROUND_WIN;
            } else if(cpu == "paper"){
                return CPU_ROUND_WIN;
            } else{
                return DRAW;
            }
            break;

        case "paper":
            if(cpu == "rock"){
                return PLAYER_ROUND_WIN;
            } else if(cpu == "scissors"){
                return CPU_ROUND_WIN;
            } else{ 
                return DRAW;
            }
            break;

        case "scissors":
            if(cpu == "paper"){
                return PLAYER_ROUND_WIN;
            } else if(cpu == "rock"){
                return CPU_ROUND_WIN;
            } else { return DRAW; }
            break;
    }
}

function GameRound()
{
    let playerChoice = prompt("Write rock, paper or scissors");
    console.log("You picked " + playerChoice);

    let cpuChoice = GetComputerChoice()
    console.log("The computer picked " + cpuChoice); 

    return EvaluateWinner(playerChoice, cpuChoice);
}

function GameLoop()
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
        let result = GameRound();

        switch(result)
        {
            case DRAW:
                console.log(drawRoundMessage);
                break;
            case PLAYER_ROUND_WIN:
                console.log(winRoundMessage);
                playerScore++;
                break;
            case CPU_ROUND_WIN:
                console.log(loseRoundMessage);
                cpuScore++;
        }
    }

    if(playerScore > cpuScore){
        return winMessage;
    } else if(playerScore < cpuScore){
        return loseMessage;
    } else{
        return drawMessage;
    }
}

console.log(GameLoop());