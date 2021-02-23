import { Component, OnInit } from '@angular/core';
import { LoanRequests } from '../loan';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';
import { Customer } from '../Customer';

@Component({
  selector: 'app-loanrequest',
  templateUrl: './loanrequest.component.html',
  styleUrls: ['./loanrequest.component.css']
})
export class LoanrequestComponent implements OnInit {

  message: any;
  req: LoanRequests = { accountId: "", loanAmount: null, loanTenure: null, creditScore: null, loanRoi: null, loanStatus: "", loanType: "", loanId: null }
  accountNo: any;
  result: any;
  customer: Customer = {
    customerName: '', userName: '', contactNumber: '', aadharNumber: '', panNumber: '', dateOfBirth: '', gender: '', address: '',
    account: { accountId: '', branch: '', accountType: '', amount: 0, lastUpdated: null }
  };


  constructor(private service: ServiceService, private route: ActivatedRoute, private router: Router) { }
  loans = ['Study Loan', 'Car Loan', 'House Loan']

  public loanRequest(): any {
    this.req.loanStatus = "pending";
    if (this.accountNo != this.req.accountId) {
      alert("Improper Account no.");
    }
    else {
      this.service.loanRequest(this.req).subscribe((data) => {
        this.message = data
        alert(this.message);
        this.service.ShowAccountDetails(this.accountNo).subscribe((data) => {
          this.result = data;
          this.customer=this.result;
          this.router.navigate(['pecunia/employees/home', this.customer.account.accountId, this.customer.account.amount,this.customer.userName]);

        });
      });
    }

  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('accountNo');
    this.accountNo = id;
  }

}
