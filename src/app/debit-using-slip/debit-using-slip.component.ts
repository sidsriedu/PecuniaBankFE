import { Component, OnInit } from '@angular/core';
import { slipTransactions, SlipServiceService } from '../slip-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginserviceService, account } from '../loginservice.service';
import { ServiceService } from '../service.service';
import { Customer } from '../Customer';

@Component({
  selector: 'app-debit-using-slip',
  templateUrl: './debit-using-slip.component.html',
  styleUrls: ['./debit-using-slip.component.css']
})
export class DebitUsingSlipComponent implements OnInit {

  slip: slipTransactions = new slipTransactions(0, "", "debit", "", null);
  slip1: slipTransactions = new slipTransactions(0, "", "debit", "", null);
  customer: Customer = {
    customerName: '', userName: '', contactNumber: '', aadharNumber: '', panNumber: '', dateOfBirth: '', gender: '', address: '',
    account: { accountId: '', branch: '', accountType: '', amount: 0, lastUpdated: null }
  };
  customer1: Customer = {
    customerName: '', userName: '', contactNumber: '', aadharNumber: '', panNumber: '', dateOfBirth: '', gender: '', address: '',
    account: { accountId: '', branch: '', accountType: '', amount: 0, lastUpdated: null }
  };
  accountNo: any;
  private router: Router;
  message: any;
  details: any;
  details1: any;

  constructor(private myservice: ServiceService, private service: SlipServiceService, router: Router, private route: ActivatedRoute, private accountservice: LoginserviceService) {
    this.router = router;

  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('accountNo');
    this.accountNo = id;
  }

  debit_using_slip(): void {
    if (this.slip.accountNo == this.accountNo) {
      if ((this.slip.amount <= 100) || (this.slip.amount >= 200000)) {
        alert("The amount to be debited should be between 100-200000");
      }
      else {
        this.myservice.ShowAccountDetails(this.slip.accountNo).subscribe((data) => {
          this.details = data;
          this.customer = this.details;
          if (this.customer.account.amount <= this.slip.amount) {
            alert("Sorry..! You have insufficient balance to debit...!");
          }
          else {
            this.service.debitusingslip(this.slip).subscribe((data) => {
              this.details1 = data;
              if (this.details1 == null) {
                alert("Transaction unsuccesfull");
              }
              else {
                this.myservice.ShowAccountDetails(this.slip.accountNo).subscribe((data) => {
                  this.details = data;
                  this.customer1 = this.details;
                  alert("Transaction succesfull......!");
                  this.router.navigate(['pecunia/employees/home', this.slip.accountNo, this.customer1.account.amount,this.customer1.userName]);
                });
              }
            });
          }
        });
      }


    }
    else {
      alert("Ooopps......! You haven't given your accountID");
    }

  }

}
