class BankAccount{
  constructor(initialBalance){
    this.balance = initialBalance;
  }

  getBalance(){
    return this.balance;
  }

  deposit(amount){
    if (amount>0) {
      this.balance+=amount;
    } else{
      console.log("Сума повинна бути більшою за 0");
    }
  }
  withdraw(amount){
    if(amount>this.balance){
      console.log("Недостатньо коштів на рахунку");
    } else if(amount>0){
      this.balance -= amount;
    } else{
      console.log("Сума повинна бути більшою за 0");
    }
  }
}
const account1 = new BankAccount(1000);
console.log(account1.getBalance()); 
account1.deposit(500);
console.log(account1.getBalance());
account1.withdraw(200);
console.log(account1.getBalance()); 