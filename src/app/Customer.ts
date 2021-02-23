export interface Customer
{
    customerName:string;
    userName:string;
    contactNumber:string;
    aadharNumber:string;
    panNumber:string;
    dateOfBirth:string;
    gender:string;
    address:string;
    account:Account;
}

export interface Account{
    accountId:string;
    branch:string;
    accountType:string;
    amount:number;
	lastUpdated:Date;

}