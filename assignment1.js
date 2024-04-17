class Transaction {
    constructor(type, amount) {
      this.type = type; // 'deposit' or 'withdraw'
      this.amount = amount;
      this.timestamp = new Date();
    }
  }
  
  class BankAccount {
    constructor(accountNumber, firstName, lastName, initialBalance = 0) {
      this._accountNumber = accountNumber;
      this._firstName = firstName;
      this._lastName = lastName;
      this._accountHolder = `${firstName} ${lastName}`;
      this._balance = initialBalance;
      this._transactions = [];
    }
  
    deposit(amount) {
      if (amount <= 0) {
        console.log("Deposit amount must be greater than 0.");
        return;
      }
      this._balance += amount;
      const depositTransaction = new Transaction('deposit', amount);
      this._transactions.push(depositTransaction);
      console.log(`Successfully deposited $${amount} into account ${this._accountNumber}.`);
    }
  
    get accountNumber() {
      return this._accountNumber;
    }
  
    get firstName() {
      return this._firstName;
    }
  
    get lastName() {
      return this._lastName;
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
  }
  

  const account = new BankAccount(123456789, "John", "Doe", 1000);
  console.log(`Account Holder: ${account.accountHolder}`);
  console.log(`Initial Balance: $${account.balance}`);
  account.deposit(500);
  console.log(`Current Balance: $${account.balance}`);
  console.log(`Transactions:`, account.transactions);
  