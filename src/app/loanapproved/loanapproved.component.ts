import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { LoanDisbursal } from '../loan';
import { Router, ActivatedRoute } from '@angular/router';
import { Customer } from '../Customer';

@Component({
  selector: 'app-loanapproved',
  templateUrl: './loanapproved.component.html',
  styleUrls: ['./loanapproved.component.css']
})
export class LoanapprovedComponent implements OnInit {

  loandisbursals: LoanDisbursal[];
  message: any;
  accountNo: string;
  customer: Customer = {
    customerName: '', userName: '', contactNumber: '', aadharNumber: '', panNumber: '', dateOfBirth: '', gender: '', address: '',
    account: { accountId: '', branch: '', accountType: '', amount: 0, lastUpdated: null }
  };
  accounts: any;
  loan: any
  constructor(private myservice: ServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('accountNo');
    this.accountNo = id;
    this.customer.account.accountId = this.accountNo;
    this.getAllApproved();
    this.myservice.ShowAccountDetails(this.accountNo).subscribe((data) => {
      this.accounts = data;
      this.customer = this.accounts;
    });
  }

  getAllApproved() {
    this.myservice.getApprovesInitially(this.customer.account.accountId).subscribe((data) => {
      this.loan = data;
      this.loandisbursals = this.loan;
    });
  }
  updateBal(updatebal: LoanDisbursal) {

    this.myservice.updateBal(updatebal).subscribe(data => {
      this.message = data
      alert(this.message);
    });
  }
  home() {
    this.router.navigate(['pecunia/employees/home', this.customer.account.accountId, this.customer.account.amount, this.customer.userName]);

  }

}
