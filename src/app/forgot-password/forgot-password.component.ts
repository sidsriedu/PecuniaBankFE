import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeeDto } from '../dto/EmployeeDto';
import { EmployeeServiceService } from '../services/employee-service.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {


  employeeDto : EmployeeeDto ;

  recievedEmployee : EmployeeeDto ;

  public flag : boolean = false;
  
  public errormsg : String ;

  constructor(private employeeService :  EmployeeServiceService, private _router : Router) { }

  ngOnInit(): void {
  }

  forgotPassword(  form : any ){
        let details=form.value;
        let eUsername = details.username;
        let ePhoneNumber = details.phone;
        let eEmail = details.email;
        let ePassword = details.nPassword;
        this.employeeDto=new EmployeeeDto();
        this.employeeDto.eUsername = eUsername;
        this.employeeDto.ePhoneNumber = ePhoneNumber;
        this.employeeDto.eEmail = eEmail;
        this.employeeDto.ePassword = ePassword;
        this.recievedEmployee=null;
        this.flag=false;
       
        let result=this.employeeService.forgotPasswordEmployee(this.employeeDto); 
        result.subscribe((recievedEmployee:EmployeeeDto)=>{
          alert("Password Updated Successfully");
          this._router.navigate(['/pecunia/login']);
          
        },
        err=>{
          alert("Invalid Credentials!");
        } );
        form.reset();
  }

}
