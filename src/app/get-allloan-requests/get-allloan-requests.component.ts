import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { LoanRequests } from '../loan';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-allloan-requests',
  templateUrl: './get-allloan-requests.component.html',
  styleUrls: ['./get-allloan-requests.component.css']
})
export class GetAllloanRequestsComponent implements OnInit {

  loanrequests:LoanRequests[];
  accountNo: string;
  constructor(private myservice: ServiceService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.getAllRequests();
    let id = this.route.snapshot.paramMap.get('accountNo');
    this.accountNo = id;
  }
  getAllRequests() {
    //adding loans or getting data of loans
    this.myservice.getRequestsInitially().subscribe((data)=>{this.loanrequests=data})
   
  }

}
