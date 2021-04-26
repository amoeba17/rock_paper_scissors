
// Constants
const choices = ['Rock', 'Paper', 'Scissors']; 


// Game functions
function computerPlay() {
    return Math.floor(Math.random() * choices.length);
}

function playRound(playerSelection, computerSelection) { // both integers 0 (rock), 1 (paper), or 2 (scissors)

    console.log('Player selection: ' + choices[playerSelection] + ' | Computer selection: '+ choices[computerSelection]);

    if (playerSelection == computerSelection) {
        return 0; // tie
    } else if (playerSelection == (computerSelection + 1) % 3) {
        return 1; // win
    } else {
        return -1; // loss
    }
    throw Error('unreachable line of code');
}


// DOM functions
function dialogue(message) {
    const dialogueDiv = document.querySelector('#dialogue');
    dialogueDiv.textContent = message;

}

function setScore(playerScore, computerScore) {
    const scoreboard = document.querySelector('#scoreboard')
    scoreboard.textContent = `Player ${playerScore} | Computer ${computerScore}`;
}

function setImageDivs(playerSelection, computerSelection) {
    const playerImg = document.querySelector('#player-img');
    playerImg.src = `${choices[playerSelection]}.png`;

    const computerImg = document.querySelector('#computer-img');
    computerImg.src = `${choices[computerSelection]}.png`;
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerSelection = button.getAttribute('id');
        let computerSelection = computerPlay();
        setImageDivs(playerSelection, computerSelection);
        let result = playRound(playerSelection, computerSelection);
        if (result == 1) {
            dialogue(`You win! ${choices[playerSelection]} beats ${choices[computerSelection]}.`);
            setScore(++playerScore, computerScore);
            if (playerScore >= 3) {
                dialogue('You won the game!');
                console.clear()
                playerScore = 0;
                computerScore = 0;
                setScore(playerScore, computerScore);
            }
        } else if (result == -1) {
            dialogue(`You lose! ${choices[computerSelection]} beats ${choices[playerSelection]}.`);
            setScore(playerScore, ++computerScore);
            if (computerScore >= 3) {
                dialogue('You lost the game :{');
                console.clear()
                playerScore = 0;
                computerScore = 0;
                setScore(playerScore, computerScore);
            }
        } else { // result == 0
            dialogue("It's a tie!");
        }

    });
});



//variables
let playerScore = 0;
let computerScore = 0;
setScore(playerScore, computerScore)