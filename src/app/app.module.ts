import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from "@angular/core";
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { DebitUsingChequeComponent } from './debit-using-cheque/debit-using-cheque.component';
import { CreditUsingChequeComponent } from './credit-using-cheque/credit-using-cheque.component';
import { CreditUsingSlipComponent } from './credit-using-slip/credit-using-slip.component';
import { DebitUsingSlipComponent } from './debit-using-slip/debit-using-slip.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { ShowAccountComponent } from './show-account/show-account.component';
import { UpdateAccountComponent } from './update-account/update-account.component';
import { UpdatePassbookComponent } from './update-passbook/update-passbook.component';
import { AccountSummaryComponent } from './account-summary/account-summary.component';
import { PassbookResponseComponent } from './passbook-response/passbook-response.component';
import { LoanrequestComponent } from './loanrequest/loanrequest.component';
import { LoanapprovedComponent } from './loanapproved/loanapproved.component';
import { LoanrejectedComponent } from './loanrejected/loanrejected.component';
import { GetAllloanRequestsComponent } from './get-allloan-requests/get-allloan-requests.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/Button';

import {  HTTP_INTERCEPTORS } from '@angular/common/http';

import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { RegisterEmployeeComponent } from './register-employee/register-employee.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EmployeeServiceService } from './services/employee-service.service';
import { AuthenticationInterceptor } from './interceptor/authentication.interceptor';
import { AuthorizationCheck } from './services/authorization-check.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PublicNavBarComponent } from './public-nav-bar/public-nav-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DebitUsingChequeComponent,
    CreditUsingChequeComponent,
    CreditUsingSlipComponent,
    DebitUsingSlipComponent,
    AccountDetailsComponent,
    AddAccountComponent,
    DeleteAccountComponent,
    ShowAccountComponent,
    UpdateAccountComponent,
    UpdatePassbookComponent,
    AccountSummaryComponent,
    PassbookResponseComponent,
    LoanrequestComponent,
    LoanapprovedComponent,
    LoanrejectedComponent,
    GetAllloanRequestsComponent,
    EmployeeLoginComponent,
    RegisterEmployeeComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    HomePageComponent,
    NavBarComponent,
    PublicNavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatCardModule,
    MatButtonModule
      ],
 
      providers: [
        {
          provide : HTTP_INTERCEPTORS,
          useClass : AuthenticationInterceptor,
          multi : true
        },
        AuthorizationCheck
      ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
