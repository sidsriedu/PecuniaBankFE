import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Transactions } from '../passbook';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public balance;
  accountNo: any;
  private router: Router;
  name: string;


  transactions: Transactions[];
  account: Account;
  transac: any;
  accountId: string;
  message: string
  result: any;

  constructor(private service: ServiceService, private route: ActivatedRoute, router: Router) {
    this.router = router;
  }

  ngOnInit(): void {

    let id = this.route.snapshot.paramMap.get('accountNo');
    let bal = this.route.snapshot.paramMap.get('balance');
    let name = this.route.snapshot.paramMap.get('customername');
    this.balance = bal;
    this.accountNo = id;
    this.name = name;
  }
  debitusingslip() {
    this.router.navigate(['pecunia/employees/debitusingslip', this.accountNo]);
  }
  debitusingcheque() {
    this.router.navigate(['pecunia/employees/debitusingcheque', this.accountNo]);
  }
  creditusingslip() {
    this.router.navigate(['pecunia/employees/creditusingslip', this.accountNo]);
  }
  creditusingcheque() {
    this.router.navigate(['pecunia/employees/creditusingcheque', this.accountNo]);
  }
  updatepassbook() {
    this.accountId= this.accountNo;
    this.service.ShowAccountDetails(this.accountId).subscribe((data) => {
      this.result = data;
      console.log(this.result);
      if (this.result != null) {
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

  accountsummary() {
    this.router.navigate(['pecunia/employees/accountsummary', this.accountNo]);
  }
  loanrequest() {
    this.router.navigate(['pecunia/employees/loanrequest', this.accountNo]);
  }
  loanaccepted() {
    this.router.navigate(['pecunia/employees/loanapproved', this.accountNo]);
  }
  loanrejected() {
    this.router.navigate(['pecunia/employees/loanrejected', this.accountNo]);
  }
  deleteaccount() {
    this.router.navigate(['pecunia/employees/deleteaccount', this.accountNo]);
  }
  updateaccount() {
    this.router.navigate(['pecunia/employees/updateaccount', this.accountNo]);
  }
  viewaccount() {
    this.router.navigate(['pecunia/employees/showaccount', this.accountNo]);
  }
}
