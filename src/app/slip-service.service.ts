import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class slipTransactions{
  transactionID:number;
  transactionDate:string;
  transactionType:string;
  accountNo:string;
  amount:number;
  constructor(transactionID:number ,transactionDate:string,transactionType:string,accountNo:string,amount:number){

    this.transactionID=transactionID;
    this.transactionDate=transactionDate;
    this.transactionType=transactionType;
    this.accountNo=accountNo;
    this.amount=amount;
  }
}


@Injectable({
  providedIn: 'root'
})
export class SlipServiceService {

  constructor(private http:HttpClient) { }

  public debitusingslip(debit:slipTransactions){    
    return this.http.put("https://pecunia-bank-be.herokuapp.com/transactions/debitUsingSlip",debit,{responseType: 'text'});
  }
  public creditusingslip(credit:slipTransactions){   
    return this.http.put("https://pecunia-bank-be.herokuapp.com/transactions/creditUsingSlip",credit,{responseType: 'text'});
  }

}
