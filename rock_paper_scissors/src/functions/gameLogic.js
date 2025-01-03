const getUserChoice = (userInput) => {
    if (userInput === 'rock') {
        return userInput;
    } else if (userInput === 'paper') {
        return userInput;
    } else if (userInput === 'scissors') {
        return userInput;
    } else {
        console.log('Invalid input. Please pick between rock, paper or scissors.')
        return false;
    }
}

const getComputerChoice = () => {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return 'rock';
    } else if (computerChoice == 1) {
        return 'paper';
    } else if (computerChoice === 2) {
        return 'scissors';
    }
}

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        console.log('The game is a tie, you both picked ' + userChoice + '!');
        return 'tie';
    } else if (userChoice === 'rock') {
        if (computerChoice === 'scissors') {
            console.log('Congrats user, you win!');
            return 'User wins';
        } else if (computerChoice === 'paper') {
            console.log('Unfortunate user, computer wins!');
            return 'Computer wins';
        }
    } else if (userChoice === 'paper') {
        if (computerChoice === 'rock') {
            console.log('Congrats user, you win!');
            return 'User wins';
        } else if (computerChoice === 'scissors') {
            console.log('Unfortunate user, computer wins!');
            return 'Computer wins';
        }
    } else if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            console.log('Unfortunate user, computer wins!');
            return 'Computer wins';
        } else if (computerChoice === 'paper') {
            console.log('Congrats user, you win!');
            return 'User wins';
        }
    }
}

export const playGame = (weapon) => {
    let userChoice = getUserChoice(weapon);
    let computerChoice = getComputerChoice();
    console.log('User picked: ' + userChoice + ', while computer used: ' + computerChoice);
    let winner = determineWinner(userChoice, computerChoice);

    return {
        userChoice,
        computerChoice,
        winner
    }
}