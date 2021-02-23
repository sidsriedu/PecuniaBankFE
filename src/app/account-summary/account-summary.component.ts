import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ServiceService } from '../service.service';
import { Transactions } from '../passbook';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account-summary',
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.css'],
  providers: [DatePipe]
})
export class AccountSummaryComponent implements OnInit {
  transactions: Transactions[];
  transac: any;
  accountId: string;
  StartDate: Date;
  EndDate: Date;
  message: string;
  result: any;
  myDate = new Date();
  date:any;
  isValidDate: boolean;

  constructor(private service: ServiceService,private route: ActivatedRoute, private router: Router, private datePipe: DatePipe) {
    this.date = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
  }
                                                                                                                    

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('accountNo');
    this.accountId = id;
  }


  summary() {
    this.isValidDate = this.validateDates(this.StartDate, this.EndDate);
    if (this.isValidDate) {
      this.service.ShowAccountDetails(this.accountId).subscribe((data) => {
        this.result = data;
        if (this.result != null) {
          this.service.accountSummary(this.accountId, this.StartDate, this.EndDate).subscribe((data) => {
            this.transac = data;
            this.transactions = this.transac;
            if (this.transac == 0) {
              alert("No Transactions Present!!");
            }
            else {
              this.router.navigate(['pecunia/employees/passbookresponse'], { queryParams: { accountId: this.accountId, transactions: JSON.stringify(this.transactions), } });
            }
          });

        }
        else {
          alert("No AccountId Present!!");
        }
      });

    }

  }
  validateDates(sDate: any, eDate: any): any {
    this.isValidDate = true;
    this.accountId=this.accountId;
    if ((sDate == null) || (eDate == null)||(this.accountId==null)) {
      this.isValidDate = false;
      alert("all fields are required");
    }
    else {
      if (((eDate) < (sDate))) {
        this.isValidDate = false;
        alert("End date should be greater then start date.")
      }
      else if (eDate > this.date) {
        alert("end date has exceeded todays date");
      }

      else {
        return this.isValidDate = true;
      }

    }

  }

}
