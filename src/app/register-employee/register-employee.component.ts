import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeeDto } from '../dto/EmployeeDto';
import { EmployeeServiceService } from '../services/employee-service.service';

@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.css']
})
export class RegisterEmployeeComponent implements OnInit {

  constructor(private employeeService : EmployeeServiceService, private router : Router) { }
  
  public employeeDto : EmployeeeDto ;
  public recievedEmployee : EmployeeeDto ;
  public flag : boolean = false;
  public errormsg : String ;

  ngOnInit(): void {
  }

  registerEmployee(form:any){
        
    let details=form.value;
    let eName = details.name;
    let ePhoneNumber = details.phone;
    let eEmail = details.email;
    let ePassword = details.password;
    this.employeeDto=new EmployeeeDto();
    this.employeeDto.eName = eName;
    this.employeeDto.ePhoneNumber = ePhoneNumber;
    this.employeeDto.eEmail = eEmail;
    this.employeeDto.ePassword = ePassword;
    this.flag=false;
   
    let result=this.employeeService.addEmployee(this.employeeDto); 
    result.subscribe((recievedEmployee:EmployeeeDto)=>{
      this.recievedEmployee=recievedEmployee;
      console.log(this.recievedEmployee);
      alert("Employee Registered Successfully......")
      this.router.navigate(['/pecunia/login']);
    },
    err=>{
      alert("Employee Already Exists with these credentials..")
      this.flag = true;
      console.log("err="+err);
      this.errormsg="User Already Exists!";
      console.log("Hello" + this.errormsg);

    } );
    form.reset();
      }

}
