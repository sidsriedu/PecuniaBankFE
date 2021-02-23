import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { EmployeeeDto } from '../dto/EmployeeDto';
import { Observable } from 'rxjs';
import { TokenDto } from '../dto/TokenDto';
import { MessageDto } from '../dto/MessageDto';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  

  baseEmployeeUrl="http://localhost:8085/employees";

  constructor(private client:HttpClient ){  }

  addEmployee(employee:EmployeeeDto): Observable<EmployeeeDto>{
    console.log(employee);
    let url=this.baseEmployeeUrl+"/register";

    let result:Observable<EmployeeeDto>= this.client.post<EmployeeeDto>(url,employee);
    console.log(result);
    return result;
  }

  loginEmployee(employee:EmployeeeDto): Observable<TokenDto>{
    console.log(employee);
    let url=this.baseEmployeeUrl+"/login";
    console.log("Inside login service");
    let result:Observable<TokenDto>= this.client.post<TokenDto>(url,employee);
    console.log("returned data from server side");
    return result;
  }

  forgotPasswordEmployee(employee:EmployeeeDto): Observable<EmployeeeDto>{
    console.log(employee);
    let url=this.baseEmployeeUrl+"/forgotPassword";

    let result:Observable<EmployeeeDto>= this.client.put<EmployeeeDto>(url,employee);
    console.log(result);
    return result;
  }

  changePasswordEmployee(employee:EmployeeeDto): Observable<MessageDto>{
    console.log(employee);
    let url=this.baseEmployeeUrl+"/changePassword";

    let result:Observable<MessageDto>= this.client.put<MessageDto>(url,employee);
    console.log(result);
    return result;
  }

  

  authentication() {
    console.log("Inside Authentication In Employee Service");
    let url=this.baseEmployeeUrl+"/authentication";
    let result:Observable<MessageDto>= this.client.get<MessageDto>(url);
    console.log("Inside Authentication in service and result is "+result);
    return result;
  }

  logoutEmployee() {
    console.log("HEllo2");
   sessionStorage.removeItem('authentication.token');
  }

  getUsername(): string {
    let token  = sessionStorage.getItem('authentication.token');
    let splitToken = token.split(',');
    let reversedUsername = splitToken[0];
    let tokenUsername = reversedUsername.split('').reverse().join('');
    return tokenUsername;
  }
}
