
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-public-nav-bar',
  templateUrl: './public-nav-bar.component.html',
  styleUrls: ['./public-nav-bar.component.css']
})
export class PublicNavBarComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
    this.router.navigate(['pecunia/login']);
  }

  login(){
    console.log("Inside you never...");
    this.router.navigate(["/pecunia/login"]);
  }

  register(){
    console.log("Inside you never...");
    this.router.navigate(["/pecunia/register"]);
  }

  forgotPassword(){
    console.log("Inside you never...");
    this.router.navigate(["/pecunia/forgotPassword"]);
  }


}
