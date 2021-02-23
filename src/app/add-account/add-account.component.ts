import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Customer } from '../Customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {
  account:Account[];
  customer:Customer={customerName:'',userName:'',contactNumber:'',aadharNumber:'',panNumber:'', dateOfBirth:'', gender:'',address:'',
   account: {accountId :'', branch:'',accountType:'', amount:0 ,lastUpdated:null}};
    
  constructor(private service:ServiceService,private router: Router) { }

  ngOnInit(): void {
  }

  AddAccount():void{
    this.service.AddAccount(this.customer)
          .subscribe( data => {
            alert("Your Account was created successfully");
            this.router.navigate(['pecunia/employees/account']);
          });
        }

}
