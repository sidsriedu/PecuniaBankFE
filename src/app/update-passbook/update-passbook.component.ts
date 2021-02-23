import { Component, OnInit } from '@angular/core';
import { Transactions } from '../passbook';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-update-passbook',
  templateUrl: './update-passbook.component.html',
  styleUrls: ['./update-passbook.component.css']
})
export class UpdatePassbookComponent implements OnInit {

  transactions: Transactions[];
  account: Account;
  transac: any;
  accountId: string;
  message: string
  result: any;
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
  }
  update() {
    this.service.ShowAccountDetails(this.accountId).subscribe((data) => {
      this.result = data;
      console.log(this.result);
      if (this.result!= null) {
        this.service.updatePassbook(this.accountId).subscribe((data) => {
          this.transac = data;
          this.transactions = this.transac;
          console.log('transactions', this.transactions);
          if (this.transac == 0) {
            alert("No transactions Present!!");
          }
          else {
            this.router.navigate(['pecunia/employees/passbookresponse'], { queryParams: { accountId: this.accountId, transactions: JSON.stringify(this.transactions) } });
          }
        });
      }
      else {
        alert("No AccountId Present!!");
      }
    });
  }
}
