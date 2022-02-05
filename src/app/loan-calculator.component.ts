import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './loan-calculator.component.html',
  styleUrls: ['./loan-calculator.component.css']
})
export class LoanCalculatorComponent implements OnInit {
  amount: number;
  period: number;
  monthlyAmount: number;
  rente = "1.9%"

  constructor() { }

  ngOnInit(): void {
    this.amount = 1000000;
    this.period = 10;
    this.onChangeLoan();
  }


  onChangeLoan(): void {
    this.monthlyAmount = this.monthlyLoanFormula(this.amount, 1.02, this.period);
  }



  monthlyLoanFormula(belop: number, rente: number, period: number): number {
    let month = period * 12;
    // let beregn1 = Math.pow((1 + rente ), (-(month)));
    // this.monthlyAmount = belop * ( rente / (1 - beregn1));
    // //y = G * (r / (1-(1+r)^(-n)))
    let sum = belop * ( rente / (1 - (1 + rente )^(-month)));
    return sum;
    
  }



  

}
