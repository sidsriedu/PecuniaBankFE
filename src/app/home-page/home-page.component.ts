import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { EmployeeServiceService } from '../services/employee-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private _employeeService : EmployeeServiceService, private _route: ActivatedRoute, private router : Router) { }

  username : string;

  ngOnInit(): void {
    
  }

}
