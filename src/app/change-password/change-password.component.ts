import { Component, OnInit } from '@angular/core';
import { EmployeeeDto } from '../dto/EmployeeDto';
import { EmployeeServiceService } from '../services/employee-service.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  //route : ActivatedRoute ;

  //employeeService : EmployeeServiceService ;

  employeeDto : EmployeeeDto ;

  public flag : boolean = false;

  public errormsg : String ;

  public eUsername : string ;

  constructor(private employeeService :  EmployeeServiceService,private route : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
  //   this.route.paramMap.subscribe((params : ParamMap) => {
  //     this.eUsername = params.get('username');
  // });
  // this.employeeService.authentication().subscribe(
  //   success =>{
  //     console.log("Hello Fraands");
  //     this.router.navigate(['/employees/changePassword']);
  //   },
  //   error=>{
  //     console.log(sessionStorage.getItem('authentication.token'));
  //     if(sessionStorage.getItem('authentication.token')){
  //       alert("Unauthorized Hello");
  //       this.router.navigate(['employees/login']);
  //     }
  //   }
  // );

  }

  changePassword(  form : any ){
        let details=form.value;
        //let eUsername = this.route.snapshot.paramMap.get('username');
        this.eUsername= this.employeeService.getUsername();
        let eOldPassword = details.oPassword;
        let ePassword = details.nPassword;
        //console.log(eUsername);
        // this.route.paramMap.subscribe((params : ParamMap) => {
        //   this.eUsername = params.get('username');
        // });
        this.employeeDto=new EmployeeeDto();
        this.employeeDto.eUsername = this.eUsername;
        this.employeeDto.eOldPassword = eOldPassword;
        this.employeeDto.ePassword = ePassword;
        this.flag=false;
       
        let result=this.employeeService.changePasswordEmployee(this.employeeDto); 
        result.subscribe(
          success=>{
            alert("Password Updated Successfully");
            this.employeeService.logoutEmployee();
            this.router.navigate(['/pecunia/login']);
        },
        err=>{
          this.flag = true;
          console.log("err="+err);
          alert("Invalid Credentials");

        } );
        form.reset();
  }

}
