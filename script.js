
var choices = ['Rock', 'Paper', 'Scissors'];
var playerScore = 0;
    var computerScore = 0;
function getComputerChoice() {
       
   return computerChoise = choices[getRandom()]
}

function getRandom()
{
    return Math.floor(Math.random() * choices.length)
}

function playRound(playerSelection){
    computerSelection = getComputerChoice();
    playerSelection = capitalizeFirstLetter(playerSelection);
    var result;
    
    if (playerSelection === 'Rock') {
        switch(computerSelection) {
        case "Rock":
            textMsg = "You Draw! Rock draws Rock";
            
            break;
        case "Paper":
            textMsg = "You Lose! Paper beats Rock";
            result = "Lose";
            break;
        case "Scissors":
            textMsg = "You Won! Rocks beats Scissors"
            result = "Win";
            break;
        }
    }
    else if(playerSelection === 'Scissors') {
        switch(computerSelection) {
            case "Rock":
                textMsg = "You Lose! Rocks beats Scissors";
                result = "Lose";
                break;
            case "Paper":
                textMsg = "You Won! Scissors beats Paper";
                result = "Win";
                break;
            case "Scissors":
                textMsg =  "You Draw! Scissors draw Scissors";
                
                break;
            }
    }        
    else if(playerSelection === 'Paper') {
        switch(computerSelection) {
            case "Rock":
                textMsg = "You Won! Paper beats Rock";
                result = "Win";
                break;
                   
            case "Paper":
                textMsg = "You Draw! Paper draws Paper";
                
                break;
            case "Scissors":
                textMsg = "You Lose! Scissors beats Papers";
                result = "Lose";
                break;
            }
       
    }
    
    
    
    if(result === "Win"){
        playerScore++;
    }
    else if(result === "Lose")
    {
        computerScore++;
    }
    divResult.textContent = textMsg + ` ${playerScore} - ${computerScore}`
  
    if(playerScore == 5 || computerScore == 5){
        divResult.textContent += playerScore > computerScore ?  `
        You won ${playerScore} to ${computerScore}. Good job.`
        : `
        You lost ${playerScore} to ${computerScore}. Game over. Try again.`
        playerScore = 0
        computerScore = 0
}

    return result;
}


function capitalizeFirstLetter(string) 
{
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
function game() {
    
   
   

      
        console.log(`${playerScore} - ${computerScore}`)   
      
    
}


       
let btnRock = document.getElementById('rock');

let btnPaper = document.getElementById('paper');
let btnScissors = document.getElementById('scissors');
let divResult = document.getElementById('result');



window.onload = game;

btnRock.addEventListener("click", () => {playRound('rock')});
btnPaper.addEventListener("click", () => {playRound('paper')});
btnScissors.addEventListener("click", () => {playRound('scissors')});
