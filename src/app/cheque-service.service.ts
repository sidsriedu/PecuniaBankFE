import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class chequeTransactions{

  transactionID:number;
  transactionDate:string;
  transactionType:string;
  chequeID:number;
  chequeNo:string;
  payeeAccountNo:string;
  recipientAccountNo:string;
  amount:number;
  bankName:string;
  ifsc:string;
  issueDate:Date;

  constructor(transactionID:number,transactionDate:string,transactionType:string,chequeID:number,chequeNo:string,payeeAccountNo:string,recipientAccountNo:string,amount:number,bankName:string,ifsc:string,issueDate:Date
    ){
    this.transactionID=transactionID;
    this.transactionDate=transactionDate;
    this.transactionType=transactionType;
    this.chequeID=chequeID;
    this.chequeNo=chequeNo
    this.payeeAccountNo=payeeAccountNo;
    this.recipientAccountNo=recipientAccountNo;
    this.amount=amount;
    this.bankName=bankName;
    this.ifsc=ifsc;
    this.issueDate=issueDate;
    
  }
}


@Injectable({
  providedIn: 'root'
})
export class ChequeServiceService {

  constructor(private http:HttpClient) { }

  
  public debitusingcheque(debit:chequeTransactions){   
    console.log(debit) 
    return this.http.put("http://localhost:2002/transactions/debitUsingCheque",debit,{responseType: 'text'});
  }
  public creditusingcheque(credit:chequeTransactions){   
    console.log(credit) 
    return this.http.put("http://localhost:2002/transactions/creditUsingCheque",credit,{responseType: 'text'});
  }

}
