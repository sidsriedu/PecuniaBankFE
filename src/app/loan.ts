export interface LoanRequests {


    accountId: string;
    loanAmount: number;
    loanTenure: number;
    creditScore: number;
    loanRoi: number;
    loanStatus: string;
    loanType: string;
    loanId: number;


}

export interface LoanDisbursal {


    accountId: string,
    loanAmount: number,
    loanTenure: number,
    creditScore: number,
    loanRoi: number,
    loanStatus: string,
    loanType: string,
    emi: number,
    loanId: number;
}