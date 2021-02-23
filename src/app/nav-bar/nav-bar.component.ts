import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeServiceService } from '../services/employee-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private _employeeService : EmployeeServiceService, private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
    console.log("Hello Inside ngOnInit nav-bar");
    this._employeeService.authentication().subscribe(
      success =>{
        console.log("Hello Fraands");
        this.router.navigate(['home'],{relativeTo:this.route});
      },
      error=>{
        console.log(sessionStorage.getItem('authentication.token'));
        if(sessionStorage.getItem('authentication.token')){
          alert("Unauthorized Hello");
          this.router.navigate(['pecunia/login']);
        }
      }
    );
    
  }

  changePassword(){
    console.log("Inside you never...");
    this.router.navigate(["/pecunia/employees/changePassword"]);
  }

  home(){
    console.log("Inside you never...");
    this.router.navigate(["/pecunia/employees/home"]);
  }

  customerManagement(){
    console.log("Inside you never...");
    this.router.navigate(["/pecunia/employees/account"]);
  }

  logout(){
    console.log("Hello1");
    this._employeeService.logoutEmployee();
    this.router.navigate(['/pecunia/login']);
  }

}
