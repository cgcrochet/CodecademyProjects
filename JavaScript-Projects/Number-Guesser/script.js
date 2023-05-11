let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget() {
    let randNum = Math.floor(Math.random() * 9);
    return randNum;
}

// returns true if the user is closer to the secret number
// a tie defaults to the user being "closer"
// I would change this function name, if possible
function compareGuesses(uNum, cNum, sNum) {
    if (uNum < 0 || uNum > 9) {
        alert("The random number can only be between 0 and 9");
    }

    const userSecretDistance = Math.abs(sNum - uNum);
    const computerSecretDistance = Math.abs(sNum - cNum);
    if (userSecretDistance <= computerSecretDistance) {
        return true;
    } else {
        return false;
    }
}

function updateScore(winner) {
    if (winner === "human") {
        humanScore++;
    } else if (winner === "computer") {
        computerScore++;
    }
}

function advanceRound() {
    currentRoundNumber++;
}
