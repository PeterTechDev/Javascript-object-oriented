import { Client } from "./Client.js";

export class BankAccount{
    static accountTotals = 0;
    agency;
    _client;
   // #balance =0 https://github.com/tc39/proposal-class-fields#private-fields
    _balance = 0;
    


    set client(newBalance){
        if(newBalance instanceof Client){
            this._client = newBalance;
        }
    }

    get client(){
        return this._client;
    }

    get balance(){
        return this._balance;
    }

    constructor(agency, client){
        this.agency = agency;
        this.client = client;
        BankAccount.accountTotals += 1;
    }


    withdraw(amount){
        if(this._balance >= amount){
            this._balance -= amount;
            return amount;
        }
    }

    deposit(amount){
        if(amount <= 0)
        {
            return;
        } 
        this._balance += amount;           
    }

    transfer(amount, ac){
        
        const withdrawValue = this.withdraw(amount);
        conta.deposit(withdrawValue);  
    }
}