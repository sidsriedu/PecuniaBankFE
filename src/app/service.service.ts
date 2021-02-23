import { Injectable } from '@angular/core';
import { Customer } from './Customer';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoanDisbursal, LoanRequests } from './loan';
import { Observable } from 'rxjs';
import { account } from './loginservice.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  httpService: any;


  constructor(private http: HttpClient) { }
  acc: Account;
  cus: Customer;
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });


  public validateEmail(username: any, password: any) {
    return this.http.get("https://pecunia-bank-be.herokuapp.com/login/validate/" + username + "/" + password, { responseType: 'text' });
  }
  public getbalance(accountId: string) {
    console.log(accountId);
    return this.http.get("https://pecunia-bank-be.herokuapp.com/balance/getAccountbyID/" + accountId, { responseType: 'json' });
  }

  public AddAccount(cus) {
    return this.http.post("https://pecunia-bank-be.herokuapp.com/AccountManagement/create", cus, { responseType: 'text' });
  }
  public ShowAccountDetails(accountId: string){
    return this.http.get("https://pecunia-bank-be.herokuapp.com/AccountManagement/find/" + accountId, { responseType: 'json' })
  }
  public UpdateAccount(accountId: string, customerName: string, contactNumber: string, address: string) {
    console.log("in service" + accountId);
    return this.http.put("https://pecunia-bank-be.herokuapp.com/AccountManagement/update/" + accountId + "/" + customerName + "/" + contactNumber + "/" + address, { responseType: 'text' });
  }
  public DeleteAccount(accountId: string) {
    return this.http.delete("https://pecunia-bank-be.herokuapp.com/AccountManagement/delete/" + accountId, { responseType: 'text' });
  }
  updatePassbook(accountId:string){
    return this.http.get("https://pecunia-bank-be.herokuapp.com/updatePassbook/"+accountId ,{responseType: 'json'});
  }
  accountSummary(accountId:string,StartDate:Date,EndDate:Date){
    return this.http.get("https://pecunia-bank-be.herokuapp.com/accountSummary/"+accountId+"/"+StartDate+"/"+EndDate ,{responseType: 'json'});
  }
  updateBal(updatebal: LoanDisbursal):any {
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
     return this.http.post("http://localhost:2004/loan/updateBal", updatebal,  { headers,responseType: 'text'});
   }
   getRequestsInitially(): Observable<LoanRequests[]> {
     //this function runs for first time
     return this.http.get<LoanRequests[]>("http://localhost:2004/loan/getAllRequests");
   }
   getApprovesInitially(accountId:string) {
     console.log(accountId);
     //this function runs for first time
     return this.http.get("http://localhost:2004/loan/approvedrequests/"+accountId);
   }
   getRejectsInitially(accountId:string): Observable<LoanDisbursal[]> {
     //this function runs for first time
     return this.http.get<LoanDisbursal[]>("http://localhost:2004/loan/rejectedrequests/"+accountId);
   }
   loanRequest(user: LoanRequests):any{   
    console.log(user);  
     const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
     return this.http.post("http://localhost:2004/loan/request", user,  {headers, responseType: 'text'});
   }
 
}
