import { Component, OnInit } from '@angular/core';
import {  account } from '../loginservice.service';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { Customer } from '../Customer';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {
  customer:Customer={customerName:'',userName:'',contactNumber:'',aadharNumber:'',panNumber:'', dateOfBirth:'', gender:'',address:'',
  account: {accountId :'', branch:'',accountType:'', amount:0,lastUpdated:null}};
 
  router: Router;
  details1: Object;
  Account1: any;
  accountId:string;
  constructor(private service: ServiceService, router: Router) {
    this.router = router;

  }
  ngOnInit(): void {
  }

  accountValidatiion() {
    this.service.ShowAccountDetails(this.accountId).subscribe((data) => {
      this.details1 = data;
      this.Account1 = this.details1;
      if ((this.Account1)==null) {
        alert("AccountId does not exists!");
      }
      else {
      this.customer=this.Account1;
        this.router.navigate(['pecunia/employees/home', this.customer.account.accountId, this.customer.account.amount, this.customer.userName]);
      }
    });
  }

  AddAccount(){
    this.router.navigate(['pecunia/employees/addaccount']);
  }
}
