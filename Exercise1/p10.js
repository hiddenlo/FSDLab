// Import prompt-sync
const prompt = require('prompt-sync')();

class BankAccount {
    constructor(holder, balance) {
        this.accountHolder = holder;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
        } else {
            console.log("Insufficient balance");
        }
    }
}

function transfer(acc1, acc2, amount) {
    if (acc1.balance >= amount) {
        acc1.withdraw(amount);
        acc2.deposit(amount);
    } else {
        console.log("Transfer failed: Insufficient balance.");
    }
}

let acc1 = new BankAccount(prompt("Account holder (Sender): "), parseFloat(prompt("Initial balance of sender: ")));
let acc2 = new BankAccount(prompt("Receiver account holder: "), parseFloat(prompt("Initial balance of receiver: ")));

let transferAmount = parseFloat(prompt("Enter the transfer amount: "));
transfer(acc1, acc2, transferAmount);

console.log(`${acc1.accountHolder}'s new balance:`, acc1.balance);
console.log(`${acc2.accountHolder}'s new balance:`, acc2.balance);
