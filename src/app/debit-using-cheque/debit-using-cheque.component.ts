import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { chequeTransactions, ChequeServiceService } from '../cheque-service.service';
import { LoginserviceService, account } from '../loginservice.service';
import { Customer } from '../Customer';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-debit-using-cheque',
  templateUrl: './debit-using-cheque.component.html',
  styleUrls: ['./debit-using-cheque.component.css']
})
export class DebitUsingChequeComponent implements OnInit {

  cheque: chequeTransactions = new chequeTransactions(0, "", "debit", 0, "", "", "self", null, "Pecunia_Bank", "", null);
  customer: Customer = {
    customerName: '', userName: '', contactNumber: '', aadharNumber: '', panNumber: '', dateOfBirth: '', gender: '', address: '',
    account: { accountId: '', branch: '', accountType: '', amount: 0, lastUpdated: null }
  };
  customer1: Customer = {
    customerName: '', userName: '', contactNumber: '', aadharNumber: '', panNumber: '', dateOfBirth: '', gender: '', address: '',
    account: { accountId: '', branch: '', accountType: '', amount: 0, lastUpdated: null }
  };
  private router: Router;
  accountNo: any;
  details: any;
  message: any;
  myDate = new Date();
  result: any;

  constructor(private myservice: ServiceService, private service: ChequeServiceService, private route: ActivatedRoute, router: Router, private accountservice: LoginserviceService) {
    this.router = router;
  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('accountNo');
    this.accountNo = id;
  }

  numberofdays = (startDate, endDate) => {
    const start = new Date(startDate) //clone
    const end = new Date(endDate) //clone
    let dayCount = 0;
    while (end > start) {
      dayCount++
      start.setDate(start.getDate() + 1)
    }
    return dayCount
  }

  debit_using_cheque(): void {
    this.result = this.numberofdays(this.cheque.issueDate, this.myDate);
    if (this.result >= 90) {
      alert("check has been  expired ")
    }
    else if (this.result == 0) {
      alert("Improper date");
    }
    else {
      if (this.cheque.payeeAccountNo == this.accountNo) {
        if (this.cheque.amount <= 100 || this.cheque.amount >= 200000) {
          alert("The amount to be debited should be between 100-200000");
        }
        else {
          this.myservice.ShowAccountDetails(this.cheque.payeeAccountNo).subscribe((data) => {
            this.details = data;
            this.customer = this.details;

            if (this.customer.account.amount <= this.cheque.amount) {
              alert("Sorry..! You have insufficient balance to debit...!");
            }
            else {
              this.service.debitusingcheque(this.cheque).subscribe((data) => {
                this.message = data;

                if (this.message == null) {
                  alert("Transaction unsuccesfull");
                }
                else {
                  this.myservice.ShowAccountDetails(this.cheque.payeeAccountNo).subscribe((data) => {
                    this.details = data;
                    this.customer1 = this.details;
                    alert("Transaction succesfull");
                    this.router.navigate(['pecunia/employees/home', this.cheque.payeeAccountNo, this.customer1.account.amount, this.customer1.userName]);
                  });
                }
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

}
