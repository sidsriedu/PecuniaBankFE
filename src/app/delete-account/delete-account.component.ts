import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Customer } from '../Customer';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.css']
})
export class DeleteAccountComponent implements OnInit {
  account: Account[];
  customer: Customer = {
    customerName: '', userName: '', contactNumber: '', aadharNumber: '', panNumber: '', dateOfBirth: '', gender: '', address: '',
    account: { accountId: '', branch: '', accountType: '', amount: 0, lastUpdated: null }
  };
  customer1: Customer = {
    customerName: '', userName: '', contactNumber: '', aadharNumber: '', panNumber: '', dateOfBirth: '', gender: '', address: '',
    account: { accountId: '', branch: '', accountType: '', amount: 0, lastUpdated: null }
  };
  accountId: string;
  accounts: any;
  accountNo: string;
  constructor(private service: ServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    let id = this.route.snapshot.paramMap.get('accountNo');
    this.accountNo = id;
  }
  DeleteAccount(): void {

    if (this.accountId !== this.accountNo) {
      alert("no accountId");
    }
    else
      this.service.DeleteAccount(this.accountId)
        .subscribe(data => {
          alert("Account deleted successfully.");
          this.router.navigate(['pecunia/employees/account']);
        });
  }
}

