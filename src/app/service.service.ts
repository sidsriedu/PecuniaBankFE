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
    return this.http.get("http://localhost:8085/login/validate/" + username + "/" + password, { responseType: 'text' });
  }
  public getbalance(accountId: string) {
    console.log(accountId);
    return this.http.get("http://localhost:8085/balance/getAccountbyID/" + accountId, { responseType: 'json' });
  }

  public AddAccount(cus) {
    return this.http.post("http://localhost:8085/AccountManagement/create", cus, { responseType: 'text' });
  }
  public ShowAccountDetails(accountId: string){
    return this.http.get("http://localhost:8085/AccountManagement/find/" + accountId, { responseType: 'json' })
  }
  public UpdateAccount(accountId: string, customerName: string, contactNumber: string, address: string) {
    console.log("in service" + accountId);
    return this.http.put("http://localhost:8085/AccountManagement/update/" + accountId + "/" + customerName + "/" + contactNumber + "/" + address, { responseType: 'text' });
  }
  public DeleteAccount(accountId: string) {
    return this.http.delete("http://localhost:2001/AccountManagement/delete/" + accountId, { responseType: 'text' });
  }
  updatePassbook(accountId:string){
    return this.http.get("http://localhost:8085/passbook/updatePassbook/"+accountId ,{responseType: 'json'});
  }
  accountSummary(accountId:string,StartDate:Date,EndDate:Date){
    return this.http.get("http://localhost:8085/passbook/accountSummary/"+accountId+"/"+StartDate+"/"+EndDate ,{responseType: 'json'});
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
