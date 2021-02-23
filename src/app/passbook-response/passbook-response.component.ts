import { Component, OnInit } from '@angular/core';
import { Transactions } from '../passbook';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../Customer';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-passbook-response',
  templateUrl: './passbook-response.component.html',
  styleUrls: ['./passbook-response.component.css']
})
export class PassbookResponseComponent implements OnInit {

   public Id;
  public transacs: Transactions[];
  customer: Customer = {
    customerName: '', userName: '', contactNumber: '', aadharNumber: '', panNumber: '', dateOfBirth: '', gender: '', address: '',
    account: { accountId: '', branch: '', accountType: '', amount: 0, lastUpdated: null }
  };
  accounts: any;
  constructor(private route:ActivatedRoute, private router: Router,private service: ServiceService,) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe( params => {
      this.Id=params.accountId;
      this.transacs = JSON.parse(params.transactions);
      this.service.ShowAccountDetails(this.Id).subscribe((data) => {
        this.accounts = data;
        this.customer = this.accounts;});
    });
  }

  home() {
    this.router.navigate(['pecunia/employees/home', this.customer.account.accountId, this.customer.account.amount,this.customer.userName]);

  }
}
