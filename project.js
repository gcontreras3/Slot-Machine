// 1. Deposit some money
// 2. Collect a be amount
// 3. Determine number of lines to bet on
// 4. Spin the slot machine
// 5. check if the user won
// 6. Give the user their winnings
// 7. play again or check if the user is out of money


const prompt = require('prompt-sync')();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    A: 2,
    B: 4,
    C: 6,
    D: 8
}

const SYMBOL_VALUE = {
    A: 5,
    B: 4,
    C: 3,
    D: 2
}


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
        
        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines >= 4){
            console.log("Invalid number of lines, try again.")
        } else {
            return numberOfLines;
        }
    }
}

const getBet = (balance) => {
    while (true){
        const bet = prompt("Enter the bet per line: ")
        const numberBet = parseFloat(bet);
        
        if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines){
            console.log("Invalid bet, try again.")
        } else {
            return numberBet;
        }
    }
}

const spin = () => {
    const symbols = [];
    // Looping through each entrie
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)){
        console.log(symbol, count);
        for (let i = 0; i < count; i++){
            symbols.push(symbol);
        }
    }
    
    const reels = [[], [], []];
    for (let i = 0; i < COLS; i++){
        const reelSymbols = [...symbols];
        for (let j = 0; j < ROWS; j++){
            const selectedSymbol = 
        }
    }
    console.log(symbols)
}
spin();
let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance);