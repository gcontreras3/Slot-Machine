// 1. Deposit some money
// 2. Collect a be amount
// 3. Determine number of lines to bet on
// 4. Spin the slot machine
// 5. check if the user won
// 6. Give the user their winnings
// 7. play again or check if the user is out of money


const prompt = require('prompt-sync')();

// Creating a function to collect a deposit

const deposit = () => {
    while (true){
    const depositAmount = prompt("Enter a deposit amount: ")
    const numberDepositAmount = parseFloat(depositAmount);
    
    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0){
        console.log("Invalid deposit amount, try again.")
    } else {
        return numberDepositAmount;
    }
}
};

const getNumberOfLines = () => {
    while (true){
        const lines = prompt("Enter the number of lines to bet on (1-3): ")
        const numberOfLines = parseFloat(lines);
        
        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines >= 3){
            console.log("Invalid number of lines, try again.")
        } else {
            return numberOfLines;
        }
    }
}
const depositAmount = deposit();
const numberOfLines = getNumberOfLines();