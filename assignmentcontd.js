class Transaction {
    constructor(type, amount) {
        this._type = type;
        this._amount = amount;
        this._timestamp = new Date();
    }

    get type() {
        return this._type;
    }

    get amount() {
        return this._amount;
    }

    get timestamp() {
        return this._timestamp;
    }
}

class BankAccount {
    constructor(accountNumber, firstName, lastName) {
        this._accountNumber = accountNumber;
        this._firstName = firstName;
        this._lastName = lastName;
        this._accountHolder = `${firstName} ${lastName}`;
        this._balance = 0;
        this._transactions = [];
    }

    get accountNumber() {
        return this._accountNumber;
    }

    get accountHolder() {
        return this._accountHolder;
    }

    get balance() {
        return this._balance;
    }

    get transactions() {
        return this._transactions;
    }

    deposit(amount) {
        if (amount > 0) {
            this._balance += amount;
            const depositTransaction = new Transaction("deposit", amount);
            this._transactions.push(depositTransaction);
            console.log(`$${amount} deposited into account. New balance: $${this._balance}`);
        } else {
            console.log("Invalid deposit amount.");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this._balance) {
            this._balance -= amount;
            const withdrawTransaction = new Transaction("withdrawal", amount);
            this._transactions.push(withdrawTransaction);
            console.log(`$${amount} withdrawn from account. New balance: $${this._balance}`);
        } else {
            console.log("Insufficient funds or invalid withdrawal amount.");
        }
    }

    getTransactions() {
        console.log("Transaction History:");
        this._transactions.forEach(transaction => {
            console.log(`${transaction.timestamp.toLocaleString()} - ${transaction.type}: $${transaction.amount}`);
        });
    }
}



const myAccount = new BankAccount(123456789, "Grace", "Umana");

myAccount.deposit(1000);
myAccount.withdraw(500);
myAccount.deposit(200);
myAccount.withdraw(300);
myAccount.getTransactions();
