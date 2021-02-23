import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { chequeTransactions, ChequeServiceService } from '../cheque-service.service';
import { account, LoginserviceService } from '../loginservice.service';
import { Customer } from '../Customer';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-credit-using-cheque',
  templateUrl: './credit-using-cheque.component.html',
  styleUrls: ['./credit-using-cheque.component.css']
})
export class CreditUsingChequeComponent implements OnInit {


  cheque: chequeTransactions = new chequeTransactions(0, "", "credit", 0, "", "", "", null, "", "", null);
  customer: Customer = {
    customerName: '', userName: '', contactNumber: '', aadharNumber: '', panNumber: '', dateOfBirth: '', gender: '', address: '',
    account: { accountId: '', branch: '', accountType: '', amount: 0, lastUpdated: null }
  };
  private router: Router;
  accountNo: any;
  details: any;
  message: any;
  myDate = new Date();
  result: any;
  
  constructor(private myservice: ServiceService,private service: ChequeServiceService, private route: ActivatedRoute, router: Router, private accountservice: LoginserviceService) {
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
 

  credit_using_cheque() {
    this.result = this.numberofdays(this.cheque.issueDate, this.myDate);
    console.log(this.result);
    if (this.result >= 90) {
      alert("check has been  expired ")
    }
    else if(this.result ==0)
    {
      alert("Improper date");
    }
    else {
      if ((this.cheque.payeeAccountNo == this.accountNo)&&(this.cheque.payeeAccountNo!==this.cheque.recipientAccountNo)) {
        if (this.cheque.amount <= 100 || this.cheque.amount >= 200000) {
          alert("The amount to be credited should be between 100-200000");
        }
        else {
          this.service.creditusingcheque(this.cheque).subscribe((data) => {
            this.message = data;
            if (this.message == null) {
              alert("Transaction unsuccesfull");
            }
            else {
              this.myservice.ShowAccountDetails(this.cheque.payeeAccountNo).subscribe((data) => {
                this.details = data;
                this.customer = this.details;
                alert("Transaction succesfull");
                this.router.navigate(['pecunia/employees/home', this.cheque.payeeAccountNo, this.customer.account.amount,this.customer.userName]);
              });
            }
          });
        }
      }
      else {
        alert("Provide proper account ID's");
      }

    }
  }
}
