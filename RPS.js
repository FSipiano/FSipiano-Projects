playGame();

//input user choice
function getUserChoice(userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === 'lion' || userInput === 'alien' || userInput === 'old lady') {
        return userInput;
    } else {
        return 'Please enter "Alien, Lion or Old lady!"'
    }
}
//computer random choice
function getComputerChoice() {
    var randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return 'lion';
    } else if (randomNumber === 1) {
        return 'alien';
    } else {
        return 'old lady';
    }
}
//find winner
function determineWinner(userChoice, computerChoice) {

    if (userChoice === computerChoice) {
        return "It's a tie!";
    }
    if (userChoice === 'alien') {
        if (computerChoice === 'lion') {
            return 'You were mauled by the lion, you lose!';
        } else {
            return 'You have disarmed the old lady, you win!';
        }
    }
    if (userChoice === 'lion') {
        if (computerChoice === 'old lady') {
            return 'You have been shot by an old lady, you lose!';
        } else {
            return 'You have mauled the alien, you win!';
        }
    }
    if (userChoice === 'old lady') {
        if (computerChoice === 'alien') {
            return 'You have been disarmed by an alien, you lose!'
        } else {
            return 'You have shot the alien, you win!';
        }
    }
}
function playGame() {
    var promptUserChoice = prompt("Please choose lion, alien, or old lady");
    var userChoice = getUserChoice(promptUserChoice)
    var computerChoice = getComputerChoice();
    console.log(userChoice);
    console.log(computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}



