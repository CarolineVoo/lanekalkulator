import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/services/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './loan-calculator.component.html',
  styleUrls: ['./loan-calculator.component.css']
})
export class LoanCalculatorComponent implements OnInit {
  amount: number;
  period: number;
  monthlyAmount: number;
  displayMonthlyAmount: string;
  rente = "2.0%"

  constructor(private globalService: GlobalService) { }

  ngOnInit(): void {
    this.amount = 10000000 / 2;
    this.period = 30/2;
    this.onChangeLoan();
  }

  onChangeLoan(): void {
    this.monthlyAmount = this.monthlyLoanFormula(this.amount, 0.02, this.period);
    this.displayMonthlyAmount = this.globalService.numberWithSpaces(this.monthlyAmount);
  }

  monthlyLoanFormula(amount: number, interestRate: number, period: number): number {
    //Formula: y = G * (r / (1-(1+r)^(-n)))
    let numOfMonthsInPeriod = period * 12;
    let interestRatePerMonth = interestRate / 12;
    let powerOfinterestRate = Math.pow((1 + interestRatePerMonth ), (-(numOfMonthsInPeriod)));
    let sum = amount * (interestRatePerMonth / (1 - powerOfinterestRate)); 
    return Math.round(sum);
    
  }

  numberWithSpaces(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }



  

}
