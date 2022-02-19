import { Client } from "./Client.js";
import { BankAccount } from "./BankAccount.js"

const client23 = new Client("LeBron James", 11122233309);
const cliente0 = new Client("Jaysum Tatum", 88822233309);

const LeBronAccount = new BankAccount(2323, client23);
LeBronAccount.deposit(20000);
LeBronAccount.withdraw(5000);

console.log(LeBronAccount);