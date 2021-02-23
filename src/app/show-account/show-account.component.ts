import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Customer } from '../Customer';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-account',
  templateUrl: './show-account.component.html',
  styleUrls: ['./show-account.component.css']
})
export class ShowAccountComponent implements OnInit {
  customer: Customer = {
    customerName: '', userName: '', contactNumber: '', aadharNumber: '', panNumber: '', dateOfBirth: '', gender: '', address: '',
    account: { accountId: '', branch: '', accountType: '', amount: 0, lastUpdated: null }
  };
  accounts: any;
  accountId: string;
  check: boolean = true;
  accountNo: string;
  constructor(private service: ServiceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('accountNo');
    this.accountNo = id;
    this.service.ShowAccountDetails(this.accountNo).subscribe((data) => {
      this.accounts = data;
      this.customer = this.accounts;
      console.log('customer:', this.customer);
      if (this.customer == null) {
        alert("no accountId");
      }
      else {
        this.check = true;
        console.log(this.customer.account.accountId);


      }


    });
  }

  fetch() {

  }
  home() {
    this.router.navigate(['pecunia/employees/home', this.customer.account.accountId, this.customer.account.amount,this.customer.userName]);
 
  }

}
