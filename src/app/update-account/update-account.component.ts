import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Customer } from '../Customer';
import { Router, ActivatedRoute } from '@angular/router';
import { account } from '../loginservice.service';

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.css']
})
export class UpdateAccountComponent implements OnInit {

  customer: Customer = {
    customerName: '', userName: '', contactNumber: '', aadharNumber: '', panNumber: '', dateOfBirth: '', gender: '', address: '',
    account: { accountId: '', branch: '', accountType: '', amount: 0, lastUpdated: null }
  };
  customer1: Customer = {
    customerName: '', userName: '', contactNumber: '', aadharNumber: '', panNumber: '', dateOfBirth: '', gender: '', address: '',
    account: { accountId: '', branch: '', accountType: '', amount: 0, lastUpdated: null }
  };
  result: string;
  result1: any
  accountNo: string;
  accounts: any;
  check: boolean;

  constructor(private service: ServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('accountNo');
    this.accountNo = id;
  }
  updateAccount() {
    this.service.ShowAccountDetails(this.accountNo).subscribe((data) => {
      this.accounts = data;
      this.customer1 = this.accounts;
      console.log('customer:', this.customer);
      if (this.customer == null) {
        alert("no accountId");
      }
      else {
        this.check = true;
        console.log(this.customer.account.accountId);
      }
    });
    if (this.accountNo != this.customer.account.accountId) {
      alert("Invalid Account no.");
    }
    else {
      this.service.UpdateAccount(this.customer.account.accountId, this.customer.customerName, this.customer.contactNumber, this.customer.address)
        .subscribe((data) =>
          this.result1 = data,error=>this.result1= JSON.parse(error.error).message);
      alert("Account updated successfully");
     
    }
    this.router.navigate(['pecunia/employees/home', this.customer.account.accountId, this.customer1.account.amount,this.customer1.userName]);
  }
}
