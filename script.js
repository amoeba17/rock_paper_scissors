const choices = ['Rock', 'Paper', 'Scissors']; 

function computerPlay() {
    return Math.floor(Math.random() * choices.length);
}

function playRound(playerSelection, computerSelection) { // both integers 0 (rock), 1 (paper), or 2 (scissors)
    console.log('Player selection: ' + choices[playerSelection]);
    console.log('Computer selection: '+ choices[computerSelection]);

    if (playerSelection == computerSelection) {
        return 0; // tie
    } else if (playerSelection == (computerSelection + 1) % 3) {
        return 1; // win
    } else {
        return -1; // loss
    }
    throw Error('unreachable line of code');
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let input;
        do {
            input = prompt('Rock | Paper | Scissors: ').toLowerCase();
        } while (input != 'rock' && input != 'paper' && input != 'scissors');

        let playerSelection;
        if (input == 'rock') {
            playerSelection = 0;
        } else if (input == 'paper') {
            playerSelection = 1;
        } else {
            playerSelection = 2;
        }
        let computerSelection = computerPlay();
        
        let result = playRound(playerSelection, computerSelection);
        if (result == 1) {
            alert(`You win! ${choices[playerSelection]} beats ${choices[computerSelection]}.`);
            playerScore++;
            if (playerScore >= 3) {
                return 'You won the game!';
            }
        } else if (result == -1) {
            alert(`You lose! ${choices[computerSelection]} beats ${choices[playerSelection]}.`);
            computerScore++;
            if (computerScore >= 3) {
                return 'You lost the game :{';
            }
        } else { // result == 0
            alert("It's a tie!");
            i--;
        }
    }
    return 'unexpected return';
}
