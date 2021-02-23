import { Component, OnInit } from '@angular/core';
import { slipTransactions, SlipServiceService } from '../slip-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { account, LoginserviceService } from '../loginservice.service';
import { Customer } from '../Customer';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-credit-using-slip',
  templateUrl: './credit-using-slip.component.html',
  styleUrls: ['./credit-using-slip.component.css']
})
export class CreditUsingSlipComponent implements OnInit {

  slip: slipTransactions = new slipTransactions(0, "", "credit", "", null);
  customer: Customer = {
    customerName: '', userName: '', contactNumber: '', aadharNumber: '', panNumber: '', dateOfBirth: '', gender: '', address: '',
    account: { accountId: '', branch: '', accountType: '', amount: 0, lastUpdated: null }
  };
  accountNo: any;
  private router: Router;
  message: any;
  details: any;
  details1: any;

  constructor(private service: SlipServiceService,private myservice: ServiceService, router: Router, private route: ActivatedRoute, private accountservice: LoginserviceService) {
    this.router = router;

  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('accountNo');
    this.accountNo = id;
  }

  credit_using_slip() {
    if (this.slip.accountNo == this.accountNo) {
      if (this.slip.amount <= 100 || this.slip.amount >= 200000) {
        alert("The amount to be credited should be between 100-200000");
      }
      else {
        this.service.creditusingslip(this.slip).subscribe((data) => {
          this.message = data;
          this.details1 = this.message;
          if (this.details1 == null) {
            alert("Transaction unsuccesfull");
          }
          else {
            this.myservice.ShowAccountDetails(this.slip.accountNo).subscribe((data) => {
              this.details = data;
              this.customer = this.details;
              alert("Transaction succesfull");
              this.router.navigate(['pecunia/employees/home', this.slip.accountNo, this.customer.account.amount, this.customer.userName]);
            });
          }
        });
      }
    }
    else {
      alert("the Payee Account field should contain your accountId only");
    }
  }

}
