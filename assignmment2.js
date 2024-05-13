class Transaction {
    constructor(type, amount) {
        this.type = type;
        this.amount = amount;
        this.timestamp = new Date();
    }
}

class BankAccount {
    constructor(accountNumber, firstName, lastName, dailyWithdrawalLimit) {
        this.accountNumber = accountNumber;
        this.firstName = firstName;
        this.lastName = lastName;
        this.accountHolder = `${firstName} ${lastName}`;
        this.balance = 0;
        this.transactions = [];
        this.dailyWithdrawalLimit = dailyWithdrawalLimit;
        this.withdrawalToday = 0;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            const depositTransaction = new Transaction("deposit", amount);
            this.transactions.push(depositTransaction);
            console.log(`$${amount} deposited into account. New balance: $${this.balance}`);
        } else {
            console.log("Invalid deposit amount.");
        }
    }

    withdraw(amount) {
        if (amount > 0 && this.balance - amount >= 0 && this.withdrawalToday + amount <= this.dailyWithdrawalLimit) {
            this.balance -= amount;
            this.withdrawalToday += amount;
            const withdrawTransaction = new Transaction("withdrawal", amount);
            this.transactions.push(withdrawTransaction);
            console.log(`$${amount} withdrawn from account. New balance: $${this.balance}`);
        } else if (amount <= 0) {
            console.log("Invalid withdrawal amount.");
        } else if (this.balance - amount < 0) {
            console.log("Insufficient funds.");
        } else if (this.withdrawalToday + amount > this.dailyWithdrawalLimit) {
            console.log("Exceeded daily withdrawal limit.");
        }
    }

    transfer(amount, recipientAccount) {
        if (amount > 0 && this.balance - amount >= 0) {
            this.balance -= amount;
            recipientAccount.deposit(amount);
            const transferTransaction = new Transaction("transfer", amount);
            this.transactions.push(transferTransaction);
            console.log(`$${amount} transferred to ${recipientAccount.accountHolder}. New balance: $${this.balance}`);
        } else if (amount <= 0) {
            console.log("Invalid transfer amount.");
        } else if (this.balance - amount < 0) {
            console.log("Insufficient funds.");
        }
    }

    viewTransactions() {
        console.log("Transaction History:");
        this.transactions.forEach(transaction => {
            console.log(`${transaction.timestamp.toLocaleString()} - ${transaction.type}: $${transaction.amount}`);
        });
    }
}

const account1 = new BankAccount(123456789, "Grace", "Umana", 1000);
const account2 = new BankAccount(987654321, "David", "Hagin", 1500);

account1.deposit(1000);
account1.withdraw(500);
account1.transfer(300, account2);
account1.withdraw(800);
console.log("Account 1 Transaction History:");
console.log(account1.viewTransactions());

console.log("Account 2 Transaction History:");
console.log(account2.viewTransactions());