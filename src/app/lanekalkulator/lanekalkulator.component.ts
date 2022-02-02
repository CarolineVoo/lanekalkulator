import { Component, OnInit, AfterContentChecked, ChangeDetectorRef } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lanekalkulator',
  templateUrl: './lanekalkulator.component.html',
  styleUrls: ['./lanekalkulator.component.css']
})
export class LanekalkulatorComponent implements OnInit {

  @Output() onSetRente = new EventEmitter<string>();

  maxBelop: number;
  minBelop: number;
  belop: number;
  periode: number;
  manedligBelop: number;
  rente = "1.9%"
  

  constructor() { }

  ngOnInit(): void {
    this.maxBelop = 10000000;
    this.minBelop = 0;
    this.belop = this.maxBelop / 2;
    this.periode = 0;
    this.onSetRente.emit("1.9%");
  }

  onChangeBelop(value: number) {
    this.belop = value;
    this.getManedligBelop()
  }

  onChangePeriode(value: number) {
    this.periode = value;
    this.getManedligBelop()
  }

  getManedligBelop(): number {
    this.manedligBelop = this.belopFormel(this.belop, 2.3, this.periode);
    console.log(this.manedligBelop);
    return this.manedligBelop;
  }

  belopFormel(belop: number, rente: number, periode: number): number {
    var sum = belop * ( rente / (1-(1+ rente )^(- periode)));
    return sum;
  }



}
