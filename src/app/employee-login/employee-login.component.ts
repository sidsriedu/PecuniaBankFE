import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeeDto } from '../dto/EmployeeDto';
import { TokenDto } from '../dto/TokenDto';
import { EmployeeServiceService } from '../services/employee-service.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {

  token : TokenDto ;

  employeeDto : EmployeeeDto ;

  public flag : boolean = false;
  
  public errormsg : String ;

  constructor(private _employeeService :  EmployeeServiceService, private _route: Router,private route : ActivatedRoute) { }

  ngOnInit(): void {
    sessionStorage.removeItem('authentication.token');
  }

  employeeLogin(  form : any ){

        console.log("Inside login component");
        let details=form.value;
        let eUsername = details.username;
        let ePassword = details.password;
        this.employeeDto=new EmployeeeDto();
        this.employeeDto.eUsername = eUsername;
        this.employeeDto.ePassword = ePassword;
        this.flag=false;
       
        let result=this._employeeService.loginEmployee(this.employeeDto); 
        result.subscribe(
          success=>{
            console.log(success.token);
            sessionStorage.setItem('authentication.token',success.token);
            console.log(eUsername);
            this._route.navigate(['pecunia/employees/home']);
          },
        err=>{
          // this.flag = true;
          // console.log("err="+err);
          // this.errormsg="User Already Exists!";
          // console.log("Hello" + this.errormsg);
          console.log("err = "+err);
          alert("Invalid Username / Password");
          this._route.navigate(['pecunia/login']);
        } );
        form.reset();
  }

}
