import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { LoanDisbursal } from '../loan';
import { Router, ActivatedRoute } from '@angular/router';
import { Customer } from '../Customer';

@Component({
  selector: 'app-loanrejected',
  templateUrl: './loanrejected.component.html',
  styleUrls: ['./loanrejected.component.css']
})
export class LoanrejectedComponent implements OnInit {

  loanrejects:LoanDisbursal[];
  accountId: string;
  accountNo: string;
  customer: Customer = {
    customerName: '', userName: '', contactNumber: '', aadharNumber: '', panNumber: '', dateOfBirth: '', gender: '', address: '',
    account: { accountId: '', branch: '', accountType: '', amount: 0, lastUpdated: null }
  };
  accounts: any;
  constructor(private myservice: ServiceService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('accountNo');
    this.accountNo = id;
    this.getAllRejected();
    this.myservice.ShowAccountDetails(this.accountNo).subscribe((data) => {
      this.accounts = data;
      this.customer = this.accounts;
    });
  }
  getAllRejected() {
    this.myservice.getRejectsInitially(this.accountNo).subscribe((data)=>{
      this.loanrejects = data
  })
}
home() {
  this.router.navigate(['pecunia/employees/home', this.customer.account.accountId, this.customer.account.amount, this.customer.userName]);

}
}
