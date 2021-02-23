import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DebitUsingChequeComponent } from './debit-using-cheque/debit-using-cheque.component';
import { CreditUsingChequeComponent } from './credit-using-cheque/credit-using-cheque.component';
import { DebitUsingSlipComponent } from './debit-using-slip/debit-using-slip.component';
import { CreditUsingSlipComponent } from './credit-using-slip/credit-using-slip.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { ShowAccountComponent } from './show-account/show-account.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { UpdateAccountComponent } from './update-account/update-account.component';
import { AccountSummaryComponent } from './account-summary/account-summary.component';
import { PassbookResponseComponent } from './passbook-response/passbook-response.component';
import { UpdatePassbookComponent } from './update-passbook/update-passbook.component';
import { LoanrequestComponent } from './loanrequest/loanrequest.component';
import { GetAllloanRequestsComponent } from './get-allloan-requests/get-allloan-requests.component';
import { LoanapprovedComponent } from './loanapproved/loanapproved.component';
import { LoanrejectedComponent } from './loanrejected/loanrejected.component';

import { ChangePasswordComponent } from './change-password/change-password.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PublicNavBarComponent } from './public-nav-bar/public-nav-bar.component';
import { RegisterEmployeeComponent } from './register-employee/register-employee.component';
import { AuthorizationCheck } from './services/authorization-check.service';


const routes: Routes = [

  {path:'', redirectTo:'pecunia/login', pathMatch:'full'},
  {path:"pecunia",component : PublicNavBarComponent,
    children : [
      {path:"login",component : EmployeeLoginComponent},
      {path:"register",component : RegisterEmployeeComponent},
      {path:"forgotPassword",component : ForgotPasswordComponent},
    ]
  },

  {
    path:"pecunia/employees",component : NavBarComponent,
    children :[
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      {path:'home',component : HomePageComponent},
      {path:"changePassword",component : ChangePasswordComponent},
      { path: 'account', component: AccountDetailsComponent },
      { path: 'home/:accountNo/:balance/:customername', component: HomeComponent },
      { path: 'debitusingcheque/:accountNo', component: DebitUsingChequeComponent },
      { path: 'creditusingcheque/:accountNo', component: CreditUsingChequeComponent },
      { path: 'debitusingslip/:accountNo', component: DebitUsingSlipComponent },
      { path: 'creditusingslip/:accountNo', component: CreditUsingSlipComponent },
      { path: 'addaccount', component: AddAccountComponent },
      { path: 'showaccount/:accountNo', component: ShowAccountComponent },
      { path: 'deleteaccount/:accountNo', component: DeleteAccountComponent },
      { path: 'updateaccount/:accountNo', component: UpdateAccountComponent },
      { path: 'accountsummary/:accountNo', component: AccountSummaryComponent },
      { path: 'passbookresponse', component: PassbookResponseComponent},
      { path: 'updatepassbook/:accountNo', component: UpdatePassbookComponent},
      { path: 'loanrequest/:accountNo', component: LoanrequestComponent},
      { path: 'getAllLoanrequest', component: GetAllloanRequestsComponent},
      { path: 'loanapproved/:accountNo', component: LoanapprovedComponent},
      { path: 'loanrejected/:accountNo', component: LoanrejectedComponent}
    ],
  },
 
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
