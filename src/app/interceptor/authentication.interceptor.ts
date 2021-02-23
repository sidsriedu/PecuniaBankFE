import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(private _route:Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("Request Intercepted");
    let token = sessionStorage.getItem("authentication.token");
    console.log("Token is " + token);
    if(token){
      request = request.clone(
        {
          setHeaders : {
            Authorization : token
          }
        }
      )
    }else if(request.url.includes("/login") || request.url.includes("/forgotPassword") || request.url.includes("/register")){
      console.log(request.url.includes("/pecunia/login"))
      console.log(request.url.includes("/pecunia/register"))
      console.log(request.url.includes("/pecunia/forgotPassword"))
      console.log("Hello")
      console.log(request.url);
      // alert("Unautorized");
    }else{
      alert("Unauthorized");
      console.log("After else unauthorized");
      this._route.navigate(['/pecunia/login']);
      console.log("Hello uncle")
    }
    return next.handle(request);
  }
}
