import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';

@Injectable()
export class AuthorizationCheck implements CanActivate {

 constructor(private router: Router, private _route: ActivatedRoute) { }

 canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
 //If token data exist, user may login to application
 if (sessionStorage.getItem('authentication.token')) {
    let username = this._route.snapshot.paramMap.get('username');
    let token  = sessionStorage.getItem('authentication.token');
    let splitToken = token.split(',');;
    let reversedUsername = splitToken[0];
    let tokenUsername = reversedUsername.split('').reverse().join('');
    console.log(username);
    console.log(tokenUsername);
    if(username === tokenUsername){
        return true;
    }
    return false;
 }

 // otherwise redirect to login page with the return url
 this.router.navigate(['employees/login']);
 return false;
 }
}